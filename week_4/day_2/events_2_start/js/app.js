document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newItemForm = document.querySelector('#new-item-form')
  newItemForm.addEventListener('submit', handleFormSubmit)
  
})


const handleFormSubmit = function(event){
  event.preventDefault()


const readingListItem = creatReadingListItem(event.target)
const readinglist = document.querySelector('#reading-list')
readinglist.appendChild(readingListItem)

}

const creatReadingListItem = function(formData){

const readingListItem = document.createElement('li')
readingListItem.classList.add('reading-list-item')

const title = document.createElement('h2')
title.textContent = formData.title.value
readingListItem.appendChild(title)

//add the author as an he

const author = document.createElement('h3')
author.textContent = formData.author.value
readingListItem.appendChild(author)

//add the category as a p tag
const category = document.createElement('p')
category.textContent = formData.category.value
readingListItem.appendChild(category)

return readingListItem
}
