
	var nav = document.getElementById('kirman-scrool-fixed-top');

       window.onscroll = function () {

         if(window.pageYOffset > 100){

          nav.style.position = "fixed";
          nav.style.top = 0;

          }else{
            // nav.style.position = "absolute";
            nav.style.position = 'relative'; //fixed
            nav.style.top = 100;
          }
       }

