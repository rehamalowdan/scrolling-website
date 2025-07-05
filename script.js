let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let saqa = document.querySelector('.saqa');
window.onscroll =function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    
      river.style.top = value + 'px';
    boat.style.top = value + 'px';
      boat.style.left = value * 3 + 'px';
      saqa.style.fontSize = value + 'px';


      if(scrollY >= 120){
        saqa.style.fontSize = 120 + 'px';
         saqa.style.position = 'fixed';


         if(scrollY >= 270){
            saqa.style.display = 'none';
         }else{
            saqa.style.display = 'block';
         }

          
         if(scrollY >= 73){
            document.querySelector('.main').style.background = 'linear-gradient( #656ae1 ,rgb(149, 151, 211))'
         
      }else{
         document.querySelector('.main').style.background = 'linear-gradient( #78036e ,rgba(7, 7, 7, 0.98))'

      }
      }
    }
