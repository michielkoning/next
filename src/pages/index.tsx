import { FunctionComponent, useEffect, useState } from 'react'
import Router from 'next/router'
import { getAuthenticatedUserFromSession } from './../utils/passage'
import { getSupabase } from '../utils/supabase'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Tables } from '@/types/Tables'
import { RecipesList } from '@/components/Recipes/RecipesList/RecipesList'
import { SubmitHandler, useForm } from 'react-hook-form'

export const getServerSideProps = (async ({ req, res }) => {
  const loginProps = await getAuthenticatedUserFromSession(req, res)

  if (loginProps?.isAuthorized) {
    const supabase = getSupabase(loginProps.userID)
    const { data } = await supabase.from('todo').select().is('is_complete', false)

    return {
      props: {
        isAuthorized: loginProps.isAuthorized ?? false,
        userID: loginProps.userID ?? '',
        initialTodos: data ?? []
      }
    }
  } else {
    return {
      props: {
        isAuthorized: loginProps?.isAuthorized ?? false,
        userID: loginProps?.userID ?? '',
        initialTodos: []
      }
    }
  }
}) satisfies GetServerSideProps<{
  isAuthorized: boolean
  userID: string
  initialTodos: Tables<'todo'>[]
}>

type Inputs = {
  todo: string
}

const Dashboard: FunctionComponent<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  isAuthorized,
  userID,
  initialTodos
}) => {
  const [todos, setTodos] = useState(initialTodos)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()
  useEffect(() => {
    if (!isAuthorized) {
      Router.push('/login')
    }
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch('/api/addTodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, userID })
    }).then((res) => res.json())
    setTodos([...todos, res])
  }

  return (
    <>
      <RecipesList recipes={todos} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Todo</label>
          <input type="text" {...register('todo', { required: true })} />
          {errors.todo && <span>This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Dashboard
