$(window).on('load', function () {
    $('#loading').delay(0).fadeOut(1000, function () {
        // $('#videomodal').modal('show');
        // $('#videomodal iframe').attr('src', "https://www.youtube.com/embed/A2Q7T8Mg4kM?modestbranding=1;version=3;autoplay=1;show=0;showinfo=0;controls=0;iv_load_policy=3;rel=0");
    });
});

(function () {
    $('#carousel123').carousel({
        interval: 2000
    });

    $('.carousel-showsixmoveone .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
        // var itemToClone = $(this);

        // for (var i=1;i<3;i++) {
        //   itemToClone = itemToClone.next();

        //   // wrap around if at end of item collection
        //   if (!itemToClone.length) {
        //     itemToClone = $(this).siblings(':first');
        //   }

        //   // grab item, clone, add marker class, add to collection
        //   itemToClone.children(':first-child').clone()
        //     .addClass("cloneditem-"+(i))
        //     .appendTo($(this));
        // }
    });
}());