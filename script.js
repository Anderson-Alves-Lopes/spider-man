function spider(){
   if(document.getElementById('menu').style.opacity ==='1'){
   document.getElementById('menu').style.opacity = '0';
   document.getElementById('menu').style.height = '0';
   document.getElementById('menu').style.zIndex = '-4';
   
  
   }else if(document.getElementById('menu').style.opacity = '0'){
    document.getElementById('menu').style.opacity = '1';
    document.getElementById('menu').style.height = '65px';
    document.getElementById('menu').style.zIndex = '9999';
   }
};

function myFunction(){
  alert('');
   document.querySelector('div.section-profile ').style.backgroundColor = 'red';
}
//slider///////slider///////slider/////
let lastIndex = 0;

let images = document.querySelectorAll('.container-box');

images.forEach(function(item,index){
   document.querySelectorAll('.bullet-single')[index].addEventListener('click',function(){
      let lastImage = document.querySelectorAll('.container-box')[lastIndex];
      let actualImage = document.querySelectorAll('.container-box')[index];
      document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet');
      document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet');

      lastImage.style.opacity = '0';
      actualImage.style.opacity = '1';
      lastIndex = index;
   });
});

// validação de formulário 
let formValidator = {
   handleSubmit:(event) =>{
      event.preventDefault();
      let send = true;

      let inputs = form.querySelectorAll('input');
      formValidator.clearErrors();

      for(let i = 0; i < inputs.length; i++){
         let input = inputs[i];
         let check = formValidator.checkInput(input);
         if(check !== true){
            send = false;
            formValidator.showError(input, check);
         }
      }
      if(send){
         form.submit();
      }
   },
   checkInput:(input) => {
      let rules = input.getAttribute('data-rules');
      if(rules !== null){
         rules = rules.split('|');
         for(let k in rules){
            let rulesDetails = rules[k].split('=');
            switch(rulesDetails[0]){
               case 'required':
                  if(input.value == ''){
                     return 'Esse campo não pode estar vazio.';
                  }
               break;
              case 'min':
                if(input.value.length < rulesDetails[1]){
                     return 'Campo tem que ter pelo menos '+rulesDetails[1]+'caracteres';
                  }
               break;
               
               case 'email':
                  if(input.value != ''){
                     let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA]{2,}))$/;
                     if(!regex.test(input.value.toLowerCase())){
                        return 'Digite um e-mail válido';
                     }
                  }
               break;
                     
            }
         }
      }
      return true;
   },
   showError:(input, error) =>{
      input.style.borderColor = '#ff0000';
   
   let errorElement = document.createElement('div');
   errorElement.classList.add('error');
   errorElement.innerHTML = error;
   
   input.parentElement.insertBefore(errorElement,input);
},
clearErrors:() =>{
let inputs = form.querySelectorAll('input');
  for(let i =0 ; i < inputs.length; i++){
   inputs[i].style = '';
  }
  let errorElements = document.querySelectorAll('.error');
  for(let i =0 ; i < errorElements.length; i++){
    errorElements[i].remove();
  }

}

};
let form = document.querySelector('.validator');
form.addEventListener('submit', formValidator.handleSubmit);
