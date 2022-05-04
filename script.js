const app = new Vue ({
  el: `#app`,
  data:{
    todos:[
      {text: `Fare la spesa`, complete: false}
    ],
    newTodo: ``
  },
  methods:{
    addTodo(){
      if(this.newTodo.length > 1){
        this.todos.push({text: this.newTodo, complete: false});
        this.newTodo=``;
      }
    },
    removeTodo(index){
      if(confirm(`Sei sicuro di eliminare: ${this.todos[index]}?`))
      this.todos.splice(index, 1);
    },
    completeTodo(index){
      this.todos[index] = {...this.todos[index], complete: true};
      console.log(this.todos[index]);
    }
 }
})