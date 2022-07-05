<?php

namespace app\core;

class Product
{
    private mixed $product;

    public static function checkProd(): bool
    {
        return true;
    }
    public function __construct(array $arr)
    {
        $type = "app\products\\" . $arr['productType'];
        $this->product = new $type($arr);
    }
    public function toDB(): array
    {
        return $this->product->toDB();
    }
    public function toDisplay(): array
    {
        return $this->product->toDisplay();
    }

}
