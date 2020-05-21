import React from 'react'
import ProjectShortCard from 'components/ProjectShortCard'
import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Manifest from 'components/Manifest'
import { FaRocket } from 'react-icons/fa'
import { GetStaticProps } from 'next'
import { getHome, HomePageData, ProjectData } from 'lib/prismic'
import { RichText } from 'prismic-reactjs'
import { NextSeo } from 'next-seo'

interface HomePageProps {
  readonly page: HomePageData
  readonly projects: ProjectData[]
  readonly className?: string
}

const HomePage: React.FC<HomePageProps> = ({ page, projects }) => {
  return (
    <div>
      <NextSeo title="Tech4Covid" />
      <Banner
        title={<RichText render={page.title} />}
        subtitle={<RichText render={page.subtitle} />}
        joinLink={page.button_link.url}
      />
      <div id="projetos" className="bg-gray-200 pb-6 pt-12">
        <div className="container">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 bg-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-secondary-900">
              <FaRocket />
            </div>
            <h1 className="text-3xl font-bold">
              <RichText render={page.projects_title} />
            </h1>
            <p className="text-xl font-light text-gray-600 max-w-xl mx-auto">
              <RichText render={page.subtitulo_dos_projetos} />
            </p>
          </div>
          <div className="flex flex-wrap -mx-2">
            {projects.map((project) => (
              <div
                key={project._meta.uid}
                className="w-full md:w-1/3 px-2 mb-4"
              >
                <ProjectShortCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Manifest className="max-w-3xl mx-auto px-3 py-16">
        <RichText render={page.manifesto} />
      </Manifest>
      <Footer />
    </div>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
export const getStaticProps: GetStaticProps = async () => {
  const { projects, page } = await getHome({})

  return {
    props: {
      page,
      projects,
    },
    unstable_revalidate: 180,
  }
}

export const getStaticPaths = () => {
  return {
    paths: ['/'],
    fallback: false,
  }
}
