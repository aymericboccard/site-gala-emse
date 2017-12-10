	function myFunction2(){
			
            var w = window.outerWidth;
            
            if( w < 780){
            document.getElementById("menumob").style.display = "inline-flex";
			document.getElementById("menu").style.display = "none";
			document.getElementById("banner").style.display = "none";
			document.getElementById("premiermob").style.display = "block";
            }
			else {
			document.getElementById("menumob").style.display = "none";
			document.getElementById("menu").style.display = "inline-flex";
			document.getElementById("banner").style.display = "block";
			document.getElementById("premiermob").style.display = "none";
			}
  }