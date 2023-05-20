import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        id: 1,
        name: " task 1 ",
        description: "Task 1 description",
        complete: false,
    },
    {
        id: 2,
        name: " task 2 ",
        description: "Task 2 description",
        complete: false,
    },
];
export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(state, action);
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            //   state es para ver los datos que tengo actualmente y la action es para
            //  el dato que le estoy pasando
            console.log(action.payload, "desde la action");
            console.log(action, "desde la action");
            const taskForm = state.find((task) => task.id === action.payload);
            if (taskForm){
                state.splice(state.indexOf(taskForm), 1);
            }
        },
    },
});
// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
