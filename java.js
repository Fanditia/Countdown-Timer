let idulFitri = new Date(new Date().getFullYear() + 1, 0, 1);

let $hari = document.getElementById('hari');
let $jam = document.getElementById('jam');
let $menit = document.getElementById('menit');
let $detik = document.getElementById('detik');

setInterval(function() {
    var now = new Date();
    var lefttm = (idulFitri - now) / 1000;
    updateclock(lefttm);
},   1000);
    
    function updateclock(RemainingTime) {

        let hari = Math.floor(RemainingTime / 86400);
        RemainingTime -= hari * 86400;

        let jam = Math.floor(RemainingTime / 3600) % 24;
        RemainingTime -= jam * 3600;

        let menit = Math.floor(RemainingTime / 60) % 60;
        RemainingTime -= menit * 60;

        let detik = Math.floor(RemainingTime % 60);

        $hari.innerHTML = Number(hari);
        $jam.innerHTML = Number(jam);
        $menit.innerHTML = Number(menit);
        $detik.innerHTML = Number(detik);
    }
    function Number(number){
        return number < 10 ? "0" + number : number;
    }