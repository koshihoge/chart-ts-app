import { selectCerealValueOptions } from './selectBoxOptions'

import { CerealValueParameterName } from '@/parameters/cerealParameters'

import React, { ChangeEvent } from 'react'

type Props = {
  xCerealParameter: CerealValueParameterName
  setXCerealParameter: React.Dispatch<
    React.SetStateAction<CerealValueParameterName>
  >
  yCerealParameter: CerealValueParameterName
  setYCerealParameter: React.Dispatch<
    React.SetStateAction<CerealValueParameterName>
  >
}

export const AxisSelectBox = (props: Props): JSX.Element => {
  const changeXCerealParameter = (e: ChangeEvent<HTMLSelectElement>): void => {
    props.setXCerealParameter(e.target.value as CerealValueParameterName)
  }

  const changeYCerealParameter = (e: ChangeEvent<HTMLSelectElement>): void => {
    props.setYCerealParameter(e.target.value as CerealValueParameterName)
  }

  return (
    <div>
      <span className="selectboxCaption">x軸</span>
      <select value={props.xCerealParameter} onChange={changeXCerealParameter}>
        {selectCerealValueOptions}
      </select>
      <span className="captionSpacing"></span>
      <span className="selectboxCaption">y軸</span>
      <select value={props.yCerealParameter} onChange={changeYCerealParameter}>
        {selectCerealValueOptions}
      </select>
    </div>
  )
}
