function resize() {
  var size = document.getElementById('content').clientHeight;
  if(size > 232) {
    document.getElementById('side').style.height = size+"px";
  } else {
    document.getElementById('content').style.height = 232+"px";
  }
}
