<?php

namespace App\Models\Traits\Relationship;

use App\Models\Player;
use App\Models\User;

/**
 * Trait TeamRelationship.
 */
trait TeamRelationship
{

    /**
     * Player Relationship in Team model
     *
     */
    public function players()
    {
        return $this->hasMany(Player::class);
    }

    /**
     * User Relationship in Team model
     *
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}