import React, { ChangeEvent } from 'react'
import { useStore } from 'effector-react'
import { reflect } from '@effector/reflect'
import { Button, TextField, Typography} from "@mui/material"
import styles from "./cardHandler.module.css"
import { $taskInputValue, changeTaskValue, addTask  } from "../../model"

interface TaskHandlerViewProps {
  title: string,
  description: string
}

const TaskHandlerView: React.FC<TaskHandlerViewProps> = ({ title, description }) => {

  const onChangeNote = (e: ChangeEvent<HTMLInputElement>) => {
    changeTaskValue(e.currentTarget.value)
  }

  const handleAddClick = () => {
    addTask(title)
    changeTaskValue('')
  }

  return (
    <div className={styles.section}>
        <Typography>Название задачи</Typography>
        <TextField
            onChange={onChangeNote}
            value={title}
            variant='outlined'
            style={{ marginBottom: '12px'}}
        />
        <Typography>Описание</Typography>
        <TextField
            onChange={onChangeNote}
            value={description}
            variant='outlined'
        />
        <Button variant='contained' onClick={handleAddClick} style={{ marginBottom: '12px', marginTop: '12px' }}>Отправить</Button>
    </div>
  )
}

export const CardHandler = reflect({
  view: TaskHandlerView,
  bind: {
    title: $taskInputValue,
    description: $taskInputValue
  }
})