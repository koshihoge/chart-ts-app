import { CerealValueParameterName } from '@/parameters/cerealParameters'

import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
  x: CerealValueParameterName
  y: CerealValueParameterName
}

const initialState: initialStateType = {
  x: 'calories',
  y: 'carbo',
}

export const axisSlice = createSlice({
  name: 'axis',
  initialState,
  reducers: {
    updateXAxis: (state, { payload }) => {
      state.x = payload
    },
    updateYAxis: (state, { payload }) => {
      state.y = payload
    },
  },
})
