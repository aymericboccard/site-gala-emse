var size = document.getElementById('content').clientHeight;
alert(size);
if(size > 235) {
  document.getElementById('side').clientHeight = size+"px";
}
