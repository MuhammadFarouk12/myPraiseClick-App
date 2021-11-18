let clicks = localStorage.getItem('clicks') ? localStorage.getItem('clicks') : '0000';
function upadateLocalStorageBy(value){
    localStorage.setItem('clicks', value);
    document.getElementById('clicks').innerHTML = value;
};
upadateLocalStorageBy(clicks);
function increment(){
    clicks++;
    upadateLocalStorageBy(clicks)
};