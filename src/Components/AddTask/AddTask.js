import { useState } from "react";
import { connect } from "react-redux";
import style from './AddTask.module.css'


const AddTask = ({task, addTask}) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(text.trim()){
            setText("");
            setDay("");
            setReminder(false);
        }
    }

    const addTaskBtn = () => {
        if(text.trim() && day){
            if(task.length){
                addTask([...task, {id: task[task.length - 1].id + 1, text, day, reminder}])
            }else{
                addTask([{id: 1, text, day, reminder}])
            }
        }else{
            alert("Please fill details to Add Task.");
        }
    }
    
    return (
        <form onSubmit={onSubmit}>
                <div className={style.taskInputs}>
                    <label>Task</label>
                    <input autoFocus value={text} required onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="Enter Task Here..."/>
                </div>
                <div className={style.taskInputs}>
                    <label>Day & Time</label>
                    <input value={day} required onChange={(e)=>{setDay(e.target.value)}} type="datetime-local" min="2022-01-01" placeholder="Enter Day Here..."/>
                </div>
                <div className={style.taskInputs}>
                    <label>Set Reminder</label>
                    <input value={reminder} checked={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}} type="checkbox"/>
                </div>
                <button onClick={addTaskBtn} id={style.submitBtn}>Submit</button>
            </form>
    )
}


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask : (task)=>dispatch({type : "ADD_NEW_TASK", payload : task})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);