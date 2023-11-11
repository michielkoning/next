import { FormEvent, FunctionComponent, useEffect, useState } from 'react'
import Router from 'next/router'
import { getAuthenticatedUserFromSession } from './../utils/passage'
import { getSupabase } from '../utils/supabase'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Tables } from '@/types/Tables'
import { RecipesList } from '@/components/Recipes/RecipesList/RecipesList'

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

const Dashboard: FunctionComponent<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  isAuthorized,
  userID,
  initialTodos
}) => {
  const [todos, setTodos] = useState(initialTodos)
  useEffect(() => {
    if (!isAuthorized) {
      Router.push('/login')
    }
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.target) {
      return
    }
    const data = new FormData(e.currentTarget)
    const todo = data.get('todo')
    const res = await fetch('/api/addTodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todo, userID })
    }).then((res) => res.json())
    setTodos([...todos, res])
  }

  return (
    <div>
      <h1>Welcome {userID}! </h1>
      <br></br>
      <div>
        <RecipesList recipes={todos} />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Todo: <input type="text" name="todo" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Dashboard
