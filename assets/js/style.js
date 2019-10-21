function randombg(){
  var random= Math.floor(Math.random() * 6) + 0;
  var bigSize = ["url('http://placehold.it/300&text=banner1')",
                 "url('http://placehold.it/300&text=banner2')",
                 "url('http://placehold.it/300&text=banner3')",
                 "url('http://placehold.it/300&text=banner4')",
                 "url('http://placehold.it/300&text=banner5')",
                 "url('http://placehold.it/300&text=banner6')"];
  document.getElementById("contato").style.backgroundImage=bigSize[random];
}