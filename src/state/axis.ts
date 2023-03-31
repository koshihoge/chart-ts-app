import { CerealValueParameterName } from '@/parameters/cerealParameters'

import { createStore } from 'zustand'

type AxisState = {
  x: CerealValueParameterName
  y: CerealValueParameterName
  updateX: (newX: CerealValueParameterName) => void
  updateY: (newX: CerealValueParameterName) => void
}

export const useAxis = createStore<AxisState>(set => ({
  x: 'calories',
  y: 'carbo',
  updateX: (newX): void => set(() => ({ x: newX })),
  updateY: (newY): void => set(() => ({ x: newY })),
}))
