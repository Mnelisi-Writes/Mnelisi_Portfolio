let menuList= document.getElementById("menuList")
menuList.style.maxHeight="0px";

function toggleMenu(){
    if(menuList.style.maxHeight=="0px")
    {
       menuList.style.maxHeight ="300px";
    }
    else{
        menuList.style.maxHeight="0px";
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
    let Name=document.getElementById("Name");
    let email=document.getElementById("email");
    let message=document.getElementById("message");

    if(Name ==='',email==='',message===''){
        alert("Fill in every field before submitting!");

    }
    else{
        alert("Sent!");
}
}
