import { refineCerealValueOptions } from './selectBoxOptions'

import {
  useClassification,
  CerealComboTypeParameterName,
} from '@/state/classification'

import { useStore } from 'zustand'

import React, { ChangeEvent } from 'react'

type Props2 = {
  mfrs: Set<string>
  types: Set<string>
}

export const ClassificationSelectBox = (props: Props2): JSX.Element => {
  const classification = useStore(useClassification)

  const changeMfrCerealParameter = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    classification.updateMfr(e.target.value as CerealComboTypeParameterName)
  }

  const changeTypeCerealParameter = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    classification.updateType(e.target.value as CerealComboTypeParameterName)
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
