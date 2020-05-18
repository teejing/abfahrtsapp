
var z =1;

var todoList= {
  todos: [],
   displayTodos: function(){
       if (this.todos.length === 0) {
          console.log('Your todo list is empty!');
       } else {
        console.log('My Todos:');
        for (var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText+" "+this.todos[i].todoText2);
        } else {
          console.log('( ) ', this.todos[i].todoText+" "+this.todos[i].todoText2);
        }
     }
   }     
}, 
  addTodo: function( todoText, todoText2, todoText3){
  this.todos.push({
    todoText: todoText,
    todoText2: todoText2,
    todoText3: todoText3,
    completed: false, 
    id: z++,
   
  });
  
  this.displayTodos();
  },
  searchTodo: function(searchTodoInput){

  
  
  
  
   
    this.displayTodos();
    },
  changeTodo: function(position,todoText,todoText2, todoText3){
  this.todos[position].todoText = todoText;
  this.todos[position].todoText2 = todoText2;
  this.todos[position].todoText3 = todoText3;
  this.displayTodos();
  },
  deleteTodo: function(position){
  this.todos.splice(position,1);
/*    delete this.todos[position];  */
  this.displayTodos();
  },
  toggleCompleted: function(position) {
  var todo = this.todos[position];
  todo.completed = !todo.completed;
  this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // get number of completed todos.
  /*   for ( var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    } */

    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

  

    //Case 1: If everything is true, make everything false.
    if (completedTodos === totalTodos){
      this.todos.forEach(function(todo){
        todo.completed = false;
      })

      //Case 2: Otherwise, make everything true. 
    }else{
      this.todos.forEach(function(todo){
        todo.completed = true;
      })
    }

    this.displayTodos();
  }
};

/* var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
}); */

var handlers = {
  
    addTodo: function() {
     var addTodoTextInput = document.getElementById('addTodoTextInput')
     var addTodoTextInput2 = document.getElementById('addTodoTextInput2')
     var addTodoTextInput3 = document.getElementById('addTodoTextInput3')
     todoList.addTodo(addTodoTextInput.value, addTodoTextInput2.value, addTodoTextInput3.value);
     addTodoTextInput.value = '';
     addTodoTextInput2.value = '';
     addTodoTextInput3.value = '';
     view.displayTodos();
    },
    changeTodo: function() {
      var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      var changeTodoTextInput2 = document.getElementById('changeTodoTextInput2');
      var changeTodoTextInput3 = document.getElementById('changeTodoTextInput3');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value, changeTodoTextInput2.value, changeTodoTextInput3.value);
      changeTodoPositionInput.value='';
      changeTodoTextInput.value='';
      changeTodoTextInput2.value='';
      changeTodoTextInput3.value='';
      view.displayTodos();
    },
    deleteTodo: function(position) {  
      todoList.deleteTodo(position); 
      view.displayTodos();
    },
    toggleCompleted: function(){
      var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value='';
      view.displayTodos();
    },
    toggleAll:function() {
      todoList.toggleAll();
      view.displayTodos();
    }
};

var view ={
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = ""; 
    for(var i = 0; i < todoList.todos.length; i++){  
      var index= i;
      var todoLi = document.createElement('li');
      var todo= todoList.todos[i];
      var todoTextWithCompletion = '';

      if(todo.completed === true){
        todoTextWithCompletion = todo.id+'(x) ' + todo.todoText +" "+ todo.todoText2+" "+ todo.todoText3;
      } else {
        todoTextWithCompletion = todo.id+'( ) ' + todo.todoText +" "+ todo.todoText2+" "+ todo.todoText3;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion; 
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function(){
    var todoUl = document.querySelector('ul');

    todoUl.addEventListener('click', function(event) {
      // Get the element that was clicked on.
      var elementClicked = event.target;

      // Check if elementClicked is a delete button.
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo( parseInt(elementClicked.parentNode.id)); 
      }
    });
  }
};

view.setUpEventListeners();

// ----------------

let gesamtschaden = [];

function create(name, position, notiz) {
    let schaden = {
      name,
      position, 
      notiz
    };

    gesamtschaden.push(schaden);
    read
}

function read() {
  gesamtschaden.forEach(function(schaden) {
    console.log(schaden)
  })
}

function update(index, name, position, notiz){
    gesamtschaden[index] = {
      name,
      position,
      notiz
    }
    read();
}

function deleteSchaden(index) {
  gesamtschaden = gesamtschaden.filter(function (el, i) {
    return i != index;
  });
  read();
}








var mistakeList = {
  mistakeArray : [],
  displaymistakeArray: function() {
    console.log(this.mistakeArray);
  },
  add: function (name, position, notiz) {
    var mistake = {
      name,
      position, 
      notiz
    };

    this.mistakeArray.push(mistake);
    this.displaymistakeArray();
  },
  
   update: function(index, name, position, notiz){
    this.mistakeArray[index] = {
      name,
      position,
      notiz
    }
    this.displaymistakeArray();
  },
  delete: function (index) {
    this.mistakeArray = this.mistakeArray.filter(function (el, i) {
      return i != index;
    });
    this.displaymistakeArray();
  }
};







/* class Damage {
  constructor(name, description, position) {
    this.name = name;
    this.description = description;
    this.position = position;
  }
  display() {
    console.log(this.name, this.description, this.position)
  }
}

// Class that holds a collection of damages
class DamageCollection {
  constructor(){
    this.damageCollection = []
  }
  // create new damage
  newDamage(name, description, position){
    let d = new Damage(name, description, position)
    this.damageCollection.push(d)
    return d
  }
  get allDamages(){
    return this.damageCollection
  }
}
 */
/* var damageList= {
  damages: [],
  displayDamages: function(){
       if (this.damages.length === 0) {
          console.log('Your damage list is empty!');
       } else {
        console.log('My Damages:');
        for (var i = 0; i < this.damages.length; i++){
        if(this.damages[i].completed === true) {
          console.log('(x)', this.damages[i].damageText);
        } else {
          console.log('( ) ', this.damages[i].damageText);
        }
     }
   }     
},
  addDamages: function(damageText){
  this.damages.push({
    damageText: damageText,
    completed: false
  });
  this.displayDamages();
  },
  changeDamages: function(position,damageText){
  this.damages[position].damageText = damageText;
  this.displayDamages();
  },
  deleteDamage: function(position){
  this.damages.splice(position,1);
  this.displayDamages();
  },
 };  */








/* setTimeout(function() {
  console.log('Wake up Gordon!');
  }, 5000) */
/* 
function logTenNumbers(){
  for ( var i = 0; i < 10; i++) {
    console.log(i);
  }
}
runWithDebugger(function logTenNumbers(){
  for ( var i = 0; i < 10; i++) {
      console.log(i);
  }
}); */

