<?php

namespace app\core;

use app\core\View;

class Route
{
    private string $controller;
    private string $action;
    private string $page; // ?page

    public function __construct(array $routes, string $uri)
    {
        if (!$this->findRoute($routes, $uri)) {
            View::renderError('Путь не найден');
        } elseif (!$this->checkController()) {
            View::renderError('Controller или action не найдены');
        }
    }

    private function findRoute(array $routes, string $uri): bool
    {
        $key = trim($uri, "/");
        if (array_key_exists($key, $routes)) {
            $this->page = $routes[$key]['page'];
            $this->controller = 'app\controllers\\' . $routes[$key]['controller'] . 'Controller';
            $this->action = $routes[$key]['action'] . 'Action';

            return true;
        }
            return false;
    }

    private function checkController(): bool
    {
        return method_exists($this->controller, $this->action);
    }

    public function startAction(): void
    {
        $controller = new $this->controller($this->page);
        $action = $this->action;
        $controller->$action();
    }
}
