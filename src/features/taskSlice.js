import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        searchedTitle: '',
        taskList: [],
        searchedList: [],
        completedTaskList: [],
    },
    reducers: {
        setTaskList: (state, action) => {
            state.taskList = action.payload;
        },
        addTask: (state, action) => {
            const { id, title, done } = action.payload;
            const newTaskList = [...state.taskList, { id, title, done }]
            state.taskList = newTaskList;
            localStorage.setItem('tasks', JSON.stringify(newTaskList));
        },
        removeTask: (state, action) => {
            const taskId = action.payload;
            console.log(taskId)
            console.log(state.taskList)
            const newTaskList = state.taskList.filter(task => task.id !== taskId);
            state.taskList = newTaskList;
            const newCompletedTaskList = newTaskList.filter(task => task.done)
            state.completedTaskList = newCompletedTaskList;
            localStorage.setItem('tasks', JSON.stringify(newTaskList));
            localStorage.setItem('completedTasks', JSON.stringify(newCompletedTaskList));
        },
        completeTask(state, action) {
            const { taskId, completed } = action.payload;
            const newTaskList = state.taskList.map((task) =>
                task.id === taskId ? { ...task, done: completed } : task
            );
            state.taskList = newTaskList;
            const newCompletedTaskList = newTaskList.filter(task => task.done)
            state.completedTaskList = newCompletedTaskList;
            localStorage.setItem('tasks', JSON.stringify(newTaskList));
            localStorage.setItem('completedTasks', JSON.stringify(newCompletedTaskList));
        },
        editTask: (state, action) => {
            const { taskId, title } = action.payload;
            const newTaskList = state.taskList.map(task => task.id === taskId ? { ...task, title: title } : task);
            state.taskList = newTaskList;
            const newCompletedTaskList = newTaskList.filter(task => task.done)
            state.completedTaskList = newCompletedTaskList;
            localStorage.setItem('tasks', JSON.stringify(newTaskList));
            localStorage.setItem('completedTasks', JSON.stringify(newCompletedTaskList));
        },
        setSearchedTitle: (state, action) => {
            const taskTitle = action.payload;
            state.searchedTitle = taskTitle
        },
        searchTask: (state, action) => {
            const taskTitle = state.searchedTitle;
            const newSearchedList = state.taskList.filter(task => task.title.toLowerCase().includes(taskTitle.toLowerCase()));
            console.log(newSearchedList)
            state.searchedList = newSearchedList;
            const newCompletedTaskList = newSearchedList.filter(task => task.done)
            state.completedTaskList = newCompletedTaskList;
        }

    },
});

export const { setTaskList, addTask, removeTask, completeTask, editTask, searchTask, setSearchedTitle } = taskSlice.actions;
export const selectTasks = (state) => state.tasks.taskList
export default taskSlice.reducer;