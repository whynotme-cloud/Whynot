let start=document.querySelector("button");
let currpage="#FFEAD3";
start.addEventListener("click",()=>{
  if( currpage==="#FFEAD3"){
       currpage="#9E3B3B";
       document.querySelector("body").style.background="#9E3B3B";
       document.querySelector(".button").style.background="#9E3B3B";
       document.querySelector("button").style.display="none";
       document.querySelector("h2").style.display="none";
       document.querySelector(".hidden").style.display="flex";
       document.querySelector(".scoreboard").style.display="flex";
       const msg=document.querySelector("#msg");
       msg.style.display="flex";
        }
        
    console.log("start");
}); 

let user=0;
let comp=0;

const choices=document.querySelectorAll(".box");
//const msg=document.querySelector("#msg");
userpara=document.querySelector("#user");
comppara=document.querySelector("#comp");

choices.forEach((box)=>{
  box.addEventListener("click",()=>{
    const userchoice=box.getAttribute("id");
    playgame(userchoice);
  });
});

const rancomp=()=>{
  const options=["rock","paper","scissors"];
  const ranidx= Math.floor(Math.random()*3);
  return options[ranidx];
};

const playgame =(userchoice)=>{
  const compchoice=rancomp();
  if(userchoice===compchoice){
    drawgame();
  }else{
    let userwin=true;
    if(userchoice==="rock"){
      userwin=compchoice==="paper"? false:true;
    }else if (userchoice==="paper"){
     userchoice=compchoice==="scissors"?false:true;
    }else{
      userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
  }
};

const showwinner=(userwin,userchoice,compchoice) =>{
if(userwin){
  user++;
  userpara.innerText=user;
  msg.innerText=`You win! your ${user} beats ${comp}`;
}else{
  comp++;
  comppara.innerText=comp;
  msg.innerText=`You lost ${comp} beats your ${user}`;
}
};

const drawgame=()=>{
  msg.innerText="game was Draw.Try again";
  msg.style.backgroundcolor="#081b31"
};