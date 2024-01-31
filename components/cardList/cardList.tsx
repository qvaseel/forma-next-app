import { list, variant } from '@effector/reflect'
import CardTask from "../cardTask/cardTask"
import { $tasks, $taskTypeState } from "../../model"
import { useStore } from 'effector-react'
import { Typography } from '@mui/material'
import { reflect } from '@effector/reflect';


const CardListView = list({
  view: CardTask,
  source: $tasks,
  mapItem: {
    title: (note) => note,
    description: (note) => note,
  }
})

export const CardsListVariant = variant({
  source: $taskTypeState,
  cases: {
    data: CardListView,
  }
})