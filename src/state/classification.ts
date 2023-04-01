import { CerealTypeParameterName } from '../parameters/cerealParameters'

import { atom } from 'jotai'

export const classificationMfrAtom = atom('未選択')
export const classificationTypeAtom = atom('未選択')
export type CerealComboTypeParameterName = CerealTypeParameterName | '未選択'
