import { CerealTypeParameterName } from '@/parameters/cerealParameters'

import { createSlice } from '@reduxjs/toolkit'

export type CerealComboTypeParameterName = CerealTypeParameterName | '未選択'

type initialStateType = {
  mfr: CerealComboTypeParameterName
  type: CerealComboTypeParameterName
}

const initialState: initialStateType = {
  mfr: '未選択',
  type: '未選択',
}

export const classificationSlice = createSlice({
  name: 'classification',
  initialState,
  reducers: {
    updateMfr: (state, { payload }) => {
      state.mfr = payload
    },
    updateType: (state, { payload }) => {
      state.type = payload
    },
  },
})
