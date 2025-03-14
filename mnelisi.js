let menuList= document.getElementById("menuList")
menuList.style.maxHeight="0px";
let heading= document.getElementById("heading");

function toggleMenu(){
    if(menuList.style.maxHeight=="0px")
    {
       menuList.style.maxHeight ="300px";
       heading.style.display="none";
    }
    else{
        menuList.style.maxHeight="0px";
        heading.style.display="block";
    }
    
    
}
//function toggleIcon(){
    //let icons= document.getElementsByClassName("skills-icons")
    //icons.style.font-size == "150px";

//}
var typed = new Typed(".text",{
    strings: ["Software Developer", "Cloud Engineer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true

})


function messageSub(){

    alert("Sent!");
}
