let is24h=true;
function thoigian() {
    const now = new Date();
    let hour=now.getHours();
    let minute=now.getMinutes();
    let second=now.getSeconds();
    let ampm=''

    if(!is24h) {
        ampm=hour>=12 ? 'pm':'am';
        hour=hour%12;
        hour=hour ? hour:12;
    }
        

    const time =
        String(hour).padStart(2,'0')+':'+
        String(minute).padStart(2,'0')+':'+
        String(second).padStart(2,'0')+ampm;
    document.getElementById('timeDisplay').textContent=time;

    const ngay={
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    }
    const inngay=now.toLocaleDateString('vi-VN',ngay);
    document.getElementById('dateDisplay').textContent=inngay;

    const muih=Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('timezoneDisplay').textContent=muih;
}
function dinhdang(format){
    is24h=format===24;

    document.getElementById('format24').classList.toggle('active',is24h);
    document.getElementById('format12').classList.toggle('active',!is24h);

    thoigian();
}
    document.getElementById('format24').addEventListener("click",()=>dinhdang(24));
    document.getElementById('format12').addEventListener("click",()=>dinhdang(12));

    thoigian();
    setInterval(thoigian,1000);