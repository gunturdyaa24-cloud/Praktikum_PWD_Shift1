<?php

// class Kendaraan{
//     public $merk ="";
//     public $model ="";
//     public $warna ="";
//     public $roda=0;

//     function Klakson(){
//         echo "Honk!";
//     }
// //seter untuk atribut
//     function Setmerk($brand){
//         $this->merk=$brand;
//     }
//     function Setmodel($series){
//         $this->model=$series;
//     }
//     function Setwarna($colors){
//         $this->warna=$colors;
//     }
//     function Setroda($tire){
//         $this->roda=$tire;
//     }

//     function Getmerk(){
//         return $this->merk;
//     }
//     function Getmodel(){
//         return $this->model;
//     }
//     function Getwarna(){
//         return $this->warna;
//     }
//     function Getroda(){
//         return $this->roda;
//     }

//     // //tag pembuka
//     // function __construct(){
//     //     echo "<h3>Pembuatan sebuah kendaraan<h3><br>";
//     // }

//     // //tag penutup
//     // function __destruct(){
//     //     echo "<h5>contact . about . home<h5><br>";
//     // }

//     function SELLDATA($brand,$series,$colors,$tire){
//         $this->merk=$brand;
//         $this->model=$series;
//         $this->warna=$colors;
//         $this->roda=$tire;
//     }

// }

// class Motor extends Kendaraan{

//     function StandardOn(){
//         echo "on";
//     }
//     function StandardOff(){
//         echo "off";
//     }
// }

// $mobil= new Kendaraan();

// $mobil->Setmerk("BMW");
// $mobil->Setmodel("M4");
// $mobil->Setwarna("Merah");
// $mobil->Setroda(4);

// echo "Merk  : ".$mobil->Getmerk()."<br>";
// echo "Model : ".$mobil->Getmodel()."<br>";
// echo "Warna : ".$mobil->Getwarna()."<br>";
// echo "Roda  : ".$mobil->Getroda()."<br>";

// $mobil->Klakson();

// $motor= new Motor();

// $motor->Setmerk("Yamaha");
// $motor->Setmodel("Vixion");
// $motor->Setwarna("Putih");
// $motor->Setroda(2);

// echo "<br><br> Merk  : ".$motor->Getmerk()."<br><br>";
// echo "<br> Model : ".$motor->Getmodel()."<br><br>";
// echo "<br> Warna : ".$motor->Getwarna()."<br><br>";
// echo "<br> Roda  : ".$motor->Getroda()."<br><br>";

// echo "<br";
// $motor->StandardOn();


class Segitiga{
    public $tinggi = 0;
    public $alas = 0;
    public $sisi = 0;

    function tampilkanNilai(){
        echo "Tinggi : " . $this->tinggi . "<br>";
        echo "Alas   : " . $this->alas . "<br>";
        echo "Sisi   : " . $this->sisi . "<br>";
    }
}


class SegitigaSamaKaki extends Segitiga{
    public function hitungLuas(){
        return 0.5 * $this->alas * $this->tinggi;
    }

    public function hitungKeliling(){
        return $this->alas + (2 * $this->sisi);
    }
}

class SegitigaSikuSiku extends Segitiga{
    public function hitungLuas(){
        return 0.5 * $this->alas * $this->tinggi;
    }

    public function hitungSisiMiring(){
        return sqrt(pow($this->alas, 2) + pow($this->tinggi, 2));
    }

    public function hitungKeliling(){
        return $this->alas + $this->tinggi + $this->hitungSisiMiring();
    }
}

class SegitigaSamaSisi extends Segitiga{
    public function hitungLuas(){
        if ($this->sisi > 0) {
            return (sqrt(3) / 4) * pow($this->sisi, 2);
        }
        return 0.5 * $this->alas * $this->tinggi;
    }

    public function hitungKeliling(){
        return 3 * $this->sisi;
    }
}

    echo "<h3>1. Segitiga Sama Kaki</h3>";
        $samaKaki = new SegitigaSamaKaki();
        $samaKaki->tinggi = 8;
        $samaKaki->alas = 6;
        $samaKaki->sisi = 5;
        $samaKaki->tampilkanNilai();
    echo "Luas     : " . $samaKaki->hitungLuas() . "<br>";
    echo "Keliling : " . $samaKaki->hitungKeliling() . "<br>";

    echo "<h3>2. Segitiga Siku-Siku</h3>";
        $sikuSiku = new SegitigaSikuSiku();
        $sikuSiku->tinggi = 4;
        $sikuSiku->alas = 3;
        $sikuSiku->tampilkanNilai();
    echo "Sisi Miring : " . $sikuSiku->hitungSisiMiring() . "<br>";
    echo "Luas        : " . $sikuSiku->hitungLuas() . "<br>";
    echo "Keliling    : " . $sikuSiku->hitungKeliling() . "<br>";

    echo "<h3>3. Segitiga Sama Sisi</h3>";
        $samaSisi = new SegitigaSamaSisi();
        $samaSisi->sisi = 6;
        $samaSisi->alas = 6;
        $samaSisi->tinggi = 5.2;
        $samaSisi->tampilkanNilai();
    echo "Luas     : " . round($samaSisi->hitungLuas(), 2) . "<br>";
    echo "Keliling : " . $samaSisi->hitungKeliling() . "<br>";