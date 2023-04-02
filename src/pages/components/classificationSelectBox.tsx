import { refineCerealValueOptions } from './selectBoxOptions'

import { CerealTypeParameterName } from '../../parameters/cerealParameters'

import { classificationSlice } from '@/state/classification'
import { RootState } from '@/state/store'

import { useDispatch, useSelector } from 'react-redux'

import React, { ChangeEvent } from 'react'

export type CerealComboTypeParameterName = CerealTypeParameterName | '未選択'
type Props = {
  mfrs: Set<string>
  types: Set<string>
}

export const ClassificationSelectBox = (props: Props): JSX.Element => {
  const dispatch = useDispatch()
  const classification = useSelector((state: RootState) => state.classification)

  const changeMfrCerealParameter = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    dispatch(
      classificationSlice.actions.updateMfr(
        e.target.value as CerealComboTypeParameterName
      )
    )
  }

  const changeTypeCerealParameter = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    dispatch(
      classificationSlice.actions.updateType(
        e.target.value as CerealComboTypeParameterName
      )
    )
  }

  return (
    <div>
      <span className="selectboxCaption">mfr</span>
      <select value={classification.mfr} onChange={changeMfrCerealParameter}>
        {refineCerealValueOptions(props.mfrs)}
      </select>
      <span className="captionSpacing"></span>
      <span className="selectboxCaption">type</span>
      <select value={classification.type} onChange={changeTypeCerealParameter}>
        {refineCerealValueOptions(props.types)}
      </select>
    </div>
  )
}
