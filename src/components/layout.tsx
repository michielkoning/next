import { ReactNode } from 'react'
import Router from 'next/router'
import { PassageUser } from '@passageidentity/passage-elements/passage-user'
import { CenterWrapper } from './CenterWrapper'
import Header from './Header'

export default function Layout({ children }: { children?: ReactNode }) {
  const signOut = async () => {
    new PassageUser().signOut()
    Router.push('/login')
  }
  return (
    <>
      <Header />
      <header>
        <CenterWrapper>
          <button onClick={signOut}>Sign Out</button>
        </CenterWrapper>
      </header>
      <main>
        <CenterWrapper>{children}</CenterWrapper>
      </main>
    </>
  )
}
