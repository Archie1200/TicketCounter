var content;

document.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("p").addEventListener("click",function(){
        content=document.getElementById("text").value;
        document.getElementById("sec").style.display="flex";
    })
}

document.getElementById("del").addEventListener("click",function(){
    document.getElementById("sec").style.display="none";
    document.getElementById("pink").style.display="none";
    document.getElementById("blue").style.display="none";
    document.getElementById("green").style.display="none";
    document.getElementById("black").style.display="none";
})
document.getElementById("select1").addEventListener("click",function(){
    content=document.getElementById("text").value;
    document.getElementById("select1").style.border="2px solid grey";
    document.getElementById("sec").style.display="none";
    document.getElementById("pink").style.display="block";
    document.getElementById("val2").innerHTML=content;
})
document.getElementById("select2").addEventListener("click",function(){
    content=document.getElementById("text").value;
    document.getElementById("select2").style.border="2px solid grey";
    document.getElementById("sec").style.display="none";
    document.getElementById("blue").style.display="block";
    document.getElementById("val3").innerHTML=content;
    
})
document.getElementById("select3").addEventListener("click",function(){
    content=document.getElementById("text").value;
    document.getElementById("select3").style.border="2px solid grey";
    document.getElementById("sec").style.display="none";
    document.getElementById("green").style.display="block";
    document.getElementById("val1").innerHTML=content;
    
})
document.getElementById("select4").addEventListener("click",function(){
    content=document.getElementById("text").value;
    document.getElementById("select4").style.border="2px solid grey";
    document.getElementById("sec").style.display="none";
    document.getElementById("black").style.display="block";
    document.getElementById("val4").innerHTML=content;
    
})