$(function(){
    var controller = new ScrollMagic.Controller();

    var tween1 = TweenMax.to('.mian_middle h2', 0.5, {
    left:'100%'
    });

    var scene = new ScrollMagic.Scene({
    triggerElement: ".mian_middle",
    duration: "100%",
    offset:-300
    })
    .setTween(tween1)
    .addTo(controller)
    // .addIndicators({
    // name: "1"
// })     





})