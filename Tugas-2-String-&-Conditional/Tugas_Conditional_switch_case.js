var hari = 16; 
var bulan = 1; 
var tahun = 1945;

switch(bulan) {
  case 1:   { var bulan2 = "Januari"; break; }
  case 2:   { var bulan2 = "Februari"; break; }
  case 3:   { var bulan2 = "Maret"; break; }
  case 4:   { var bulan2 = "April"; break; }
  case 5:   { var bulan2 = "Mei"; break; }
  case 6:   { var bulan2 = "Juni"; break; }
  case 7:   { var bulan2 = "Juli"; break; }
  case 8:   { var bulan2 = "Agustus"; break; }
  case 9:   { var bulan2 = "September"; break; }
  case 10:   { var bulan2 = "Oktober"; break; }
  case 11:   { var bulan2 = "November"; break; }
  case 12:   { var bulan2 = "Desember"; break; }
  default:  { console.log("error"); }}
//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945'; 
console.log(hari,bulan2,tahun)