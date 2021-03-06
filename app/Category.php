<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [ 'id', 'name' ];

    public function exercises(){
        return $this->hasMany(Exercise::class);
    }
}
