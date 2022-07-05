<?php

namespace app\products;

use app\products\Item;

class Book extends Item
{
    protected int $id;
    protected string $sku;
    protected string $name;
    protected int $price;
    protected int $weight;
    protected string $productType;

    public function toDisplay(): array
    {
        $arr = get_object_vars($this);
        $arr['dimension'] = 'Weight';
        $arr['value'] = $this->weight . ' KG';
        return $arr;
    }
}
