<?php

namespace app\core;

use app\core\Product;

class ProductMapper
{
    private array $productsStorage = [];

    public function __construct(array $list)
    {
        foreach ($list as $prod) {
            $product = new Product($prod);
            $this->productsStorage[] = $product;
        }
    }

    public function verifyProducts(): void
    {
        foreach ($this->productsStorage as $key => $item) {
            if (!$item->checkProd()) {
                unset($this->productsStorage[$key]);
            }
        }
    }

    public function toDisplay(): array
    {
        return array_map(function ($p) {
            return $p->toDisplay();
        }, $this->productsStorage);
    }
}
