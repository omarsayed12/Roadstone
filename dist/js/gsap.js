//  animation tyre car
gsap.registerPlugin(ScrollTrigger);
// var rule = CSSRulePlugin.getRule(".passengerCar::after");
gsap.set('.anime-2', {
yPercent:15
// yPercent:20
});

var rotate = gsap.timeline({
    scrollTrigger:{
        trigger: "#wrap",
        scrub:1,
        start: 'top 60%',
        end: 'center 60%',
        // markers: true
        // pin: true,
    },
})

.to('#anime-2', {rotation:45,duration:3,dealy: 0,ease: Linear.easeNone})
.from('#anim-1', {x:240,opacity:0,duration: 3,dealy:2, ease: Linear.easeNone}, "-=4")
.from('#anim-3', {y:20,opacity:0,duration: 3,dealy:3, ease: Linear.easeNone, stragger: 0.4}, "-=4")
.from('.passengerCarHeading', { x: 250, opacity: 0, duration: 4, dealy: 2, ease: Linear.easeNone }, "-=3")
// .to(rule, {duration: 2, cssRule: {scaleX:2}}, "-=3")
