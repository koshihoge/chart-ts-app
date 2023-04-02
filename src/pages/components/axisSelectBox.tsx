import { selectCerealValueOptions } from './selectBoxOptions'

import { CerealValueParameterName } from '@/parameters/cerealParameters'
import { axisSlice } from '@/state/axis'
import { RootState } from '@/state/store'

import { useSelector, useDispatch } from 'react-redux'

import React, { ChangeEvent } from 'react'

export const AxisSelectBox = (): JSX.Element => {
  const dispatch = useDispatch()
  const axis = useSelector((state: RootState) => state.axis)

  const changeXCerealParameter = (e: ChangeEvent<HTMLSelectElement>): void => {
    dispatch(
      axisSlice.actions.updateXAxis(e.target.value as CerealValueParameterName)
    )
  }

  const changeYCerealParameter = (e: ChangeEvent<HTMLSelectElement>): void => {
    dispatch(
      axisSlice.actions.updateYAxis(e.target.value as CerealValueParameterName)
    )
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
