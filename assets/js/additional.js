// jQuery stuff
jQuery(document).ready(function($) {

    var subMenuTrigger = $('.submenuTrigger');
    var subMenu = $('.submenu');

    subMenuTrigger.click(function () {
        
        subMenu.toggle();
    });
});