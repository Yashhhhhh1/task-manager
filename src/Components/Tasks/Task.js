import { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './Tasks.module.css';


const Task = ({task, delTask, item, i}) => {
    const filterTask = (id) => {
        // eslint-disable-next-line
        return( task.filter(item =>{
            if(item.id !== Number(id)){
                return item;
            }
        }))
        
    }

    useEffect(()=>{}, [task])

    return (
        <div
            id={style.taskContainer}
            className={item.reminder ? style.active : ""}
            key={i}>
            <div id={style.taskDetails}>
            <span title={item.text} id={style.taskText}><b>{item.text}</b></span><br></br>
            <span>{item.day}</span><br></br>
            </div>
            <i id={item.id} onClick={(e)=>{delTask(filterTask(e.target.id))}} className="fa-solid fa-trash-can"></i>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        delTask : (filterFn)=>dispatch({type: "DEL_TASK", payload : filterFn})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Task);