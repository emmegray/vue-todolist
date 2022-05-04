const app = new Vue ({
  el: `#app`,
  data:{
    todos:[
      {text: `Fare la spesa`, done: false}
    ],
    newTodo: ``
  },
  methods:{
    addTodo(){
      if(this.newTodo.length > 1){
        this.todos.push({text: this.newTodo, done: false});
        this.newTodo=``;
      }
    },
    removeTodo(index){
      if(confirm(`Sei sicuro di eliminare: ${this.todos[index].text}?`))
      this.todos.splice(index, 1);
    },
    doneTodo(index){
      this.todos[index].done = !this.todos[index].done;
    }
 }
})