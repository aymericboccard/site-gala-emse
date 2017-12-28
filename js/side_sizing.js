function resize() {
  var sizediff = document.getElementById('banner').clientHeight;
  var footer = document.getElementById('footer');
  var elements = document.getElementsByTagName('body');
  var size = elements[0].clientHeight-sizediff+50;
  if(size > 232) {
    document.getElementById('side').style.height = size+100+"px";
  } else {
    document.getElementById('content').style.height = 232+"px";
  }
  footer.style.position = "absolute";
}
