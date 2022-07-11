import { connect } from "react-redux";
import Task from "./Task";


const Tasks = ({ task }) => {
    return (
        <>
            {
                task.length && task.map((item, i) => {
                    return (
                        <Task item = {item} i = {i} />
                    )
                })
            }
        </>
    )
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Tasks);