<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoriesController extends Controller
{
    public function index(){
        $categories = Category::orderBy('name', 'asc')->get();
        return $categories;
    }

    public function show(Category $category){
        // $exercises = Exercise::orderBy('name', 'asc')
        //     ->where('category_id', $category->id)
        //     ->get();
        // return $exercises;
        return $category;
    }

    public function store(Request $request){
        $this->validate($request, ['name' => 'required']);
        $category = Category::create($request->all());
        return response()->json($category, 201);
    }

    public function update(Request $request, Category $category){
        $category->update($request->all());
        return response()->json($category, 200);
    }

    public function delete(Category $category){
        $category->delete();
        return response()->json(null, 204);
    }
}
