// alert("Work
// document.querySelectorAll("button")[0].addEventListener("click",handle);
// function handle(params) {
//     alert("working")
// }
document.getElementsByClassName("convert").onclick=converter;
function converter(){
    var fehrenheit=document.getElementById("fehrenheit").value;
    var celsius=document.getElementById("celsius").value;
    // console.log(fehrenheit);

    if(fehrenheit!=''){
        // console.log(fehrenheit);
    celsius=(parseFloat(fehrenheit)-32)/1.8;
    // document.querySelector("#celsius").innerHTML=(parseFloat(fehrenheit)-32)/1.8;
    // alert("working")
    // console.log(celsius);
    }
    else{
    fehrenheit=(parseFloat(celsius)*1.8)+32;
    }
    document.getElementById("fehrenheit").value=parseFloat(fehrenheit).toFixed(1);
    document.getElementById("celsius").value=parseFloat(celsius).toFixed(1);
}
