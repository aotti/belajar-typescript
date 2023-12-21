"use strict";
let nama = 'wawan';
// tipe untuk array
let days;
days = ['monday', 'sunday'];
const kertas = {
    ketebalan: 'tipis',
    permukaan: 'halus',
    ukuran: 12
};
const normalMouse = {
    jenis: 'Normal',
    panjang: 6,
    lebar: 2,
    berat: 90,
    wireless: false,
    sensor: 'optical'
};
const gamingMouse = {
    jenis: 'Gaming',
    panjang: 6,
    lebar: 2.5,
    berat: 110,
    wireless: true,
    sensor: 'am010',
    macro: 4,
    rgb: true
};
// function
const mouseDescription = (mouse) => {
    return `
    Mouse ${mouse.jenis} memiliki spek sebagai berikut:
    > Panjang : ${mouse.panjang} cm
    > Lebar   : ${mouse.lebar} cm
    > Berat   : ${mouse.berat} gr
    > Wireless: ${mouse.wireless}
    > Sensor  : ${mouse.sensor}`
        + (mouse.rgb ? `\n    > RGB     : ${mouse.rgb}` : '')
        + (mouse.macro ? `\n    > Macro Button: ${mouse.macro}` : '');
};
const resultNormal = mouseDescription(normalMouse);
const resultGaming = mouseDescription(gamingMouse);
console.log({ nama });
console.log({ days });
console.log({ kertas });
console.log(resultNormal);
console.log(resultGaming);
