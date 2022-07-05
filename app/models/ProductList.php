<?php

namespace app\models;

use app\core\Model;

class ProductList extends Model
{
    public function getProducts(): array
    {
        $arr = [];
        $sql = "SELECT p.id, p.sku, p.productType, b.name, b.price, b.weight FROM
                product as p
                    inner join Book as b
                            on p.sku = b.sku";
        $arr1 = $this->fetch($sql);
        $sql = "SELECT p.id, p.sku, p.productType, d.name, d.price, d.size FROM
                product as p
                    inner join DVD as d
                               on p.sku = d.sku";
        $arr2 = $this->fetch($sql);
        $sql = "SELECT p.id, p.sku, p.productType, f.name, f.price, f.height, f.width, f.length FROM
                product as p
                    inner join Furniture as f
                               on p.sku = f.sku";
        $arr3 = $this->fetch($sql);
        $arr = array_merge($arr1, $arr2, $arr3);

        usort($arr, function ($a, $b) {
            return $a['id'] - $b['id'];
        });
        return $arr;
    }
    public function saveProduct(array $form)
    {
        $sku = $form['sku'];
        $productType = $form['productType'];
        unset($form['productType']);

        $sql = "insert into product (sku, productType) VALUES
            (:sku, :productType)";

        $this->query($sql, ['sku' => $sku,
            'productType' => $productType]);

        $arr = array_keys($form);
        $keys = implode(", ", $arr);
        $values = implode(", ", array_map(fn($e) => ':' . $e, $arr));

        $sql = "insert into " . $productType .
                " (" . $keys . ") VALUES (" . $values . ")";

        $this->query($sql, $form);
    }
    public function deleteById(array $ids): bool
    {
        foreach ($ids as $id) {
            $sql = "DELETE FROM product WHERE id = " . $id;
            if (!$this->query($sql)) {
                return false;
            }
        }
        return true;
    }
    public function validateForm(array $form): array
    {
        // $res = $this->isEmpty($form) || $this->skuExist($form['sku']) || $this->checkType();
        if ($this->isEmpty($form)) {
            $res = $this->isEmpty($form);
            $res['isErr'] = true;
            return $res;
        } elseif ($this->skuExist($form['sku'])) {
            $res = $this->skuExist($form['sku']);
            $res['isErr'] = true;
            return $res;
        } elseif ($this->checkType($form)) {
            $res = $this->checkType($form);
            $res['isErr'] = true;
            return $res;
        }
        return ['isErr' => false];
    }
    private function skuExist(string $sku): bool|array
    {
        $sql = "SELECT * FROM product WHERE sku = '$sku'";
        $result = $this->fetch($sql);
        return $result ? ['sku' => 'SKU already exist'] : false;
    }
    private function isEmpty(array $form): bool|array
    {
        $res = [];
        foreach ($form as $key => $value) {
            if (empty($value)) {
                $res[$key] = 'Please, submit required data';
            }
        }
        return $res ? $res : false;
    }
    private function checkType(array $form): bool|array
    {
        $res = [];
        $types = ['size', 'weight', 'price', 'height', 'width', 'length'];
        foreach ($form as $key => $val) {
            if (in_array($key, $types) && intval($val) != $val) {
                $res[$key] = 'Please, provide the data of indicated type';
            }
        }
        return $res ? $res : false;
    }
}
