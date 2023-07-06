const toDoList= JSON.parse(localStorage.getItem('toDoList')) || [{
  name:'Make Dinner',
  dueDate:'2022-11-20'
}];
console.log(JSON.parse(localStorage.getItem('toDoList')));
renderToDo();
function renderToDo(){
  let toDoHtml='';
  for(let i=0;i<toDoList.length;i++){
    let todoObject=toDoList[i];
    let {name,dueDate}=todoObject;
    toDoHtml+= `
      <div>${name}</div>
      <div>${dueDate} </div>
      <button onclick="
          removeToDo(${i});
      " class="btn-delete">Delete</button>            
      `;
  }
  document.querySelector(".js-addinglist").innerHTML=toDoHtml;

}


function addToDo(){
  const inputElement=document.querySelector('.js-input-todo');
  const inputDateElement=document.querySelector('.js-input-date');
  const name=inputElement.value;
  const dueDate=inputDateElement.value;
  // console.log(list); 
  // console.log(!name === '' && !dueDate === '');  
  // // console.log(typeof dueDate);
  if(name !== '' && dueDate !== ''){
    inputElement.classList.remove('js-error');
    inputDateElement.classList.remove('js-error');
    toDoList.push({
    // name:name,
    // dueDate:dueDate
    // using shorthand property
    name,
    dueDate
  });
    
  }else{
    inputElement.classList.add('js-error');
    inputDateElement.classList.add('js-error');

    // alert('Please enter a valid value.');
    
  }
  // toDoList.push({
  //   // name:name,
  //   // dueDate:dueDate
  //   // using shorthand property
  //   name,
  //   dueDate
  // });
  // console.log(toDoList);
  document.querySelector('.js-input-todo').value='';
  document.querySelector('.js-input-date').value='';
  renderToDo();

  // Whenever we update the todo list, save in localStorage.
  saveToStorage();
  
}
function removeToDo(i){
  toDoList.splice(i,1);
  renderToDo();
   // Whenever we update the todo list, save in localStorage.
  saveToStorage();

}
function saveToStorage(){
  localStorage.setItem('toDoList',JSON.stringify(toDoList));
}