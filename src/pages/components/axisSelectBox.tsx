import { selectCerealValueOptions } from './selectBoxOptions'

import { CerealValueParameterName } from '@/parameters/cerealParameters'
import { useAxis } from '@/state/axis'

import { useStore } from 'zustand'

import React, { ChangeEvent } from 'react'

export const AxisSelectBox = (): JSX.Element => {
  const axis = useStore(useAxis)

  const changeXCerealParameter = (e: ChangeEvent<HTMLSelectElement>): void => {
    axis.updateX(e.target.value as CerealValueParameterName)
  }

  const changeYCerealParameter = (e: ChangeEvent<HTMLSelectElement>): void => {
    axis.updateY(e.target.value as CerealValueParameterName)
  }

  return (
    <div>
      <span className="selectboxCaption">x軸</span>
      <select value={axis.x} onChange={changeXCerealParameter}>
        {selectCerealValueOptions}
      </select>
      <span className="captionSpacing"></span>
      <span className="selectboxCaption">y軸</span>
      <select value={axis.y} onChange={changeYCerealParameter}>
        {selectCerealValueOptions}
      </select>
    </div>
  )
}
