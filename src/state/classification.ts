import { CerealTypeParameterName } from '@/parameters/cerealParameters'

import { createStore } from 'zustand'

export type CerealComboTypeParameterName = CerealTypeParameterName | '未選択'

type ClassificationState = {
  mfr: CerealComboTypeParameterName
  type: CerealComboTypeParameterName
  updateMfr: (newMfr: CerealComboTypeParameterName) => void
  updateType: (newType: CerealComboTypeParameterName) => void
}

export const useClassification = createStore<ClassificationState>(set => ({
  mfr: '未選択',
  type: '未選択',
  updateMfr: (newMfr): void => set(() => ({ mfr: newMfr })),
  updateType: (newType): void => set(() => ({ type: newType })),
}))
