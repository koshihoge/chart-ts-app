export type CerealParameterName =
  | 'name'
  | CerealTypeParameterName
  | CerealValueParameterName
export type CerealTypeParameterName = 'mfr' | 'type'

export const cerealValueParameterNames = [
  'calories',
  'protein',
  'fat',
  'sodium',
  'fiber',
  'carbo',
  'sugars',
  'potass',
  'vitamins',
  'shelf',
  'weight',
  'cups',
  'rating',
] as const
export type CerealValueParameterName =
  (typeof cerealValueParameterNames)[number]
