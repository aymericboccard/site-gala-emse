function resize() {
  var size = document.getElementById('content').clientHeight;
  if(size > 235) {
    document.getElementById('side').style.height = size+"px";
  } else {
    document.getElementById('content').style.paddingBottom = (235-size)+"px";
  }
}
