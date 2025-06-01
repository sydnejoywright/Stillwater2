<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $fillable = [
        'group_name',
        'start_time',
        'end_time',
        'active',
        'week_day',
        'day_time',
    ];

    /**
     * All session history records tied to this group.
     */
    public function sessionHistory()
    {
        return $this->hasMany(sessionHistories::class, 'group_id');
    }
}

