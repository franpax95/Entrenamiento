<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    protected $fillable = [ 'name', 'category_id', 'description', 'image' ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function getgetImageAttribute(){
        return url("storage/$this->image");
    }
}
