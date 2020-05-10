<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Routine;
use App\Exercise;
use App\Category;

class RoutineController extends Controller
{
    public function index(){
        $routines = Routine::orderBy('name', 'asc')->get();

        foreach($routines as $routine)
            $routine->exercises = json_decode($routine->exercises);
        
        return $routines->toJSON();
    }

    public function show(Routine $routine){
        $routine->exercises = json_decode($routine->exercises);
        return $routine;
    }

    public function store(Request $request){
        $this->validate($request, [
            'name' => 'required'
        ]);

        $routine = Routine::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'exercises' => json_encode($request->input('exercises'))
        ]);

        return response()->json($routine, 201);
    }

    public function update(Request $request, Routine $routine){
        $routine->update($request->all());
        return response()->json($routine, 200);
    }

    public function delete(Routine $routine){
        $routine->delete();
        return response()->json(null, 204);
    }
}
