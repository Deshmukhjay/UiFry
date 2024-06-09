// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, 
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();



const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});
gsap.to(".header",{
    backgroundColor:"transparent",
    backdropFilter: "blur(20px)",
    height:"30x",
    duration:0.5,
    scrollTrigger:{
        trigger:".header",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -6%",
        opacity:1,
        scrub:2
    }
})
function advantagesPara(){var clutter="";
document.querySelector(".adPara")
.textContent.split("")
.forEach(function(e){
    if(e===" ") clutter+=`<span>&nbsp;</span>`
clutter+=`<span>${e}</span>`
})
document.querySelector(".adPara").innerHTML=clutter;
gsap.set(".adPara span",{opacity:.1})
gsap.to(".adPara span",{
    scrollTrigger:{
        trigger:".advantages",
        start:"top 60%",
        end:"bottom 90%",
        // markers:true,
        scrub:1
    }, 
    opacity:1,
    stagger:.03,
    ease:Power4
})

}
function custoPara(){var clutter="";
    document.querySelector(".cuPara")
    .textContent.split("")
    .forEach(function(e){
        if(e===" ") clutter+=`<span>&nbsp;</span>`
    clutter+=`<span>${e}</span>`
    })
    document.querySelector(".cuPara").innerHTML=clutter;
    gsap.set(".cuPara span",{opacity:.1})
    gsap.to(".cuPara span",{
        scrollTrigger:{
            trigger:".customize",
            start:"top 60%",
            end:"bottom 90%",
            // markers:true,
            scrub:1
        }, 
        opacity:1,
        stagger:.03,
        ease:Power4
    })
    }
    function testiPara(){var clutter="";
        document.querySelector(".tPara")
        .textContent.split("")
        .forEach(function(e){
            if(e===" ") clutter+=`<span>&nbsp;</span>`
        clutter+=`<span>${e}</span>`
        })
        document.querySelector(".tPara").innerHTML=clutter;
        gsap.set(".tPara span",{opacity:.1})
        gsap.to(".tPara span",{
            scrollTrigger:{
                trigger:".testimonial",
                start:"top 60%",
                end:"bottom 90%",
                // markers:true,
                scrub:1
            }, 
            opacity:1,
            stagger:.03,
            ease:Power4
        })
        }
    advantagesPara()
    custoPara()
    testiPara()