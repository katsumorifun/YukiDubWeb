<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'data' =>[
                'id'=>$this->id,
                'name'=>$this->name,
                'email'=>$this->email,
                'registrationDate'=>$this->created_at,
                'roles'=>$this->roles
            ]
        ];
    }
}