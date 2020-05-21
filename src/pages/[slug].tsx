import React from 'react'
import Footer from 'components/Footer'
import { GetStaticProps } from 'next'
import { TextPageData, getPage } from 'lib/prismic'
import { RichText } from 'prismic-reactjs'
import Toolbar from 'components/Toolbar'
import { NextSeo } from 'next-seo'

interface TextPageProps {
  readonly page: TextPageData
  readonly joinLink: string
  readonly className?: string
}

const TextPage: React.FC<TextPageProps> = ({ joinLink, page }) => {
  return (
    <div>
      <NextSeo title={`${page.title[0].text} | Tech4Covid`} />
      <div className="bg-primary-500 py-16">
        <Toolbar joinLink={joinLink} className="mb-4 container" />
      </div>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-5">
          <RichText render={page.title} />
        </h1>
        <div className="text-xl">
          <RichText render={page.content} />
        </div>
      </div>
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
    unstable_revalidate: 180,
  }
}

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          slug: 'privacidade',
        },
      },
    ],
    fallback: false,
  }
}
