const initialState = {
    task : []
}



const Reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_NEW_TASK" :
            return {
                task : action.payload
            };
        case "DEL_TASK" :
            return {
                task : action.payload
            }
        default:
            return state;
}
}



export default Reducer;