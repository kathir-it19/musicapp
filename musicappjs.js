window.addEventListener('load',()=>{
  const sounds=document.querySelectorAll('.sounds');
  const pads=document.querySelectorAll('.pads div');
  const visuals=document.querySelector('.visual');
  const color=[
    'rgb(253, 131, 131)',
    'rgb(132, 243, 132)',
    'rgb(239, 239, 110)',
    'rgb(109, 185, 210)',
    'rgb(119, 89, 241)',
    'rgb(230, 50, 250)'
  ];
  console.log(sounds[1]);

  pads.forEach((pad,index) =>{
    pad.addEventListener('click', function(){
      sounds[index].currentTime=0;
      sounds[index].play();
      createBubbles(index);
    });
  });
const createBubbles=(index)=>{
  //create bubbles
  const bubbles=document.createElement('div');
  visuals.appendChild(bubbles);
  bubbles.style.backgroundColor=color[index];
  bubbles.style.animation=`jump 1s ease`;
  bubbles.addEventListener('animationend',function(){
    visuals.removeChild(this);
  });
};

});