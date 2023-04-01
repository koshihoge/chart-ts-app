import { CerealValueParameterName } from '@/parameters/cerealParameters'

import { atom } from 'recoil'

export const axisXAtom = atom<CerealValueParameterName>({
  key: 'axisXAtom',
  default: 'calories',
})

export const axisYAtom = atom<CerealValueParameterName>({
  key: 'axisYAtom',
  default: 'carbo',
})
