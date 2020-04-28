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
        $return_routine['name'] = $routine->name;
        $return_routine['description'] = $routine->description;
        $return_routine['exercises'] = array();
        

        //Array of strings
        $exs = explode(":", $routine->exercises);

        //$ex = "id.nRep.tOn.tOff"
        foreach($exs as $ex){
            $parameters = explode(".", $ex);
            $exercise = Exercise::where('id', $parameters[0])->first()->toArray();
            $category = Category::where('id', $exercise['category_id'])->first();

            $exercise['category'] = $category;
            $exercise['nRep'] = $parameters[1];
            $exercise['tOn'] = $parameters[2];
            $exercise['tOff'] = $parameters[3];

            array_push($return_routine['exercises'], $exercise);
        }

        return $return_routine;
    }

    public function store(Request $request){
        $this->validate($request, [
            'name' => 'required'
        ]);

        //Estructure exercises-> id.nRep.tOn.tOff:id.nRep.tOn.tOff:id.tOn...
        $req_exs = $request->input('exercises');
        $req_nRep = $request->input('nrep');
        $req_tOn = $request->input('ton');
        $req_tOff = $request->input('toff');
        $length = count($req_exs);
        
        $exercises = '';
        for($i=0; $i<$length; $i++){
            $exercises = $exercises .
                $req_exs[$i] . '.' .
                $req_nRep[$i] . '.' .
                $req_tOn[$i] . '.' .
                $req_tOff[$i];
            ($i == ($length-1)) ? $sep='' : $sep=':';
            $exercises = $exercises . $sep;
        }

        $routine = Routine::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'exercises' => $exercises
        ]);

        // $routine = new Routine;
        // $routine->name = $request->input('name');
        // $routine->description = $request->input('description');
        // $routine->exercises = $exercises;
        // $routine->save();


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
