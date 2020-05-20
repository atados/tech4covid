import React from 'react'
import ProjectShortCard from 'components/ProjectShortCard'
import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Manifest from 'components/Manifest'
import { FaRocket } from 'react-icons/fa'

interface HomePageProps {
  readonly className?: string
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <Banner />
      <div className="bg-gray-200 pb-6 pt-12">
        <div className="container">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 bg-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-secondary-900">
              <FaRocket />
            </div>
            <h1 className="text-3xl font-bold">
              Veja os projetos que estão rolando
            </h1>
            <p className="text-xl font-light text-gray-600 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              neque dicta! Nam est perferendis earum aliquid odit dicta minima.
              Natus eos animi maiores quisquam d
            </p>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 mb-4">
              <ProjectShortCard />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <ProjectShortCard />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <ProjectShortCard />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <ProjectShortCard />
            </div>
          </div>
        </div>
      </div>
      <Manifest className="max-w-3xl mx-auto px-3 py-16" />
      <Footer />
    </div>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
