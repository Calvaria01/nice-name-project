<?php

namespace app\controllers;

use app\core\Controller;
use app\core\View;
use app\models\ProductList;
use app\core\ProductMapper;

class ProductListController extends Controller
{
    public function showAction()
    {
        $this->view->render();
    }
    public function getDataAction()
    {
        $model = new ProductList();
        $data = $model->getProducts();
        $storage = new ProductMapper($data);
        $storage->verifyProducts();
        echo json_encode($storage->toDisplay());
    }
    public function deleteAction()
    {
        $postData = file_get_contents('php://input');
        $data = json_decode($postData, true);
        $model = new ProductList();
        $model->deleteById($data);
        $this->getDataAction();
    }
    public function addAction()
    {
        $this->view->render();
    }
    public function saveAction()
    {
        $form = $_POST;
        $model = new ProductList();
        $response = $model->validateForm($form);
        if (!$response['isErr']) {
            $model->saveProduct($form);
        }
        echo json_encode($response);
    }
}
