<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Support\Str;

class GroupSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'group_id',
        'day_of_week',
        'start_time',
        'end_time',
    ];

    // Uncomment the following if you switch back to UUIDs
    /*
    public $incrementing = false;
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }
    */
}
