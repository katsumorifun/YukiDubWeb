<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnimeSerie extends Model
{
    use HasFactory;

    protected $primaryKey = 'series_id';
    public $timestamps = true;
}
