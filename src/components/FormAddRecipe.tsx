import useRecipesStore from '@/store/useRecipesStore'
import { FunctionComponent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormAddRecipe = {
  todo: string
}

export const FormAddRecipe: FunctionComponent<{ userID: string }> = ({ userID }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormAddRecipe>()

  const addRecipes = useRecipesStore((state) => state.addRecipe)

  const onSubmit: SubmitHandler<FormAddRecipe> = async (data) => {
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
      <div>
        <label>Todo</label>
        <input type="text" {...register('todo', { required: true })} />
        {errors.todo && <span>This field is required</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
