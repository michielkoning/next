import { FunctionComponent, useEffect } from 'react'
import Router from 'next/router'
import { getAuthenticatedUserFromSession } from './../../utils/passage'
import { getSupabase } from '../../utils/supabase'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Tables } from '@/types/Tables'
import { RecipesList } from '@/components/Recipes/RecipesList/RecipesList'

export const getServerSideProps = (async ({ req, res, params }) => {
  const loginProps = await getAuthenticatedUserFromSession(req, res)

  if (loginProps?.isAuthorized) {
    const supabase = getSupabase(loginProps.userID)
    const { data } = await supabase
      .from('todo')
      .select()
      .eq('id', Number(params?.slug))

    return {
      props: {
        isAuthorized: loginProps.isAuthorized ?? false,
        initialTodos: data ?? []
      }
    }
  } else {
    return {
      props: {
        isAuthorized: loginProps?.isAuthorized ?? false,
        initialTodos: []
      }
    }
  }
}) satisfies GetServerSideProps<{
  isAuthorized: boolean
  initialTodos: Tables<'todo'>[]
}>

const RecipeDetails: FunctionComponent<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  isAuthorized,
  initialTodos
}) => {
  useEffect(() => {
    if (!isAuthorized) {
      Router.push('/login')
    }
  })

  return <RecipesList recipes={initialTodos} />
}

export default RecipeDetails
