// Code en JQuery pour fixer le menu en fonciton du scroll et pour afficher le monu mobile
$('#sidebarContent').addClass("nonfixedSideBar");
ScrollMenuFixe = 300;


$(window).scroll(
    function() {
            if ($(window).width()>780){
            if ($(window).scrollTop() > ScrollMenuFixe) {
                // fixed
                $('#menu').addClass("fixedTop");
                $('#premier').addClass("fixedTop2");
                $('#sidebarContent').addClass("fixedSideBar");
                $('#sidebarContent').removeClass("nonfixedSideBar");
//					$("#menu").css("box-shadow", "0px 2px 20px #cccccc");
            } else {
                // unfixed
                $('#menu').removeClass("fixedTop");
                $('#premier').removeClass("fixedTop2");
                $('#sidebarContent').removeClass("fixedSideBar");
                $('#sidebarContent').addClass("nonfixedSideBar");
//					$("#menu").css("box-shadow", "0px 0px 0px #999999");
            }
            }
});

$("#dmenumobo").click(function(){
    $("#menuder").css("display","flex");
    $("#dmenumobo").css("display","none");
    $("#dmenumobf").css("display","flex");
    $("#conteneur").css("margin-left","200px");
//		$("#menumob").css("box-shadow", "0px 2px 20px #cccccc");
});
$("#dmenumobf").click(function(){
    $("#menuder").css("display","none");
    $("#dmenumobo").css("display","flex");
    $("#dmenumobf").css("display","none");
    $("#conteneur").css("margin-left","0px");
//		$("#menumob").css("box-shadow", "0px 0px 0px #cccccc");
});