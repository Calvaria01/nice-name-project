<?php

namespace app\products;

use app\products\Item;

class Furniture extends Item
{
    protected int $id;
    protected string $sku;
    protected string $name;
    protected int $price;
    protected int $height;
    protected int $width;
    protected int $length;
    protected string $productType;

    public function toDisplay(): array
    {
        $arr = get_object_vars($this);
        $arr['dimension'] = 'Dimension';
        $arr['value'] = $this->height . 'x' . $this->width . 'x' . $this->length;
        return $arr;
    }
}