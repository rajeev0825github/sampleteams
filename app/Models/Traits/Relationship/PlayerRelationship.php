<?php

namespace App\Models\Traits\Relationship;

use App\Models\Team;

/**
 * Trait PlayerRelationship.
 */
trait PlayerRelationship
{

    /**
     * Team Relationship in Player model
     *
     */
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}