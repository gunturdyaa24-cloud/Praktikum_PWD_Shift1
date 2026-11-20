<?php
echo "<style>
    table { border: 1px solid #999; border-collapse: separate; border-spacing: 2px; font-size: 20px; }
    td { border: 1px solid #999; padding: 1px 3px; color: #006666; }
    .judul { background: white; color: black; font-family: 'Times New Roman', serif; }
    .hijau { background: lime; }
    .kuning { background: yellow; }
    .cyan { background: cyan; }
    .kolom1 { width: 100px; }
</style>";

echo "<table>";

// Baris header
echo "<tr><td class='judul'>bilangan</td>";
for ($j = 1; $j <= 10; $j++) {
    echo "<td class='hijau'>$j</td>";
}
echo "</tr>";

// Baris isi
for ($i = 1; $i <= 10; $i++) {
    echo "<tr>";
    echo "<td class='hijau kolom1'>$i</td>";
    for ($j = 1; $j <= 10; $j++) {
        $hasil = $i * $j;
        $kelas = ($hasil % 2 == 1) ? "kuning" : "cyan";
        echo "<td class='$kelas'>$hasil</td>";
    }
    echo "</tr>";
}

echo "</table>";
?>