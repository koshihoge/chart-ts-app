import { refineCerealValueOptions } from './selectBoxOptions'

import { CerealTypeParameterName } from '../../parameters/cerealParameters'

import React, { ChangeEvent } from 'react'

export type CerealComboTypeParameterName = CerealTypeParameterName | '未選択'
type Props = {
  mfrCerealParameter: CerealComboTypeParameterName
  setMfrCerealParameter: React.Dispatch<
    React.SetStateAction<CerealComboTypeParameterName>
  >
  typeCerealParameter: CerealComboTypeParameterName
  setTypeCerealParameter: React.Dispatch<
    React.SetStateAction<CerealComboTypeParameterName>
  >
  mfrs: Set<string>
  types: Set<string>
}

export const ClassificationSelectBox = (props: Props): JSX.Element => {
  const changeMfrCerealParameter = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    props.setMfrCerealParameter(e.target.value as CerealComboTypeParameterName)
  }

  const changeTypeCerealParameter = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    props.setTypeCerealParameter(e.target.value as CerealComboTypeParameterName)
  }

  return (
    <div>
      <span className="selectboxCaption">mfr</span>
      <select
        value={props.mfrCerealParameter}
        onChange={changeMfrCerealParameter}>
        {refineCerealValueOptions(props.mfrs)}
      </select>
      <span className="captionSpacing"></span>
      <span className="selectboxCaption">type</span>
      <select
        value={props.typeCerealParameter}
        onChange={changeTypeCerealParameter}>
        {refineCerealValueOptions(props.types)}
      </select>
    </div>
  )
}
