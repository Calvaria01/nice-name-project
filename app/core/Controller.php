<?php

namespace app\core;

use app\core\View;

class Controller
{
    protected View $view;

    public function __construct(string $page)
    {
        $this->view = new View($page);
    }
}
