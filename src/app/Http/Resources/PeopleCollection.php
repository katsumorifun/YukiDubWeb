<?php

/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 */

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PeopleCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return $this->collection->toArray();
    }
}
