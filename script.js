const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]
// let hasil = []

// mencari angka >= 3
// for
// for(i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         hasil.push(angka[i])
//     }

// }

// console.log(hasil)

// FILTER dan arrow function

// const newAngka = angka.filter( a => a >= 3);

// console.log(newAngka)


// MAP dan arrow function

// const newAngka = angka.map(a => a * 2);
// console.log(angka)
// console.log(newAngka)



// REDUCE dan arrow function
// note!! = nilai `0` di akhir itu nilai default

// const newAngka = angka.reduce((accumulator,currentValue) => accumulator + currentValue, 0);

// console.log(newAngka)   



// METHOD CHAINING dan arrow function

// cari > 5
// kalian 3
//  jumblah kan


// const hasil = angka.filter( a => a > 5)
//     .map(a => a * 3)
//     .reduce((accumulator,currentValue) => accumulator + currentValue);



// console.log(hasil)





















































// ambil semua elemen vidio

const videos = Array.from(document.querySelectorAll('[data-duration]'));
// console.log(videos)

// pilih hanya yang `javascript lanjutan`

const jsLanjut = videos.filter(video => video.textContent.includes(`JAVASCRIPT LANJUTAN`))

    // ambil durasi masing2 vidio 

    .map(item => item.dataset.duration)

    // ubah durasi menjadi integer, ubah menit menjadi detik

    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part))
        return parts[0] * 60 + parts[1]
    })
    // jumblah kan semua detik nya

    .reduce((total, detik) => total + detik)
// ubah format nya jadi jam menit detik 

const jam = Math.floor(jsLanjut / 3600)
const menit = Math.floor((jsLanjut - (jam * 3600)) / 60)
const detik = jsLanjut - jam * 3600 - menit * 60

// simpan di dom

const pDurasi = document.querySelector(`.total-durasi`)
pDurasi.textContent = `${jam} Jam,${menit} Menit,${detik} Detik`

const jmlvidio = videos.filter(video => video.textContent.includes(`JAVASCRIPT LANJUTAN`)).length
const hslvidio = document.querySelector(`.jumlah-video`)
hslvidio.textContent = `${jmlvidio} Video`
 