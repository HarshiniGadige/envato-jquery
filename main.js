$(document).ready(function(){
    $('html').addClass('js');
    var contactForm = {
        container: $('div.contact'),
        init: function(config){
            $.extend(this.config, config);
            $('<button></button>', {
                text: 'Contact Me'
            })
            .insertAfter('#slider-nav')
            .css({
                'margin': '10px 0 0 10px',
                'cursor': 'pointer',
                'padding': '10px 15px',
                'border-radius': '10px'
            })
            .on('click', this.show);
        },

        config: {
            effect: 'slideToggle',
            speed: 200
        },
        show: function(){
            contactForm.close.call(contactForm.container);
            contactForm.container[contactForm.config.effect](contactForm.config.speed);
            contactForm.container.show();
        },
        close: function(){
            var contact = this;
            $('<span class=close>&#10005;</span>')
            .prependTo(this)
            .on('click', function(){
                this.remove();
                contact[contactForm.config.effect](contactForm.config.speed);
            });
        }
    }

    contactForm.init({
        speed: 800
    });



    // Approach 1

    // function Slider(container, nav) {
    //     this.container = container;
    //     this.nav = nav;
    //     this.imgs = this.container.find('img');
    //     this.imgWidth = this.imgs.first().width();
    //     this.imgsLength = this.imgs.length;

    //     this.current = 0;
    // }

    // var s = new Slider($('div.slider').find('ul'), $('#slider-nav'));
    // s.nav.on('click', 'button', function() {
    //     var direction = $(this).data('dir');
    //     if(direction === "prev") {
    //         if(s.current == 0) {
    //             s.current+=s.imgsLength;
    //         }
    //         --s.current;
    //         s.transition();
    //     }
    //     else {
    //         if(s.current == s.imgsLength-1) {
    //             s.current-=s.imgsLength;
    //         }
    //         ++s.current;
    //         s.transition();
    //     }
    // })

    // Slider.prototype.transition = function() {
    //     this.container.animate({
    //         'margin-left': -(this.current * this.imgWidth)
    //     });
    // }

    // Approach 2

    var sliderul = $('div.slider').children('ul'),
        imgs = sliderul.find('img'),
        imgWidth = imgs.first().width(),
        imgsLength = imgs.length,
        currentImg = 1;

    $('#slider-nav').show().find('button').on('click',function(){
        var dir = $(this).data('dir'),
            loc = imgWidth;

        if(dir == "next") {
            if(currentImg==imgsLength) {
                currentImg-=imgsLength;
            }
            currentImg+=1;

        } else {
            if(currentImg==1) {
                currentImg+=imgsLength;
            }
            currentImg-=1;
        }
        transition(sliderul, imgWidth*(1-currentImg));
    })

    function transition(container, loc) {
        container.animate({
            'margin-left': loc
        });
    }
});