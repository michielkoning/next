import { useRouter } from 'next/router'
import Link from 'next/link'
import * as Styled from './index.styled'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <Styled.Title>Post: {router.query.slug}</Styled.Title>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog Post</Link>
        </li>
      </ul>
    </div>
  )
}