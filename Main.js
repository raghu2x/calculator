let input = document.querySelector('textarea')
let number = document.querySelectorAll('.number,.operator')
let DecimalBtn  = document.querySelector('.decimal')
let DeleteBtn = document.querySelector('#delete')
let allClearBtn = document.querySelector('.allClear')
let calculateBtn = document.querySelector('.calculate')
let operators = ['+','-','*','/','%']
 
 
 const add = (e) =>{
    
    let length = input.value.length;
    if(length < 50){
  // operators working macanism
   let valid = operators.includes(input.value[length-1])
  
  if(valid && e.classList.contains('operator')){
      if(e.innerText !== input.value[length-1]){
        input.value = input.value.slice(0,-1)+e.innerText
      }
  } else {
      input.value += e.innerText
      }
    }
    heightChange()
  }
  
  
   // adding onclick event on numbers
for(let i = 0;i<number.length;i++){
number[i].setAttribute('onclick','add(this)')
}

  // Delete & allClear btn events
  DeleteBtn.onclick = () =>{
    input.value = input.value.slice(0,-1);
    heightChange()
  }
  allClearBtn.onclick = () =>{
    input.value = '';
    heightChange()
  }
  //  calculating string with eval() function
  calculateBtn.onclick = () =>{
  input.value ? input.value = eval(input.value) : '';
  heightChange()
  } 
    
    // Desimal btn proper working function
  DecimalBtn.onclick = () =>{
    if(input.value !== ''){
      for(let i = input.value.length; i >= 0; i--){
        let valid = parseFloat(input.value[i-1])
        if(isNaN(valid)){
          input.value[i-1] !== '.' ? input.value += '.' : '';
          break;
        }
      }
    }else{
      input.value += '0.'
    }
  }
  
  
  const heightChange = () =>{
    input.style.height = '40px';
    input.style.height = input.scrollHeight + 'px'
  }