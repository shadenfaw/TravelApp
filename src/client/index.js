
import { handleSubmit,back } from './js/formHandler';
import './styles/index.scss'

window.addEventListener("DOMContentLoaded", function(e) { 
  
  let submitButton=document.getElementById('submit');
  submitButton.addEventListener('click',function(e){
      Client.handleSubmit(e);
  })
  
  
  document.getElementById('back').addEventListener('click',function(e){
      Client.back(e);
  })
});


export {
    handleSubmit,
    back
  }