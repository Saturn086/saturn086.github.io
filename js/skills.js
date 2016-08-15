var minWidth = 680;

$(document).ready(function() {
    var width = $( window ).width();
                  
    var getSkillElement = function(obj) {
        skill = $(obj).data('skillname');
        return $('#' + skill);
    };
        
    imgs = $('.skill-line img');
    imgs.mouseover(function() {
        getSkillElement(this).addClass('active-skill');
                var width = $( window ).width();
                   
                   if(width <= minWidth) {
                        $(".active-skill").css("height", "auto" );
                        $(".skill-explanation").css("border-radius", "7%");
                        $(".skill-explanation").css("padding-top", "1em");
                        $(".skill-explanation").css("padding-bottom", "1em");
                        $(".skill-explanation").css("margin-top", "" +
                                                    (width/3 + 30) + "px");
                        $(".skill-explanation").css("width", "80%");
                        $(".skill-explanation").css("left", "30%");
                   
                        $("#footer-hr").css("margin-top", "" +
                                            ($(".active-skill").height()) + "px");
                   } else {
                        $(".skill-explanation").css("height", "0");
                        $(".skill-explanation").css("border-radius", "100%");
                        $(".skill-explanation").css("padding", "0");
                        $(".skill-explanation").css("padding-top", "2em");
                        $(".skill-explanation").css("margin-top", "-11em");
                        $(".skill-explanation").css("left", "50%");
                        $("#footer-hr").css("margin-top", "2em");
                   
                        if(width > 786) {
                            width = 786;
                        }
                   
                        $(".active-skill").css("height", "" + (width/2.5) + "px" );
                   }
    });
    
    imgs.mouseout(function() {
        getSkillElement(this).removeClass('active-skill');
    });
                  
    
                  
    if(width > 786) {
        $(".deg0").css("transform", "translate(" + (786/3-20) + "px, 0px)");
        $(".deg45").css("transform", "rotate(45deg) translate(" +
                                  (786/3-20) + "px) rotate(-45deg)");
        $(".deg90").css("transform", "rotate(90deg) translate(" +
                                  (786/3-20) + "px) rotate(-90deg)");
        $(".deg135").css("transform", "rotate(135deg) translate(" +
                                  (786/3-20) + "px) rotate(-135deg)");
        $(".deg180").css("transform", "rotate(180deg) translate(" +
                                  (786/3-20) + "px) rotate(-180deg)");
        $(".deg225").css("transform", "rotate(225deg) translate(" +
                                  (786/3-20) + "px) rotate(-225deg)");
        $(".deg270").css("transform", "rotate(270deg) translate(" +
                                  (786/3-20) + "px) rotate(-270deg)");
        $(".deg315").css("transform", "rotate(315deg) translate(" +
                                  (786/3-20) + "px) rotate(-315deg)");
                  
        $(".skill-explanation").css("width", "" + (786/2.5) + "px");
        $(".skill-explanation").css("margin", "" + (-786/5) + "px");
                
        
                  
    } else {
        $(".deg0").css("transform", "translate(" + (width/3-20) + "px, 0px)");
        $(".deg45").css("transform", "rotate(45deg) translate(" +
                                   (width/3-20) + "px) rotate(-45deg)");
        $(".deg90").css("transform", "rotate(90deg) translate(" +
                                   (width/3-20) + "px) rotate(-90deg)");
        $(".deg135").css("transform", "rotate(135deg) translate(" +
                                   (width/3-20) + "px) rotate(-135deg)");
        $(".deg180").css("transform", "rotate(180deg) translate(" +
                                   (width/3-20) + "px) rotate(-180deg)");
        $(".deg225").css("transform", "rotate(225deg) translate(" +
                                   (width/3-20) + "px) rotate(-225deg)");
        $(".deg270").css("transform", "rotate(270deg) translate(" +
                                   (width/3-20) + "px) rotate(-270deg)");
        $(".deg315").css("transform", "rotate(315deg) translate(" +
                                   (width/3-20) + "px) rotate(-315deg)");
                  
        
        $(".skill-explanation").css("width", "" + (width/2.5) + "px");
        $(".skill-explanation").css("margin", "" + (-width/5) + "px");
                
    }
    });

$(window).resize(function() {
    var width = $( window ).width();
                 
    if(width > 786) {
        imgs.each(function() {
                  getSkillElement(this).removeClass('deg0 deg45 deg90 deg135 ' +
                                                    'deg180 deg225 deg270 deg315');
        });
                 
        $(".skill-explanation").css("width", "" + (786/2.5) + "px");
        $(".skill-explanation").css("margin", "" + (-786/5) + "px");
    } else {
        $(".deg0").css("transform", "translate(" + (width/3-20) + "px, 0px)");
        $(".deg45").css("transform", "rotate(45deg) translate(" +
                                  (width/3-20) + "px)rotate(-45deg)");
        $(".deg90").css("transform", "rotate(90deg) translate(" +
                                  (width/3-20) + "px) rotate(-90deg)");
        $(".deg135").css("transform", "rotate(135deg) translate(" +
                                  (width/3-20) + "px) rotate(-135deg)");
        $(".deg180").css("transform", "rotate(180deg) translate(" +
                                  (width/3-20) + "px) rotate(-180deg)");
        $(".deg225").css("transform", "rotate(225deg) translate(" +
                                  (width/3-20) + "px) rotate(-225deg)");
        $(".deg270").css("transform", "rotate(270deg) translate(" +
                                  (width/3-20) + "px) rotate(-270deg)");
        $(".deg315").css("transform", "rotate(315deg) translate(" +
                                  (width/3-20) + "px) rotate(-315deg)");
        
        $(".skill-explanation").css("width", "" + (width/2.5) + "px");
        $(".skill-explanation").css("margin", "" + (-width/5) + "px");
                 
    }
});