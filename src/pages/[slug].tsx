import React from 'react'
import Footer from 'components/Footer'
import { GetStaticProps } from 'next'
import { TextPageData, getPage, getPaths } from 'lib/prismic'
import { RichText } from 'prismic-reactjs'
import Toolbar from 'components/Toolbar'
import { NextSeo } from 'next-seo'

interface TextPageProps {
  readonly page: TextPageData
  readonly joinLink: string
  readonly className?: string
}

const TextPage: React.FC<TextPageProps> = ({ joinLink, page }) => {
  if (!page) {
    return <>...</>
  }

  return (
    <div>
      <NextSeo title={`${page.title[0].text} | Tech4Covid`} />
      <div className="bg-white pt-16 pb-10">
        <Toolbar joinLink={joinLink} className="mb-4 container" />
      </div>
      <main className="container pb-12 max-w-3xl">
        <h1 className="text-5xl lg:text-6xl font-bold text-secondary-600 mb-5">
          <RichText render={page.title} />
        </h1>
        <article className="text-xl prose lg:prose-md">
          <RichText render={page.content} />
        </article>
      </main>
      <Footer />
    </div>
  )
}

TextPage.displayName = 'TextPage'

export default TextPage
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page, joinLink } = await getPage(`/${params.slug}`)

  return {
    props: {
      page,
      joinLink,
    },
    unstable_revalidate: 50,
  }
}

export const getStaticPaths = async () => {
  const paths = await getPaths()
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
