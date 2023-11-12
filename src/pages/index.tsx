import { FunctionComponent, useEffect, useState } from 'react'
import Router from 'next/router'
import { getAuthenticatedUserFromSession } from './../utils/passage'
import { getSupabase } from '../utils/supabase'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Tables } from '@/types/Tables'
import { RecipesList } from '@/components/Recipes/RecipesList/RecipesList'
import useRecipesStore from '@/store/useRecipesStore'
import { FormAddRecipe } from '@/components/FormAddRecipe'


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

  const setRecipes = useRecipesStore((state) => state.setRecipes)

  useEffect(() => {
    setRecipes(initialTodos)
  })

  useEffect(() => {
    if (!isAuthorized) {
      Router.push('/login')
    }
  })


  return (
    <>
      <RecipesList />
      <FormAddRecipe userID={userID} />
    </>
  )
}

export default Dashboard
