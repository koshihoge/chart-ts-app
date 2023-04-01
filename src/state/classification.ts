import { CerealTypeParameterName } from '../parameters/cerealParameters'

import { atom } from 'recoil'

export type CerealComboTypeParameterName = CerealTypeParameterName | '未選択'
export const classificationMfrAtom = atom<CerealComboTypeParameterName>({
  key: 'classificationMfrAtom',
  default: '未選択',
})

export const classificationTypeAtom = atom<CerealComboTypeParameterName>({
  key: 'classificationTypeAtom',
  default: '未選択',
})
