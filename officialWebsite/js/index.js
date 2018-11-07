$(function(){
    fullpage();
    function fullpage() {
        $('#fullpage').fullpage({
            sectionsColor : ['#1bbc9b', 'red'],
            navigation: true,
            // resize: true,
            // scrollOverflow: true,    
            // autoScrolling: false,
            scrollOverflowOptions: {
                scrollX: true
            },
            // scrollBar: true,
            afterLoad: function(anchorLink,index) {
                console.log(index);
                if(index == 2){
                    this.autoScrolling = false;
                    console.log(this);
                    $.fn.fullpage.destroy('all');
                    $('.one').hide();
                    // $('#fullpage').fullpage({
                    //     autoScrolling: false,
                    //     scrollOverflow: true
                    // });
                }
            }
        })
    }
    $('body').on('mousewheel', function() {
        console.log(1);
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop)
        if(scrollTop == 0){
            $('.one').show().slideUp();
            fullpage();
        }
    })
    $('.two').on('scroll', function() {
        // console.log(1);
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop)
        if(scrollTop == 0){
            $('.one').show();
            fullpage();
        }
    })
});