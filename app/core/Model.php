<?php

namespace app\core;

use app\core\Db;
use PDO;

class Model
{
    protected PDO $db;

    public function __construct()
    {
        $this->db = ( new Db() ) -> pdo;
    }

    protected function query($sql, $params = []): bool|\PDOStatement
    {
        $stmt = $this->db->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }

    protected function fetch($sql, $params = []): bool|array
    {
        $result = $this->query($sql, $params);
        return $result->fetchALl(PDO::FETCH_ASSOC);
    }
}
