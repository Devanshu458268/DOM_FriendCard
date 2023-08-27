var add= document.querySelector("#add");
var remove=document.querySelector("#remove");
var friend= document.querySelector("h3");
var action=document.querySelector("#action");
var friend2= document.querySelector("#c2h3");

add.addEventListener("click",function(){
    friend.style.color="green"
    friend.innerHTML="Friends"
})
remove.addEventListener("click",function(){
    friend.style.color="red"
    friend.innerHTML="Stranger"
})


var flag=0;
action.addEventListener("click",function(){
    if(flag==0){
        friend2.innerHTML="Friends";
        friend2.style.color="green";
        action.innerHTML="Remove";
        action.style.backgroundColor="#dadada";
        action.style.color="black";
        flag=1;
    }else{
        friend2.innerHTML="Stranger";
        friend2.style.color="red";
        action.innerHTML="Add Friend";
        action.style.backgroundColor="lightseagreen";
        action.style.color="white";
        flag=0;

    }
   
})


