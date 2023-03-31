import { cerealValueParameterNames } from '@/parameters/cerealParamters'

export const selectCerealValueOptions = cerealValueParameterNames.map(
  (element, i) => (
    <option key={i} value={element}>
      {element}
    </option>
  )
)

export const refineCerealValueOptions = (values: Set<string>): JSX.Element => {
  return (
    <>
      <option value={'未選択'}></option>
      {Array.from(values).map((element, i) => (
        <option key={i} value={element}>
          {element}
        </option>
      ))}
    </>
  )
}
