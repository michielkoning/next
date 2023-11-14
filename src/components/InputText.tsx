import { FunctionComponent, InputHTMLAttributes } from 'react'
import { FieldValues, RegisterOptions, UseFormRegister, useFormContext } from 'react-hook-form';

export type InputTextTypes = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  registerOptions: RegisterOptions<FieldValues>;
}

const InputText: FunctionComponent<InputTextTypes> = ({ name, id, register, registerOptions, ...rest}) => {

  // const { formState, getFieldState } = useFormContext<FieldValues>();
  // const { error, isTouched } = getFieldState(name, formState);

  return (
    <div>
      <label htmlFor={id}>Todo</label>
      <input id={id} type="type"
      {...register(name, registerOptions)}
      {...rest} />
  </div>

  )
}

export default InputText
