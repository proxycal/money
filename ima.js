const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
let scalevalue= 1;
let nocount = 0;
const reaction = document.getElementById("rain");
const imgurl=["images/download.gif","images/download (1).gif","images/download (5).gif","images/download (3).gif"
];
const color=["#e285b7e8","#e285b7e8","#e285b7e8","#e285b7e8","#e285b7e8","#e285b7e8"];


function noocount(){
    nocount++;
    scalevalue += 0.2;
    yesButton.style.transform ="scale("+scalevalue+")";
    if (nocount <= color.length) {
    document.body.style.backgroundColor = color[nocount - 1];
}

    if (nocount <= imgurl.length){
        reaction.src = imgurl[nocount-1];
        
    }
  
    if (nocount >= 6){
        noButton.remove ();
    }
    if (nocount >= 4){
        noButton.addEventListener("mouseover",function(){
            let randomx= Math.floor(Math.random() * (window.innerWidth -100 ));
            let randomy= Math.floor(Math.random() *( window.innerHeight - 50));
            noButton.style.position = "absolute";
            noButton.style.left = randomx + "px";
            noButton.style.top = randomy + "px";  

        });
    }
}

yesButton.addEventListener("click", function() {

    // Change background
    document.body.style.backgroundColor = "#9f5f83";
    reaction.src = "images/download (4).gif";  
    const message = document.getElementById("message");
    message.innerText = " THAT'S MY SISTER <3";
    message.style.fontSize = "40px";
    message.style.marginTop = "20px";

    // Hide No button
    noButton.style.display = "none";

    
});

noButton.addEventListener("click", noocount);
yesButton.style.fontSize = (16 + nocount * 5) + "px";
yesButton.style.transform = "scale(" + scalevalue + ")";
