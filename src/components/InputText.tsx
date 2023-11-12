import { FunctionComponent, InputHTMLAttributes } from 'react'

export type InputTextTypes = InputHTMLAttributes<HTMLInputElement>

const InputText: FunctionComponent<InputTextTypes> = () => {
  return <input id="id" type="type" />
}

export default InputText
