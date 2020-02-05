 var slider = document.getElementById("myRange");
 slider.oniput = () => {
     document.body.style.background = `linear-gradient(90deg, #2b22e43 ${slider.value}%,
         #2b2e43 ${silider.value}%, #ffffff ${silider.value}.1%, #ffffff ${slider.value}100%)`
 }
 console.log(slider.oniput);

 // function changeColor() {
 //     let colorChange = document.getElementById(myRange).value;
 //     document.body.style.background = `linear-gradient(90deg, #2b22e43 ${slider.value}%,
 //         //          #2b2e43 ${silider.value}%, #ffffff ${silider.value}.1%, #ffffff ${slider.value}100%)`

 // }