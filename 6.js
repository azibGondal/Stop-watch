let hr=0;
let min=0;
let sec=0;
let count=0;
let call = 'true';

function start(){
    call = true;
    realWork();

}
function stop(){
    call = false;
  
    
    
}
function reset(){
    call = false;
     hr=0;
 min=0;
 sec=0;
 count=0;
    
    let cout = document.getElementById("count").innerHTML = "0" + count;
    let secc = document.getElementById("sec").innerHTML = "0" +min;
    let minn = document.getElementById("min").innerHTML = "0" +sec;
    let hourr = document.getElementById("hour").innerHTML = "0" +hr;
    

}
function realWork(){
    if(call == true){
        count = count + 1;
        document.getElementById("count").innerHTML = count;

       
        if(count==100){
            sec =sec + 1;
            count=0;
        }
        if(sec==60){
            min =min +1;
            sec=0;
            count=0;
        }
        if(min==60){
            hr =hr +1;
            sec=0;
            count=0;
            min=0;
        }
        let s = sec;
        let m = min;
        let h = hr;

        if(sec<10){
            s =  "0" +s ;
            

        }
        if(min<10){
            m =  "0" +m ;
            

        }
        if(hr<10){
            h =  "0" +h ;
           
         }
        
        document.getElementById("sec").innerHTML = s;
        document.getElementById("min").innerHTML = m;
        document.getElementById("hour").innerHTML = h;
        setTimeout(realWork,10);

    }






}
   



