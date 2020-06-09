console.log("Cześć wszystkim mam nadzieje że się dobrze bawicie!");

let body = document.querySelector("body");
let whiteModeButton = document.querySelector(".button-white-mode");
let firstButton = document.querySelector(".button-header");
let mainHeader = document.querySelector(".main-header");
let photoButton1 = document.querySelector(".button-photo1");
let oman = document.querySelector(".oman");
let photoButton2 = document.querySelector(".button-photo2");
let italy = document.querySelector(".italy");
let photoButton3 = document.querySelector(".button-photo3");
let rico = document.querySelector(".rico");
let photoButton4 = document.querySelector(".button-photo4");
let iceland = document.querySelector(".iceland");
let buttonPassion = document.querySelector(".button-passion");
let passion = document.querySelector(".passion");

buttonPassion.addEventListener("click", () => {
  passion.classList.toggle("passion2");
});

whiteModeButton.addEventListener("click", () => {
  body.classList.toggle("body-body");
});

firstButton.addEventListener("click", () => {
  mainHeader.classList.toggle("main-header2");
  mainHeader.innerHTML = "Witam wszystkich kursantów YOUCODE!";
});
photoButton1.addEventListener("click", () => {
  oman.src =
    "https://ksiegarnia-geograf.pl/public/upload/catalog/product/182/minigallery/thumb_page_1579205189oman_united_arab_emirates_gizi_map_1_1_250_000_2_16308_1_p.jpg";
});

photoButton2.addEventListener("click", () => {
  italy.src =
    "https://cdn.24.co.za/files/Cms/General/d/5131/2fa2f9138e2944fa833fe0a7aaac7111.jpg";
});
photoButton3.addEventListener("click", () => {
  rico.src =
    "https://cdn.britannica.com/13/5113-050-1F045026/Puerto-Rico-boundaries-map-cities-locator.jpg";
});
photoButton4.addEventListener("click", () => {
  iceland.src =
    "https://images-na.ssl-images-amazon.com/images/I/71Lr14uCUgL.__AC_SY300_QL70_ML2_.jpg";
});
console.log("whiteButtonMode");
