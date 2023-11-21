// TEXT CYCLE
var divs = $('div[id^="content-"]').hide(),
    i = 0;

(function cycle() {

    divs.eq(i).fadeIn(900)
        .delay(1000)
        .fadeOut(900, cycle);

    i = ++i % divs.length;

})();
