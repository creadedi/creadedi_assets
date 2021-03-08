
function open_menu(){
    TweenMax.staggerFromTo('.link_block', 0.5, {
       opacity: 0,
       x: 80
    }, {
       opacity: 1,
       x: 0,
       delay: 1
    }, .2);
}

function close_menu(){
    TweenMax.staggerFromTo('.link_block', 0.5, {
       opacity: 1,
       x: 0
    }, {
       opacity: 0,
       x: 80,
       delay: 1
    }, .2);
}

$(document).ready(function() {
   /* Inicio Função Fullpage */
   $('#fullpage').fullpage({
     scrollBar: true,
     scrollingSpeed: 1000,
     easing: 'easeInOutCubic',
     verticalCentered: false,
     easingcss3: 'ease',
     responsiveWidth: 1000,
   });
   /* Fim Função Fullpage */
   
   /* Inicio Função Menu Trigger Animado */
   $('.menu-trigger').click(function(){
       if ($(this).hasClass('active-trigger')) {
          close_menu();
          $(this).removeClass('active-trigger');
          $('.line-menu').removeClass('active-trigger');
          $(this).addClass('reverse-trigger');
          $('.line-menu').addClass('reverse-trigger');
       }
       else
       {
          $(this).addClass('active-trigger');
          $('.line-menu').addClass('active-trigger');
          $(this).removeClass('reverse-trigger');
          $('.line-menu').removeClass('reverse-trigger');
          open_menu();
       }
       
       $('.menu_full').toggleClass('active-menufull');
       $('body').toggleClass('overflow');
       $('.page_contact').removeClass('active-contact');
   });
   /* Fim Função Menu Trigger Animado */

   /* Inicio Função Menu Contato */
   $('.bt-contact').click(function(){ 
      $('.page_contact').addClass('active-contact');
   });
   /* Fim Função Menu Contato */
  
});