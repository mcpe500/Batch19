var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(d){
    d.forEach((x) => {
        console.log(`Nomor ID:  ${x[0]}`);
        console.log(`Nama Lengkap:  ${x[1]}`);
        console.log(`TTL:  ${x[2]} ${x[3]}`);
        console.log(`Hobi:  ${x[4]}\n`);
    });
}

dataHandling(input);