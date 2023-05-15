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
    },
});
// Action creators are generated for each case reducer function
export const { addTask } = taskSlice.actions

export default taskSlice.reducer;
