import React, { useState, useEffect } from 'react'
import ProjectShortCard from 'components/ProjectShortCard'
import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Manifest from 'components/Manifest'
import { FaRocket, FaDatabase, FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { GetStaticProps } from 'next'
import { getHome, HomePageData, ProjectData } from 'lib/prismic'
import { RichText } from 'prismic-reactjs'
import { NextSeo } from 'next-seo'

import Map from 'assets/svg/brazil.svg'
import api from 'services/api'

interface HomePageProps {
  readonly page: HomePageData
  readonly projects: ProjectData[]
  readonly className?: string
}

interface dataResponse {
  Country: string
  CountryCode: string
  Province: string
  City: string
  CityCode: string
  Lat: string
  Lon: string
  Confirmed: number
  Deaths: number
  Recovered: number
  Active: number
  Date: string
}//formato da resposta da API do Covid para referência e uso

const HomePage: React.FC<HomePageProps> = ({ page, projects }) => {
  const [data, setData] = useState({
    Confirmed: '--',
    Deaths: '--',
    Recovered: '--',
    Active: '--',
    Date: '--',
  })
  const [prevData, setPrevData] = useState({
    Confirmed: '--',
    Deaths: '--',
    Recovered: '--',
    Active: '--',
    Date: '--',
  })

  const getData = () => {
    api
      .get('/country/brazil')
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          console.log(response);
          setData(data[data.length - 1]);
          setPrevData(data[data.length - 2]);
        }
      })
      .catch((reason) => console.log(reason))
  }

  useEffect(getData)

  return (
    <div>
      <NextSeo title="Tech4Covid" />
      <Banner
        title={<RichText render={page.title} />}
        subtitle={<RichText render={page.subtitle} />}
        joinLink={page.button_link.url}
      />
      <div id="hub" className="bg-gray-200 pb-16 pt-12">
        <div className="container">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 bg-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-secondary-900">
              <FaDatabase />
            </div>
            <h1 className="text-3xl font-bold">
              <h1>Monitor de dados ao vivo</h1>
            </h1>
            <p className="text-xl font-light text-gray-600 max-w-xl mx-auto">
              <RichText render={page.subtitulo_dos_projetos} />
            </p>
          </div>
          <div className="flex -mx-2 bg-primary-700 p-16 rounded-lg shadow-md justify-evenly">
            <Map className="w-64 h-64" />
            <div className=" grid grid-cols-2 grid-rows-2 col-gap-32 row-gap-8 ml-16">
              <div className="flex flex-col justify-center align-center">
                <h1 className="text-secondary-500 text-center text-4xl font-extrabold leading-snug">{data.Confirmed}</h1>
                <h2 className="text-primary-100 text-center text-2xl font-extrabold leading-none">Casos confirmados</h2>
              </div>
              <div className="flex flex-col justify-center align-center">
                <h1 className="text-secondary-500 text-center text-4xl font-extrabold leading-snug">{data.Active}</h1>
                <h2 className="text-primary-100 text-center text-2xl font-extrabold leading-none">Casos ativos</h2>
              </div>
              <div className="flex flex-col justify-center align-center">
                <h1 className="text-secondary-500 text-center text-4xl font-extrabold leading-snug">{data.Recovered}</h1>
                <h2 className="text-primary-100 text-center text-2xl font-extrabold leading-none">Recuperações</h2>
              </div>
              <div className="flex flex-col justify-center align-center">
                <h1 className="text-secondary-500 text-center text-4xl font-extrabold leading-snug">{data.Deaths}</h1>
                <h2 className="text-primary-100 text-center text-2xl font-extrabold leading-none">Fatalidades</h2>
              </div>
            </div>
          </div>
          <p className="text-center text-primary-300 mt-3">Última atualização: {`${data.Date.slice(8, 10)}/${data.Date.slice(5, 7)}/${data.Date.slice(0, 4)}`}</p>
        </div>
      </div>
      <hr/>
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
      <Manifest
        title={<RichText render={page.manifesto_title} />}
        className="max-w-3xl mx-auto px-3 py-16"
      >
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
    unstable_revalidate: 50,
  }
}
