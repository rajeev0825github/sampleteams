<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
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
            'email' => $this->email,
            'token' => $this->createToken('Personal Access Token')->accessToken,
            'created_at' => $this->created_at->format('m-d-Y H:i:s'),
            'updated_at' => $this->updated_at->format('m-d-Y H:i:s')
        ];
    }
}
