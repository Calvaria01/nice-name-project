<?php

namespace app\core;

class View
{
    private string $page;

    public function __construct(string $page)
    {
        $this->page = $page;
    }
    public static function renderError($text): void
    {
        echo $text;
        exit;
    }
    public function render(): void
    {
        require 'public/dist/' . $this->page . '.html';
    }
}
