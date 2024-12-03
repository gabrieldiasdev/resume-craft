/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext, type Control } from 'react-hook-form'
import { Editor } from '.'
import { FieldWrapper } from '../field-wrapper'

type EditorFieldProps = {
  label: string
  name: string
  containerClassName?: string
  required?: boolean
  className?: string
  control?: Control<any, any>
}

export const EditorField = ({
  label,
  name,
  required,
  containerClassName,
  control: customControl,
  ...props
}: EditorFieldProps) => {
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
          <Editor {...props} {...field} />
        </FieldWrapper>
      )}
    />
  )
}