import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>test</p>

      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/hello-world">Blog Post</Link>
        </li>
      </ul>
    </div>
  )
}
