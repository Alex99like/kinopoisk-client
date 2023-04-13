import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { EditorProps, EditorState } from 'draft-js'

export interface IFieldProps {
	placeholder: string
	error?: string
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
export interface IUploadField {
	folder?: string
	image?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: string
	style?: CSSProperties
	isNoImage?: boolean
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}
