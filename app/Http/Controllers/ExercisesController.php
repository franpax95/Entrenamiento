<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exercise;
use App\Category;
use Illuminate\Support\Facades\Storage;

class ExercisesController extends Controller
{
    public function index(){
        $exercises = Exercise::orderBy('name', 'asc')->get();
        foreach($exercises as $exercise){
            $category = Category::where('id', $exercise->category_id)->get();
            $exercise->category = $category[0];
        }

        return $exercises;
    }

    public function show(Exercise $exercise){
        $category = Category::where('id', $exercise->category_id)->get();
        $exercise->category = $category[0];
        return $exercise;
    }

    public function store(Request $request){
        $this->validate($request, [
            'name' => 'required'
        ]);

        $exercise = Exercise::create($request->all());
        if($request->file('image')){
            $exercise->image = $request->file('image')->store('exercises', 'public');
            $exercise->save();
        }

        return response()->json($exercise, 201);
    }

    public function update(Request $request, Exercise $exercise){
        $exercise->update($request->all());
        return response()->json($exercise, 200);
    }

    public function delete(Exercise $exercise){
        $exercise->delete();
        return response()->json(null, 204);
    }
}
