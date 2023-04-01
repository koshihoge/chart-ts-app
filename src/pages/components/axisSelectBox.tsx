import { selectCerealValueOptions } from './selectBoxOptions'

import { CerealValueParameterName } from '@/parameters/cerealParameters'
import { axisXAtom, axisYAtom } from '@/state/axis'

import { useAtom } from 'jotai'

import React, { ChangeEvent } from 'react'

export const AxisSelectBox = (): JSX.Element => {
  const [axisX, setAxisX] = useAtom(axisXAtom)
  const [axisY, setAxisY] = useAtom(axisYAtom)

  const changeXCerealParameter = (e: ChangeEvent<HTMLSelectElement>): void => {
    setAxisX(e.target.value as CerealValueParameterName)
  }

  const changeYCerealParameter = (e: ChangeEvent<HTMLSelectElement>): void => {
    setAxisY(e.target.value as CerealValueParameterName)
  }

  return (
    <div>
      <span className="selectboxCaption">x軸</span>
      <select value={axisX} onChange={changeXCerealParameter}>
        {selectCerealValueOptions}
      </select>
      <span className="captionSpacing"></span>
      <span className="selectboxCaption">y軸</span>
      <select value={axisY} onChange={changeYCerealParameter}>
        {selectCerealValueOptions}
      </select>
    </div>
  )
}
