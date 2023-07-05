
const button = document.querySelector('#btn');

window.addEventListener('load',()=>{
    excusa.innerHTML = generatorExcuses()
})

button.addEventListener('click',()=>{
    location.reload()
})

function generatorExcuses() {
  const number = ['1', '2', '3', '4', '5' , '6', '7' , '8' , '9' , '10'];
  const number2 = ['1', '2', '3', '4', '5' , '6', '7' , '8' , '9' , '10'];
 

  let randomNumber = Math.floor(Math.random() * number.length);
  let randomNumber2 = Math.floor(Math.random() * number2.length);

  

  return (
    number[randomNumber]  
  ) + number2 [randomNumber2];

}
