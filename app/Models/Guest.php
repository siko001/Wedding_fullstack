<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Guest extends Model {
    use HasApiTokens, HasFactory;

    protected $fillable = [
        'fullname',
        'email',
        'table_number',
        'confirmed',
        'attending',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
