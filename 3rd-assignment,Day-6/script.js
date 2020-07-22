
     const nn = prompt("Enter ur name");
     user.innerText +=`WELLCOME ${nn}`;

     function clk(){
  let date =new Date();
  let time =date.toLocaleTimeString();
  clock.innerHTML=time;
  }
  setInterval(clk,1000);


  const drk=document.getElementById('btn');
  const body=document.getElementById('bd');


drk.onclick = ()=>{
    if(body.className == 'show'){
        body.className = '';
       
    }
    else{
        body.className = 'show';
      
    }
} 