let listIsimler = [];
let kullaniciSayisi = Number(
  prompt("Eklemek isteğiniz kullanıcı sayısını girin:")
);

let listIsim;

function kullaniciEkle() {
  for (let i = 0; i < kullaniciSayisi; i++) {
    listIsim = prompt("Eklemek isteğiniz ismi girin:");
    listIsimler.push(listIsim);
  }

  console.log(listIsimler);
}

let arananIsim;

function kullaniciAra() {
  arananIsim = prompt(
    "aramak istediğiniz kişinin adını giriniz: "
  ).toLowerCase();
  let sayac = 0;
  for (let i = 0; i < listIsimler.length; i++) {
    if (listIsimler[i].toLowerCase() === arananIsim) {
      sayac++;
    }
  }

  if (sayac > 0) {
    console.log(`${arananIsim} ismi listenizde ${sayac} adet bulundu.`);
  } else {
    console.log("aradığınız kullanıcı bulunmadı");
  }
}
kullaniciEkle();
kullaniciAra();
