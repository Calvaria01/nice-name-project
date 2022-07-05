<?php

namespace app\products;

abstract class Item
{
    public function __construct(array $arr)
    {
        foreach ($arr as $key => $value) {
            $this->$key = $value;
        }
    }
    public function toDB(): array
    {
        return get_object_vars($this);
    }
    abstract public function toDisplay();
}