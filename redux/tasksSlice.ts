import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TasksState {
  value: string[]
}

const initialState: TasksState = {
  value: ['item 1'],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer