
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
      myimage.setAttribute('src',`./asset/images/`+`${num[lastIndex]} `)
    })

    right.addEventListener('click', function(evt){
      lastIndex = (lastIndex + 1) % num.length;
      myimage.setAttribute('src',`./asset/images/`+`${num[lastIndex]} `)
    })

    heartBut.addEventListener('click', function(evt){
    rotation = rotation+30;
    model.setAttribute('rotation', `0 `+`0`+` 0`)
    console.log(`0 `+`${rotation}`+` 0`)
    })

  }});





  AFRAME.registerComponent('drag-rotate-component',{
    schema : { speed : {default:1}},
    init : function(){
      this.ifMouseDown = false;
      this.x_cord = 0;
      this.y_cord = 0;
      document.addEventListener('mousedown',this.OnDocumentMouseDown.bind(this));
      document.addEventListener('mouseup',this.OnDocumentMouseUp.bind(this));
      document.addEventListener('mousemove',this.OnDocumentMouseMove.bind(this));
    },
    OnDocumentMouseDown : function(event){
      this.ifMouseDown = true;
      this.x_cord = event.clientX;
      this.y_cord = event.clientY;
    },
    OnDocumentMouseUp : function(){
      this.ifMouseDown = false;
    },
    OnDocumentMouseMove : function(event)
    {
      if(this.ifMouseDown)
      {
        console.log('halfdone',)
        var temp_x = event.clientX-this.x_cord;
        var temp_y = event.clientY-this.y_cord;
        this.el.object3D.rotateY(temp_y*this.data.speed/100);
        this.el.object3D.rotateX(temp_x*this.data.speed/100);
    
        this.x_cord = event.clientX;
        this.y_cord = event.clientY;
      }
    }
  });



  // css

  const css= document.getElementById('navbar')
  css.innerHTML=`
  <a href="index.html" id="port-but" class="p-2 ml-2 rounded-xl bg-blue-500 "><button>Portfolio Card</button></a>
      <a href="tattoo.html" id="port-but" class="p-2 ml-2 rounded-xl bg-blue-500 "><button>Tattoo</button></a>
      <a href="watch.html" id="port-but" class="p-2 ml-2 rounded-xl bg-blue-500 "><button>Watch</button></a>
      <a href="laptop.html" id="port-but" class="p-2 ml-2 rounded-xl bg-blue-500 "><button>Treasure</button></a>`