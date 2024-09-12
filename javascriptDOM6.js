const body=document.querySelector('body');
const random=function(){
    const hex='0123456789ABCDEF';
    color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let rukjao;
const startala= function (){

   const lagiareh=function(){
    document.body.style.backgroundColor=random();
   } 
   if(!rukjao){
    rukjao= setInterval(lagiareh,1000);
   }
}
const stopala=function (){
     clearInterval(rukjao);
     rukjao=null;
}
document.querySelector('#start').addEventListener('click',startala);

document.querySelector('#stop').addEventListener('click',stopala);