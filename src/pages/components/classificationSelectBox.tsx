import { refineCerealValueOptions } from './selectBoxOptions'

import { CerealTypeParameterName } from '../../parameters/cerealParameters'

import {
  classificationMfrAtom,
  classificationTypeAtom,
} from '@/state/classification'

import { useRecoilState } from 'recoil'

import React, { ChangeEvent } from 'react'

export type CerealComboTypeParameterName = CerealTypeParameterName | '未選択'
type Props = {
  mfrs: Set<string>
  types: Set<string>
}

export const ClassificationSelectBox = (props: Props): JSX.Element => {
  const [mfr, setMfr] = useRecoilState(classificationMfrAtom)
  const [type, setType] = useRecoilState(classificationTypeAtom)

  const changeMfrCerealParameter = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    setMfr(e.target.value as CerealComboTypeParameterName)
  }

  const changeTypeCerealParameter = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    setType(e.target.value as CerealComboTypeParameterName)
  }

  return (
    <div>
      <span className="selectboxCaption">mfr</span>
      <select value={mfr} onChange={changeMfrCerealParameter}>
        {refineCerealValueOptions(props.mfrs)}
      </select>
      <span className="captionSpacing"></span>
      <span className="selectboxCaption">type</span>
      <select value={type} onChange={changeTypeCerealParameter}>
        {refineCerealValueOptions(props.types)}
      </select>
    </div>
  )
}
