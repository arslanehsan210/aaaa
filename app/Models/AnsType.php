<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnsType extends Model
{
    use HasFactory;
    public $fillable=['ans_type','ans_id'];
    public $timestamps = false;
}
