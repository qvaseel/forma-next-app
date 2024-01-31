import { createEvent, createStore } from 'effector'


export const addTask = createEvent<string>()

export const $tasks = createStore<string[]>([])
.on(addTask, (store, payload) => ([
    ...store, payload
]))

export const $taskTypeState = $tasks.map(store => {
  if (store.length) {
    return 'data'
  }
  return 'empty'

})


export const changeTaskValue = createEvent<string>()

export const $taskInputValue = createStore<string>('')
  .on(changeTaskValue, (_store, payload) => payload)