/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentProps, ReactNode } from 'react'
import { Controller, useFormContext, type Control } from 'react-hook-form'
import { Input } from '.'
import { FieldWrapper } from '../field-wrapper'

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string
  name: string
  containerClassName?: string
  extraContent?: (value: string) => ReactNode
  control?: Control<any, any>
}

export const InputField = ({
  label,
  name,
  required,
  containerClassName,
  extraContent,
  control: customControl,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={customControl ?? control}
      name={name}
      rules={{ required: required && 'Campo obrigatório' }}
      render={({ field, fieldState }) => (
        <FieldWrapper
          label={label}
          className={containerClassName}
          error={fieldState?.error}
        >
          <Input {...props} {...field} />
          {extraContent && extraContent(field.value)}
        </FieldWrapper>
      )}
    />
  )
}
