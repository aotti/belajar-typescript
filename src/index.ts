let nama: string = 'wawan'

// tipe untuk array
let days: string[]
days = ['monday', 'sunday']

// tipe untuk object
type KertasType = {
    ketebalan: string,
    permukaan: string,
    ukuran: number
}
// memberi object 'kertas' dgn tipe KertasType
// maka key dan value harus sesuai dgn tipe yang diberikan
const kertas: KertasType = {
    ketebalan: 'tipis',
    permukaan: 'halus',
    ukuran: 12
}

// interface untuk tipe yg lebih luas
// interface dari sebuah mouse
interface Mouse {
    jenis: string,
    panjang: number,
    lebar: number,
    berat: number,
    wireless: boolean,
    sensor: string
}

// interface untuk mouse gaming
interface Gaming extends Mouse {
    macro?: number,
    rgb?: boolean
}

// object dengan interface Mouse
const normalMouse: Mouse = {
    jenis: 'Normal',
    panjang: 6,
    lebar: 2,
    berat: 90,
    wireless: false,
    sensor: 'optical'
}

// object dengan interface Gaming
const gamingMouse: Gaming = {
    jenis: 'Gaming',
    panjang: 6,
    lebar: 2.5,
    berat: 110,
    wireless: true,
    sensor: 'am010',
    macro: 4,
    rgb: true
}

// function
// (mouse: Gaming) => memberi tipe untuk parameter 'mouse'
// (mouse: Gaming): string => memberi tipe untuk 'output function'
const mouseDescription = (mouse: Gaming): string => {
    return `
    Mouse ${mouse.jenis} memiliki spek sebagai berikut:
    > Panjang : ${mouse.panjang} cm
    > Lebar   : ${mouse.lebar} cm
    > Berat   : ${mouse.berat} gr
    > Wireless: ${mouse.wireless}
    > Sensor  : ${mouse.sensor}`
    + (mouse.rgb ? `\n    > RGB     : ${mouse.rgb}` : '')
    + (mouse.macro ? `\n    > Macro Button: ${mouse.macro}` : '')
}

const resultNormal = mouseDescription(normalMouse)
const resultGaming = mouseDescription(gamingMouse)

console.log({ nama })
console.log({ days })
console.log({ kertas })
console.log(resultNormal)
console.log(resultGaming)