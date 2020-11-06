<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Player as PlayerResource;

class Team extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'icon' => $this->icon,
            'phone_number' => $this->phone_number,
            'players' => PlayerResource::collection($this->whenLoaded('players')),
            'created_at' => $this->created_at->format('m-d-Y H:i:s'),
            'updated_at' => $this->updated_at->format('m-d-Y H:i:s')
        ];
    }
}
