 const images = ["footer1.jpg","footer2.jpg","footer3.jpg"];
const footer = document.getElementById("footer")
const button1 = document.getElementById("btn1")
const button2 = document.getElementById("btn2")
const frame1 = document.getElementById("frame1")
const frame2 = document.getElementById("frame2")


 setInterval(function fn(){
    const number = Math.floor(Math.random() * images.length);
    footer.src = ("footer"+number+".jpg");

},2000)
 const number = Math.floor(Math.random() * images.length);
 function change(){
    
 }

 window.onload(function fn(){
    setInterval(change,100)
 })

 setInterval(()=>{
     footer.src = images[number];
     number>1?number = 0:number++;

 },1000)
 {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}
 $(window).load(function fn(){
     $("#frame1").hide()
     $("#btn1").click(()=>{
         $("frame1").fadeToggle();
    })
 })
 $("#frame1").hide()
button1.addEventListener('click',()=>{
    if(frame1.hidden){
        console.log('okay')
    }
    else{
        console.log("hl")

    }
})
 let toggle = button => {
     let element = document.getElementById("frame1");
      let hidden = element.getAttribute("hidden");
    
      if (hidden) {
         element.removeAttribute("hidden");
         button.innerText = "Hide Iframe";
      } else {
         element.setAttribute("hidden", "hidden");
         button.innerText = "Show Iframe";
      }
    }


