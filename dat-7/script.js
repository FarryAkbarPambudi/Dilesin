// function adalah sekumpalan kode yang memiliki fungsi tertentu dan bisa digunakan dimanapun

function sapaPengguna() {
    console.log("Hallo Pengguna Dilesin")
}

// memanggol function
sapaPengguna()

// function dengan parameter
function  sapaUser(nama) {
    alert(`Halo ${nama}`)
}

// sapaUser("Far")
// sapaUser("Lok")


function tambah(angka1,angka2) {
    console.log(angka1 + angka2)
}

tambah(30, 10)

function kurang(angka1,angka2) {
    console.log(angka1 - angka2)
}

kurang(30, 10)


function kali(angka1,angka2) {
    console.log(angka1 * angka2)
}

kali(30, 10)

function bagi(angka1,angka2) {
    console.log(angka1 / angka2)
}

bagi(30, 10)


// function dengan return

function hitungDiskon(total, persentase) {
    return total * persentase / 100
}

function hitungTotal(totalItem, harga, persentaseDiskon) {
    const subTotal = totalItem * harga

    console.log(subTotal - hitungDiskon(subTotal, persentaseDiskon))
}

hitungTotal(10, 1000, 10)

// Dokumen objek model
const btnAlert = document.getElementById('btn-alert')
const inputNama = document.getElementById('input-nama')
const btnSapa = document.getElementById('btn-sapa')

btnAlert.addEventListener('click', function () {
    alert("ini berhasil di click alertnya")

    console.log(inputNama.value)
})  


btnSapa.addEventListener('click', function () {
    sapaUser(inputNama.value)
})