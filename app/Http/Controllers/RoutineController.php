<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Routine;
use App\Exercise;

class RoutineController extends Controller
{
    public function index(){
        $routines = Routine::orderBy('name', 'asc')->get();

        return $routines;
    }

    public function show(Routine $routine){
        return $routine;
    }

    public function store(Request $request){
        $this->validate($request, [
            'name' => 'required'
        ]);

        $routine = Routine::create($request->all());

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
