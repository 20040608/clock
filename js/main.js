function showTime(){
    let date = new Date();
    let y = date.getFullYear();
    let o = date.getMonth() + 1;
    let d = date.getDate();
    let t = date.getDay();  
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    
    o = (o < 10) ? "0" + o : o;
    t = (t < 10) ? "0" + t : t;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = y + ":" + o + ":" + d + ":" +  t + ":" + h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();