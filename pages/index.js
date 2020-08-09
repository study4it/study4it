import React from 'react'
import Head from 'next/head'

export async function getStaticProps() {
  return {
    props: {
      something: ['one', 'two', 'four'],
    },
  }
}

export default function IndexPage({ something }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>List of something</h1>

      <section>
        {something.map((element, index) => (
          <div key={index}>something - {element}</div>
        ))}
      </section>
    </main>
  )
}
