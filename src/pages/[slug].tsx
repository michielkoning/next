import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <p>Post: {router.query.slug}</p>
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