<?php

namespace app\products;

use app\products\Item;

class DVD extends Item
{
    protected int $id;
    protected string $sku;
    protected string $name;
    protected int $price;
    protected int $size;
    protected string $productType;

    public function toDisplay(): array
    {
        $arr = get_object_vars($this);
        $arr['dimension'] = 'Size';
        $arr['value'] = $this->size . ' MB';
        return $arr;
    }
}
