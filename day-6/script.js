// console log berfungsi untuk menampilkan nilai pada console
console.log("Hello World")

// 1. Variable adalah tempat untuk menyimpan sebuah nilaj / value
var nama = "Farry"
console.log(nama)

let nilai = 80
console.log(nilai)

nilai = 70
console.log(nilai)

// untuk const nilai dari variable nya tidak bisa diubah
const kkm = 75
console.log(kkm)

// 2. Tipe Data 

// Tipe Data String
let alamat = "Purwokerto"
alamat = 'Purwokerto'

console.alamat

// Tipe Data Number
let angka1 = 100
console.log(angka1)

// Tipe Data Boolean
let islogin  = true

if(islogin) {
    console.log("Sudah Login")
}else {
    console.log("Belum Login")
}

// Tipe Data Object adalah tipe data yang digunakan untuk menampilkan detail dari suatu nilai
let mobil = {
    warna: "Merah",
    merk: "BMW",
    JenisTransmisi: "manual",
    tahunpembuatan: 2020
}

console.log(mobil)
console.log ("Warna mobil", mobil.warna)
console.log ("Merk mobil", mobil.merk)


// Tipe Data Array adalah tipe data yang digunakan untuk menyimpen banyak nilai
let ListMobil = ["BMW", "Civiv", "inova", "Kijang"]
console.log(ListMobil)
console.log(ListMobil[1])
console.log(ListMobil[2])

console.log ("List Mobil")
for (let i =0; i < ListMobil.length; i++) {
    console.log(i + 1, ListMobil[i])
}

// pengkondisian
const nilaiKKM = 75
const nilaiZidan = 100

if (nilaiZidan >= nilaiKKM) {
    console.log("Zidan KKM")
}else{
    console.log("Zidan Tidak KKM")
    }

// else if
if(nilaiZidan === 100) {
    console.log("Zidan Pintar")
} else if (nilaiZidan >= nilaiKKM) {
    console.log("Zidan KKM")
} else {
    console.log("Zidan Tidak KKM")
}


// switch sama saja dnengan if digabung sama else if
// 


const statusPembayaran = "PENDING"

switch (statusPembayaran) {
    case "SUCCES":
        console.log("Pembayaran Berhasil")
        break
    case "PENDING":
        console.log("Pembayaran Sedang Diperoses")
        break
    case "FAILED":
        console.log("Pembayaran Gagal")
        break
    default:
        console.log("Pembayaran TIdak Diketahui")
        break
}

// else if

const jumlahbuku = 10

if(jumlahbuku >= 10) {
    console.log("Diskon 20%")
} else if(jumlahbuku >=5 && jumlahbuku <=10) {
    console.log("Diskon 10%")
} else {
    console.log("Tidak Ada Diskon")
}


// 4. Perulangan

// perulangan for
for(let i = 0; i<= 100; i++) {
    console.log(`${i}. I LOVE YOU`)
}

// perulangan while

let x = 1
while(x <= 20){
    console.log(`${x}, I LOVE YOU`)
    x++
}


let y = 1

do {
    console.log(`${y}, I LOVE YOU`)
    y++
} while (y <= 20)


