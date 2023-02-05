import {FieldError} from "react-hook-form";
import {InputHTMLAttributes} from "react";

export interface IAuthInput {
  email: string
  password: string
}

export interface IFieldProps {
  placeholder: string
  error?: any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}