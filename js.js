
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    const myimage=document.getElementById('image')
    const left=document.getElementById('left-but')
    const right=document.getElementById('right-but')
    const heartBut=document.getElementById('heart-but')
    const model=document.getElementById('heart')

    var num=['heart.jpg', 'crazyvault.jpeg','try.png'];
    var lastIndex = 0;
    var rotation = 90;
    left.addEventListener('click', function(evt){
      if (lastIndex<1){
        lastIndex=3
      }
      lastIndex = (lastIndex - 1) % num.length;
      myimage.setAttribute('src',`./`+`${num[lastIndex]} `)
    })

    right.addEventListener('click', function(evt){
      lastIndex = (lastIndex + 1) % num.length;
      myimage.setAttribute('src',`./`+`${num[lastIndex]} `)
    })

    heartBut.addEventListener('click', function(evt){
    rotation = rotation+30;
    model.setAttribute('rotation', `0 `+`0`+` 0`)
    console.log(`0 `+`${rotation}`+` 0`)
    })

  }});

  document.addEventListener('DOMContentLoaded', function() {
    const scene = document.getElementById('scene');
    const model2 = document.getElementById('heart');

    const manager = new Hammer.Manager(scene);
    const pinch = new Hammer.Pinch();
    const rotate = new Hammer.Rotate();
    manager.add(pinch);
    manager.add(rotate);

    manager.on('pinch', function(ev) {
        console.log('Pinch Event');
        const currScale = model2.getAttribute('scale');
        const scaleChange = (ev.scale - 1) * 0.01;

        model2.setAttribute('scale', {
            'x': currScale.x + scaleChange,
            'y': currScale.y + scaleChange,
            'z': currScale.z + scaleChange
        });
    });

    manager.on('rotate', function(ev) {
        console.log('Rotate Event');
        const currRotation = model2.getAttribute('rotation');
        const rotationChange = ev.rotation;

        model2.setAttribute('rotation', {
            'x': currRotation.x,
            'y': currRotation.y + rotationChange,
            'z': currRotation.z
        });
    });
  });
	//




  // ye hammer wala yaha se hai ek uper bhi hai

// AFRAME.registerComponent('rotation-scale', {
//   init: function () {
//       const mymodel = document.getElementById('model');
//       var mc = new Hammer.Manager(mymodel);

//       const pinch = new Hammer.Pinch()
//       const rotate = new Hammer.Rotate()

//       pinch.recognizeWith(rotate);

//       mc.add([pinch, rotate]);
//       const curr = mymodel.getAttribute('rotation')
//       mc.on('rotate', function(ev){
//         console.log('done bhai')
//         mymodel.setAttribute('rotation',{
//           'x': curr.x - touch.pageY*0.01,
//           'y': curr.y + touch.pageX*0.01,
//           'z': curr.z 
//         } )
//       })
//   }
// });
