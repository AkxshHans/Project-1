const scroll = new LocomotiveScroll ({
    el:document.querySelector('#main, #main2'),
    smooth :true
})





gsap.from("#topleft h5 , #middletext h3  , #middletext i , #topright button , #topright input" , {
    scale :0.2 ,
    duration : 2 ,
    delay : 0.7 ,
})

gsap.from("#main2img #img1" , {
    scale :0.1 ,
    duration : 2 ,
    delay : 0.5 ,
})






Shery.imageEffect( "#back " ,{style : 6 , debug : false, config :{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":16.79,"range":[0,100]},"speed":{"value":1,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1410658307210033},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"a":{"value":2,"range":[0,30]},"b":{"value":-0.86,"range":[-1,1]}} , gooey : true } )




Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  Shery.hoverWithMediaCircle(" #footer" /* Element to target.*/, {
    images: ["imga1.jpg"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  });