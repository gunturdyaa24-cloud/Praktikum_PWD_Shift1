<?php

require_once 'Kucing.php';
require_once 'Anjing.php';

// Membuat objek Kucing
$kucing = new Kucing();
$kucing->setNama("Mimi");
$kucing->setUmur(2);

// Membuat objek Anjing
$anjing = new Anjing();
$anjing->setNama("Bruno");
$anjing->setUmur(3);
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Data Hewan</title>
</head>
<body>
    <h1>Data Hewan</h1>

    <h2>Hewan 1</h2>
    <p>Nama  : <?= $kucing->getNama(); ?></p>
    <p>Umur  : <?= $kucing->getUmur(); ?> tahun</p>
    <p>Jenis : <?= get_class($kucing); ?></p>
    <p>Suara : <?= $kucing->getSuara(); ?></p>

    <hr>

    <h2>Hewan 2</h2>
    <p>Nama  : <?= $anjing->getNama(); ?></p>
    <p>Umur  : <?= $anjing->getUmur(); ?> tahun</p>
    <p>Jenis : <?= get_class($anjing); ?></p>
    <p>Suara : <?= $anjing->getSuara(); ?></p>
</body>
</html>