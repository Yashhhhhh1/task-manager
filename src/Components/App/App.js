import AddTask from "../AddTask/AddTask";
import style from './App.module.css'
import { useState } from "react";
import { connect } from "react-redux";
import Tasks from "../Tasks/Tasks";


function App({ task }) {
  const [addTask, setAddTask] = useState(false);


  return (
    <>
    <div id={style.container}>
      <header>
        <div className={style.taskFns}>
          <h1 style={{ display: "inline-block", textDecoration: "underline" }}>Task Tracker</h1>
          <button onClick={() =>{setAddTask(!addTask)}} id={style.openCloseBtn}
            style={!addTask ? { } : { backgroundColor: "red"}}
          >{!addTask ? "OPEN" : "CLOSE"}</button>
        </div>
        {addTask && <AddTask />}
      </header>
      <div id={style.tasksContainer}>
        {task.length ? <Tasks /> : 
        <h3 style={{ textAlign: "center" }}>No Tasks to show.</h3>
        }
      </div>
    </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
}


export default connect(mapStateToProps)(App);
