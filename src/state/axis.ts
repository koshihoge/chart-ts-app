import { CerealValueParameterName } from '@/parameters/cerealParameters'

import { atom } from 'jotai'

export const axisXAtom = atom<CerealValueParameterName>('calories')
export const axisYAtom = atom<CerealValueParameterName>('carbo')
