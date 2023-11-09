import * as React from 'react'
import {
  Field as _Field,
  FieldProps,
  FieldRenderProps,
  UseFieldConfig,
} from 'react-final-form'

export interface BaseFieldProps<
  FieldValue,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue,
  RP extends FieldRenderProps<FieldValue, T, InputValue> = FieldRenderProps<
    FieldValue,
    T,
    InputValue
  >
> extends UseFieldConfig<FieldValue, InputValue> {
  name: string
  children?: ((props: RP) => React.ReactNode) | React.ReactNode
  render?: (props: RP) => React.ReactNode
}

export type FieldWithComponentProps<
  C extends React.ElementType,
  FieldValue,
  InputValue = FieldValue
> = UseFieldConfig<FieldValue, InputValue> & {
  name: string
  component: C
} & Omit<
    React.ComponentPropsWithRef<C>,
    keyof UseFieldConfig<FieldValue, InputValue> | 'name' | 'component'
  >

function Field<
  FieldValue = any,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue,
  RP extends FieldRenderProps<FieldValue, T, InputValue> = FieldRenderProps<
    FieldValue,
    T,
    InputValue
  >
>(props: BaseFieldProps<FieldValue, T, InputValue, RP>): React.ReactElement {
  return <_Field {...(props as any)} />
}

function FieldWithComponent<
  C extends React.ElementType,
  FieldValue,
  InputValue = FieldValue
>(
  props: FieldWithComponentProps<C, FieldValue, InputValue>
): React.ReactElement {
  return <_Field {...(props as any)} />
}

// const comp = (
//   <Field<string> name="test">{(props) => <input {...props.input} />}</Field>

// import { GracefulField } from '../src'
// import { FieldProps, FieldRenderProps } from 'react-final-form'

type TextFieldProps<FieldValue> = FieldRenderProps<
  FieldValue,
  HTMLInputElement,
  string
> & {
  label: React.ReactNode
}

function TextField<FieldValue>({
  input,
  meta,
}: TextFieldProps<FieldValue>): React.ReactElement {
  return <input {...input} />
}

const comp = (
  <Field<string, HTMLInputElement> name="test">
    {(props) => <TextField {...props} label="foo" />}
  </Field>
)

const comp2 = (
  <FieldWithComponent<typeof TextField, string>
    name="test"
    component={TextField}
  />
)

type ButtonProps = { label: React.ReactNode }

function Button<C extends React.ElementType>(
  props: { component: C } & ButtonProps &
    Omit<React.ComponentPropsWithRef<C>, keyof ButtonProps>
): React.ReactElement
function Button(props: ButtonProps): React.ReactElement
function Button({
  component: Comp = 'button',
  label,
  ...props
}: ButtonProps & { component?: React.ElementType }): React.ReactElement {
  return <Comp {...props}>{label}</Comp>
}

function OverrideButton({
  shininess,
  ...props
}: ButtonProps & { shininess: number }): React.ReactElement {
  return <Button {...props} />
}

const test = <Button label="foo" component={OverrideButton} />
