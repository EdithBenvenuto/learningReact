import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';

import tasks from './sample/task.json'

//Importando componentes
import Tasks from './component/Tasks.js';
import TaskForm from './component/TaskForm.js';
import Posts from './component/Posts';

class App extends Component{
  
  state = {
    tasks: tasks
  }

  addTask = (title, description) =>{
    const newTask = {
      title: title, 
      description: description,
      id: this.state.tasks.length
    }

    // Agregar un nuevo elemento al arreglo que ya tenía
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = id => {
    const newTask= this.state.tasks.filter(task => task.id !== id)
    //console.log(newTask)
    this.setState({tasks: newTask})
  }

  checkDone = id => {
    //devuelve un arreglo con los datos actualizados
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id){
        task.done = !task.done
      }
      return task;
    })
    console.log(newTasks)
    this.setState({tasks: newTasks})

  }

  render() {
    return <div>
      {/*Nos va a permitir crear una ruta en el navegador*/ }
      <Router>
        <Link to = "/">Home</Link> <br/>
        <Link to = "/posts">Posts</Link>
        <Route exact path = "/" render = {() => {
          return <div>
            {/* se pasan las funciones a travez de un props */}
            <TaskForm addTask={this.addTask}/>
            {/*Se pasan las funciones que quiero que se ejecuten en Tasks*/ }
            <Tasks 
              tasks={this.state.tasks} 
              deleteTask={this.deleteTask}
              checkDone = {this.checkDone}
            />
          </div>
        }}>
        </Route>
        <Route path = "/posts" component = {Posts}/>
      </Router>
    </div>
  }
}

export default App;
