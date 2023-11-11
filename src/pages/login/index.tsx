import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import PassageLogin from './../../components/login'
import { getAuthenticatedUserFromSession } from './../../utils/passage'
import { FunctionComponent, useEffect } from 'react'
import Router from 'next/router'


export const getServerSideProps = (async ({ req, res }) => {
  const loginProps = await getAuthenticatedUserFromSession(req, res)
  return {
    props: {
      isAuthorized: loginProps?.isAuthorized ?? false,
      userID: loginProps?.userID ?? ''
    }
  }
}) satisfies GetServerSideProps<{
  isAuthorized: boolean
  userID: string
}>


const Login: FunctionComponent<InferGetServerSidePropsType<typeof getServerSideProps>> =
  ({ isAuthorized }) => {
    useEffect(() => {
      if (isAuthorized) {
        Router.push('/')
      }
    })

    return (
      <PassageLogin />
    )
  }

export default Login