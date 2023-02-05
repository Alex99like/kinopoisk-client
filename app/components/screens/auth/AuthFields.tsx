import {FormState, UseFormRegister} from "react-hook-form";
import {FC} from "react";
import Field from "@/app/components/ui/form-elements/Field";
import {validEmail} from "@/app/shared/regex";

interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
}

export const AuthFields: FC<IAuthFields> = ({
  register, formState: { errors },
  isPasswordRequired = false
}) => {
  return (
    <>
      <Field {...register('email', {
        required: 'Email is required',
        pattern: {
          value: validEmail,
          message: 'Please enter a valid email address'
        }
      })}
        placeholder={'E-mail'}
        error={errors.email}
      />
      <Field {...register('password', isPasswordRequired ? {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Min length should more 6 symbols'
        }
      } : {

      })}
        placeholder={'Password'}
        error={errors.password}
      />
    </>
  )
}