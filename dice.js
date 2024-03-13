let button=document.getElementById("roll");
button.addEventListener("click",function()
{
    rollingTheDice();
})


function rollingTheDice()
{  let randomNumber1=Math.floor(Math.random()*6)+1;
   let randomNumber2=Math.floor(Math.random()*6)+1;
   let randomNumber3=Math.floor(Math.random()*6)+1; 
    
    
    
    
   let member1=document.getElementById("member-1");
   member1.innerText=randomNumber1;
  
   let member2=document.getElementById("member-2");
   member2.innerText=randomNumber2;
   let member3=document.getElementById("member-3");
   member3.innerText=randomNumber3;
   let winner=document.getElementById("winner");
   

   
  if(randomNumber1>randomNumber2 && randomNumber1>randomNumber3)
  {
    winner.innerText=randomNumber1;
    let member1=document.getElementById("member-1");
    member1.style.backgroundColor="green"
    if(randomNumber2>randomNumber3)
    {   let member2=document.getElementById("member-2");
        member2.style.backgroundColor="yellow";
        let member3=document.getElementById("member-3");
        member3.style.backgroundColor="red";
    }
    else if(randomNumber3>randomNumber2)
    {
        let member2=document.getElementById("member-2");
        member2.style.backgroundColor="red";
        let member3=document.getElementById("member-3");
        member3.style.backgroundColor="yellow"; 
    }
    else{
        let member2=document.getElementById("member-2");
        member2.style.backgroundColor="blue";
        let member3=document.getElementById("member-3");
        member3.style.backgroundColor="blue";
    }
  }
  else if(randomNumber2>randomNumber1 && randomNumber2>randomNumber3)
  {
    winner.innerText=randomNumber2;
    let member2=document.getElementById("member-2");
    member2.style.backgroundColor="green"
    if(randomNumber1>randomNumber3)
    {   let member1=document.getElementById("member-1");
        member1.style.backgroundColor="yellow";
        let member3=document.getElementById("member-3");
        member3.style.backgroundColor="red";
    }
    else if(randomNumber3>randomNumber1)
    {
        let member1=document.getElementById("member-1");
        member1.style.backgroundColor="red";
        let member3=document.getElementById("member-3");
        member3.style.backgroundColor="yellow"; 
    }
    else{
        let member1=document.getElementById("member-1");
        member1.style.backgroundColor="blue";
        let member3=document.getElementById("member-3");
        member3.style.backgroundColor="blue";
    }
  }
  else if(randomNumber3>randomNumber1 && randomNumber3>randomNumber2){
    winner.innerText=randomNumber3;
    let member3=document.getElementById("member-3");
    member3.style.backgroundColor="green"
    if(randomNumber1>randomNumber2)
    {   let member2=document.getElementById("member-2");
        member2.style.backgroundColor="red";
        let member1=document.getElementById("member-1");
        member1.style.backgroundColor="yellow";
    }
    else if(randomNumber2>randomNumber1)
    {
        let member2=document.getElementById("member-2");
        member2.style.backgroundColor="yellow";
        let member1=document.getElementById("member-1");
        member1.style.backgroundColor="red"; 
    }
    else{
        let member2=document.getElementById("member-2");
        member2.style.backgroundColor="blue";
        let member1=document.getElementById("member-1");
        member1.style.backgroundColor="blue";
    }
  }
  else { 
    winner.innerText = "It's a tie!";
    member1.style.backgroundColor = "blue";
    member2.style.backgroundColor = "blue";
    member3.style.backgroundColor = "blue";
}
  
    

   
}