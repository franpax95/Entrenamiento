<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Routine extends Model
{
    protected $fillable = [ 'name', 'description', 'exercises' ];
}
