import Head from 'next/head';
import styles from './styles.module.scss'

export function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main>
        <div>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna </strong>
          </a>
        </div>
      </main>
    </>
  );
}