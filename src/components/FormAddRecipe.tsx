import useRecipesStore from '@/store/useRecipesStore'
import { FunctionComponent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputText from './InputText'

type FormAddRecipe = {
  todo: string
}

export const FormAddRecipe: FunctionComponent<{ userID: string }> = ({ userID }) => {
  const {
    register,
    handleSubmit,
    resetField
  } = useForm<FormAddRecipe>()

  const addRecipes = useRecipesStore((state) => state.addRecipe)

  const onSubmit: SubmitHandler<FormAddRecipe> = async (data) => {
    'use server'
    const res = await fetch('/api/addTodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, userID })
    })
    const recipe = await res.json()
    addRecipes(recipe)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" id="tot" {...register('todo', { required: true })} />
      <button type="submit">Submit</button>
    </form>
  )
}
