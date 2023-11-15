const todolist = [];


renderTodolist();
function renderTodolist()
{
   let todolistHTML = '';

   for(let i=0;i<todolist.length;i++)
   {
      const todoObj = todolist[i];
      const task = todoObj.name;
      const duedate = todoObj.duedate;
      const html = 
      `<div>${task}</div> 
      <div>${duedate}</div>
      <button onclick="
      todolist.splice(${i},1);
      renderTodolist();" class="delete-button">
      Delete</button>`;
      todolistHTML += html;
   }
   document.querySelector('.js-output').innerHTML=todolistHTML;
}
function addTodo()
{
   const inputele = document.querySelector('.js-input-task');
   const dateele = document.querySelector('.js-input-date');

   const nameInput = inputele.value;
   const dateInput = dateele.value;

   todolist.push(
      {
         name: nameInput,
         duedate: dateInput
      });

   inputele.value='';
   dateele.value='';

   renderTodolist();

}


