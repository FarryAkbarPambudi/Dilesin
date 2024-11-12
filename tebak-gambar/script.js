// array untuk soal
const dataSoal = [
    { gambar: 'soal1.jpg', jawaban: 'rekening besar'},
    { gambar: 'soal2.jpg', jawaban: 'selalu sayang'},

]

let index = 0
let nilai = 0

const gambarSoal = document.getElementById('gambar-soal')
const inputJawaban = document.getElementById('input-jawaban')
const btnJawab = document.getElementById('btn-jawab')

function tampilkanSoal() {
    gambarSoal.src = dataSoal[index].gambar
    inputJawaban.value = ''
}

// mendeklarasikan inputan jawaban dan juga jawaban

3 