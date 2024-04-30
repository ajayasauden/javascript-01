var tasks=[]

function addTask(){

  var taskInput = document.getElementById('todoinput')
  var taskValue = taskInput.value

  

  // //checking if input is empty or not
   if(taskValue.trim()!==""){
  //   //add task
    tasks.push({
      text : taskValue,
      completed : false
    })
    taskInput.value=""//clear search bar --> input in bar
    updatetodolist()//update task list
   // console.log(tasks)
  }

}
function updatetodolist(){
  const todolist=document.getElementById('todolist')
  //clear existing todo ltem
  todolist.textContent=""
  tasks.forEach((task)=>{
    var listitem=document.createElement('li') 
    listitem.textContent=task.text  
    listitem.className=task.completed ? 'completed':'' 

    listitem.onclick=function(){
      togglecompleted(task)

    }
    todolist.appendChild(listitem)
  })  
  //function to calculate todos, completed
  updateaggregrate()
}
function togglecompleted(task){
  task.completed = ! task.completed
  updatetodolist()
}

function updateaggregrate(){
  var totaltasks=document.getElementById('totaltask')
  var completedtasks=document.getElementById('completedtask')
  var total=tasks.length
  var completed=tasks.reduce((acc,task)=>{
    return task.completed ? acc+1 : acc

  },0)
  totaltasks.textContent = total 
  completedtasks.textContent=completed
}
function filtertasks(){
  var searchinput=document.getElementById('searchinput')
  var searchvalue=searchinput.value.toLowerCase()
  var filteredtasks=tasks.filter((task)=>{
    return task.text.toLowerCase().includes(searchvalue)
  })

  //updatetodolidst with filtered task
  updatetodolistwithfilteredtasks(filteredtasks)

}
function updatetodolistwithfilteredtasks(filtertasks){
  var todolist= document.getElementById('todolist')
  todolist.textContent=""  //i am getting error upon using ---> todolist.textContent = ""

  filtertasks.forEach((task)=>{
      var listitem=document.createElement('li') 
      listitem.textContent=task.text  
      listitem.className=task.completed ? 'completed':'' 

      listitem.onclick=function(){
         togglecompleted(task)

      }
      todolist.appendChild(listitem)
  })  
  updateaggregrate()
}






