/*Animeert de robot 50 eenheden naar rechts vanaf de startpositie*/
// gsap.to('#Robot', { duration: 1, x: 50 }); /*tween aanmaken*/

/*Plaatst de robot eerst 50 eenheden naar rechts en animeert de robot naar de startpositie*/
// gsap.from('#Robot', { duration: 1, x: 50 });

/*Plaatst de robot eerst 50 eenheden naar rechts en animeert de robot naar de startpositie*/
// gsap.set('#Robot', { duration: 1, x: 50 });

/*Animeert de robot van een positie -50 links naar rechts 50.*/
// gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 })

/*easing*/
// gsap.to('#Robot', {
//     duration: 2,
//     ease: 'elastic.out(2.5,0.1)',
//     x: 50,
// })

/*Timelines laten je toe om tweens aan elkaar te 
hangen of te laten overlappen op een goede manier. 
Ze blijven altijd in sync. Het is altijd aan te raden 
om een timeline aan te maken. Meer uitleg vind je 
hier: https://greensock.com/get-started/#sequencing-with-timelines 
(Koppelingen naar een externe site.) */
// let tl = gsap.timeline()

// tl.fromTo('#Robot',{
//   y: 2.5,
// },{
//   duration: .75,
//   y: -2.5,
// }).to('#Shadow', {
//   duration: .75,
//   scale: 0.75,
// })

/*Timeline Defaults

Laten toe om default properties voor de hele timeline 
in te stellen. Zo kan je de vorige code op deze 
manier schrijven:*/
// let tl = gsap.timeline({
//     defaults: {
//       duration: .75,
//       ease: 'power1.inOut',
//     },
// })
  
// tl.fromTo('#Robot',{
//     y: 2.5,
// },{
//     y: -2.5,
// }).to('#Shadow', {
//     scale: 0.75,
// })


/*Position parameter

Met de position parameter kan je bepalen hoe lang 
het duurt voor een volgende tween begint. Zo kan je 
delays steken tussen animaties of ze laten overlappen.*/

/*Zorgt er voor dat de animaties gelijktijdig beginnen 
omdat de 2de tween 75 milliseconden begint voor het 
einde van de duration van de timeline. Maar het kan 
nog simpeler.*/
// let tl = gsap.timeline({
//     defaults: {
//       duration: .75,
//       ease: 'power1.inOut',
//     },
// })

// tl.fromTo('#Robot',{
// y: 2.5,
// },{
//   y: -2.5,
// })
// .to('#Shadow', {
//   scale: 0.75,
// },
//   '-=.75',
// )


/*Zorgt er voor dat de tween altijd start op het 
begin van de vorige tween.*/
let tl = gsap.timeline({
    defaults: {
      duration: .75,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
})
tl.set('#Shadow', {
    transformOrigin: '50% 100%',
})
tl.fromTo('#Robot',{
    y: 2.5,
},{
  y: -2.5,
})
.to('#Shadow', {
        scale: 0.75,
    },
    '<',
)

const btnFast = document.querySelector(".js-fast");
const btnNormal = document.querySelector(".js-normal");
const btnSlow = document.querySelector(".js-slow");
const btnPause = document.querySelector(".js-pause");

btnFast.onclick = () => tl.timeScale(2);
btnNormal.onclick = () => tl.timeScale(1);
btnSlow.onclick = () => tl.timeScale(0.5);
btnPause.onclick = function(){
  tl.paused(!tl.paused());
} 

if (!tl.paused()){
  btnPause.classList.remove(".o-hide-accessible");
  
} else {
  btnPause.classList.add(".o-hide-accessible");
}
  