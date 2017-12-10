	function myFunction() {

		var w = window.outerWidth;

		if (w < 780) {
			document.getElementById("menumob").style.display = "inline-flex";
			document.getElementById("menu").style.display = "none";
			//			document.getElementById("banner").style.display = "none";
			//			document.getElementById("banner").style.animation = "showNav2 1s ease-in-out both";
			document.getElementById("premiermob").style.display = "block";
			$("#banner").slideUp(1000);
			document.getElementById("sidebar").style.display = "none";
			document.getElementById("bgsidebar").style.display = "none";
			document.getElementById("articles").style.marginLeft = "0";
			document.getElementById("logo").style.display = "none";
			//			document.getElementById("footer").style.height = "440px";
		} else {
			document.getElementById("menumob").style.display = "none";
			document.getElementById("menu").style.display = "inline-flex";
			//			document.getElementById("banner").style.display = "block";
			document.getElementById("premiermob").style.display = "none";
			//			document.getElementById("banner").style.animation = "showNav 1s ease-in-out both";
			$("#banner").slideDown(1000);
			document.getElementById("sidebar").style.display = "block";
			document.getElementById("bgsidebar").style.display = "block";
			document.getElementById("articles").style.marginLeft = "240px";
			document.getElementById("logo").style.display = "inline-flex";
			//cas ou le menu etait déroulé
			document.getElementById("menuder").style.display = "none";
			document.getElementById("dmenumobo").style.display = "flex";
			document.getElementById("dmenumobf").style.display = "none";
			document.getElementById("conteneur").style.marginLeft = "0";

			//			document.getElementById("footer").style.height = "250px";
		}





	}
