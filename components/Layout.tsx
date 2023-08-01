import Head from 'next/head'

export default function Layout({children, home}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <header>
        {home ? (
          <>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}