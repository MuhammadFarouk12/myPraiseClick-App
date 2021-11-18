let total = 5_000;
let clicks = localStorage.getItem('clicks') ? localStorage.getItem('clicks') : '0000';
function upadateLocalStorageBy(value){
    clicks = value;
    localStorage.setItem('clicks', value);
    document.getElementById('clicks').innerHTML = value;
    countNum.innerHTML = Number(localStorage.getItem('clicks')) + total;
};
upadateLocalStorageBy(clicks);
function increment(){
    clicks++;
    upadateLocalStorageBy(clicks)
};