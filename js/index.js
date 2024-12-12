document.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
      event.target.focus()
    }
  })
  
  
  var tween = gsap.to(".green", {duration:3, x:600, ease:"linear", paused:true});
  
  
  document.getElementById("play").onclick = ()=> tween.play();
  document.getElementById("pause").onclick = ()=> tween.pause();
  document.getElementById("reverse").onclick = ()=> tween.reverse();
  document.getElementById("restart").onclick = ()=> tween.restart();