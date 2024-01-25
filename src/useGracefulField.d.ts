import { FieldRenderProps, UseFieldConfig } from 'react-final-form'

export type UseGracefulFieldConfig<FieldValue, InputValue = any> = Omit<
  UseFieldConfig<FieldValue, InputValue>,
  'formatOnBlur'
> & { invalidValue?: FieldValue }

/**
 * @deprecated use {@link UseGracefulFieldConfig}
 */
export type UseGracefulFieldProps<
  FieldValue,
  InputValue = any
> = UseGracefulFieldConfig<FieldValue, InputValue>

export default function useGracefulField<
  FieldValue = any,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue
>(
  name: string,
  config?: UseGracefulFieldConfig<FieldValue, InputValue>
): FieldRenderProps<FieldValue, T, InputValue>
