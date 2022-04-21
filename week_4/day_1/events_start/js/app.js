document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  // 1 - Grab The element
  const button = document.querySelector('#button')

  // 2. Add event listener (type?click?submit?)
  button.addEventListener('click', HandlButtonClick)


  const textInput = document.querySelector('#input')
  textInput.addEventListener('input', handleInput)



  const select = document.querySelector('#select')
  select.addEventListener('change',HandlSelectChange)



  const form = document.querySelector('#form')
  form.addEventListener('submit',handelFormSubmit)
});



// 3. Function called when the event (click) happens
const HandlButtonClick = function(){
  const resultParagraph = document.querySelector('#button-result')
 resultParagraph.textContent = "The button has definitely been clicked!!!"
  
}



const handleInput = function(event){
  const resultParagraph = document.querySelector
  ('#input-result')
  resultParagraph.textContent = event.target.value

  
}
const HandlSelectChange = function(event){
  const resultParagraph = document.querySelector('#select-result')
  resultParagraph.textContent = "You selected" + event.target.value 

  co
}
const handelFormSubmit = function(event){
  event.preventDefault()
  const resultParagraph = document.querySelector('#form-result')
  resultParagraph.textContent = "Your name :" + event.target.first_name.value + " " + event.target.last_name.value



}