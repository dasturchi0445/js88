let raqam1 = 5;
let raqam2 = "2";

// console.log(raqam1 - raqam2);
// console.log(raqam1 * raqam2);
// console.log(raqam1 / raqam2);
// console.log(raqam1 % raqam2);

// ------------------------------

// console.log(raqam1 + raqam2);
// console.log('2' + 5 + 5);
// console.log(5 + 5 + '2');
// console.log('5A' - '5');

console.log(Math.floor(2.5));
console.log(Math.round(2.4));
console.log(Math.max(2, 3, 4, 55, 5, 6, 7, 8, 23));
console.log(Math.min(2, 3, 4, 55, 5, 6, 7, 8, 23));

//Homework

let random = Math.floor(Math.random() * 1000);

alert("Random son: " + random);

let tasdiqlash = confirm("Shu sonni 2 kopaytirib 2 ga bolmoqchimisiz!");

if (tasdiqlash) {
  alert(`Random sonni 2ga kopaytirdik shu natija chiqdi: ${random * 2};
  Random sonni 2ga boldik shu son chiqdi: ${random / 2}
  Random sonni 2ga boldik qoldiq shu son: ${random % 2}`);
} else {
  alert("Amal tasdiqlanmadi");
}
