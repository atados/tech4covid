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
import { Link } from 'react-scroll'

import Map from 'assets/svg/brazil.svg'
import api from 'services/api'
import Monitor from 'components/Monitor'

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
    Date: "2020-00-00T00:00:00Z",
  })
  const [slope, setSlope] = useState({
    Confirmed: false,
    Deaths: false,
    Recovered: false,
    Active: true,
  })

  const getData = () => {
    api
      .get('/country/brazil')
      .then((response) => {
        if (response.status === 200) {
          const rdata = response.data;
          console.log(response);
          setData(rdata[rdata.length - 1]);
          let slopes = [{Confirmed: 0, Deaths: 0, Recovered: 0, Active: 0,}, {Confirmed: 0, Deaths: 0, Recovered: 0, Active: 0,}];
          const keys = Object.keys(slope);
          const currSlope = slope;
          for (let i = 0; i <= 1; i++) {
            const prevObj = rdata[rdata.length - (3-i)];
            const currObj = rdata[rdata.length - (2-i)];
            keys.forEach(key => {
              slopes[i][key] = currObj[key] - prevObj[key];
            })
          }
          keys.forEach(key => {
            currSlope[key] = (slopes[1][key] > slopes[0][key]);
          })
          setSlope(currSlope);
          console.log(currSlope);
        }
      })
      .catch((reason) => console.log(reason));
  }

  useEffect(getData);

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
              <h1>Monitor de dados</h1>
            </h1>
            <p className="text-xl font-light text-gray-600 max-w-xl mx-auto">
              <RichText render={page.subtitulo_dos_projetos} />
            </p>
          </div>
          <Monitor
            Active={String(data.Active)}
            Confirmed={String(data.Confirmed)}
            Recovered={String(data.Recovered)}
            Deaths={String(data.Deaths)}
            Date={data.Date}
            ProjectCount={projects.length}
            Slope={slope}
          />
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
          <div className="flex flex-wrap -mx-2 justify-center">
            {projects.map((project) => (
              <div
                key={project._meta.uid}
                className="w-full md:w-1/3 px-2 mb-4 overflow-hidden"
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
