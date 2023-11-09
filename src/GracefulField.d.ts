// @flow

import * as React from 'react'
import {
  FieldRenderProps,
  RenderableProps,
  UseFieldConfig,
} from 'react-final-form'

export type GracefulFieldProps<
  FieldValue,
  RP extends FieldRenderProps<FieldValue, T, InputValue>,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue
> = Omit<UseFieldConfig<FieldValue, InputValue>, 'formatOnBlur'> &
  RenderableProps<RP> & {
    name: string
    invalidValue?: FieldValue
    [otherProp: string]: any
  }

export default function GracefulField<
  FieldValue = any,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue,
  RP extends FieldRenderProps<FieldValue, T, InputValue> = FieldRenderProps<
    FieldValue,
    T,
    InputValue
  >
>(props: GracefulFieldProps<FieldValue, RP, T, InputValue>): React.ReactElement
