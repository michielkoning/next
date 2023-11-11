import Link from 'next/link'
import styled from 'styled-components';

export default function Home() {

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
  return (
    <div>
      <Title>test</Title>

      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
      </ul>
    </div>
  )
}