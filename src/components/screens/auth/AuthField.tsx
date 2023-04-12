import { Field } from '@/components/ui/form-elements/Field'
import { validEmail } from '@/shared/regex'
import React, { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
}

export const AuthFields: FC<IAuthFields> = ({
  register, formState: { errors }, isPasswordRequired = false
}) => {
  return (
    <>
      <Field 
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Please enter a value email address'
          }
        })} 
        placeholder='E-mail'
        error={errors.email?.message?.toString()}
      />
      <Field 
        {...register('password', isPasswordRequired ? {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Please enter a value email address'
          }
        } : {})} 
        placeholder='Password'
        type='password'
        error={errors.password?.message?.toString()}
      />
    </>
  )
}
