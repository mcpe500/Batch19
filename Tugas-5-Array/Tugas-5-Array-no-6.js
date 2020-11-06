function dataHandling2(d){
    d.splice(-1, 1, "Pria", "SMA Internasional Metro");
    d.splice(1, 2, `${d[1]}Elsharawy`, `Provinsi ${d[2]}`)
    console.log(d);

    /*
        Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
        Format tanggal pada data adalah dd-mm-YYYY
        Misal angka bulan 01, tuliskan “Januari”
    */
    var moSplit = d[3].split("/");
    var moString;
    // Gunakan switch case untuk menuliskan bulan di atas.
    switch(Number(moSplit[1])){
        case 1: moString = "Januari"; break;
        case 2: moString = "Februari"; break;
        case 3: moString = "Maret"; break;
        case 4: moString = "April"; break;
        case 5: moString = "Mei"; break;
        case 6: moString = "Juni"; break;
        case 7: moString = "Juli"; break;
        case 8: moString = "Agustus"; break;
        case 9: moString = "September"; break;
        case 10: moString = "Oktober"; break;
        case 11: moString = "November"; break;
        case 12: moString = "Desember"; break;
    }
    console.log(moString);

    // Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
    console.log(moSplit.sort((a,b) => b - a));

    // Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
    console.log(`${d[3].split("/").join("-")}`);

    /*
        Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
        Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
        Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.
    */
   console.log(String(d[1]).slice(0, 14));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);