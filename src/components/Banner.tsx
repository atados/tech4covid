import React from 'react'
import cx from 'classnames'
import Illustration from 'assets/svg/real_time_collaboration.svg'
import { MdArrowForward } from 'react-icons/md'
import Toolbar from 'components/Toolbar'

export interface BannerProps {
  readonly className?: string
}

const Banner: React.FC<BannerProps> = ({ className }) => {
  return (
    <div
      className={cx('banner bg-primary-500 py-16 overflow-hidden', className)}
    >
      <Toolbar className="mb-4 container" />
      <div className="container py-2">
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 lg:w-1/2">
            <h1 className="text-6xl text-white font-bold leading-tight max-w-2xl">
              A comunidade tecnológica combate a Covid-19.
            </h1>
            <p className="text-2xl text-secondary-500 mb-6 max-w-2xl">
              Somos um movimento de +5000 pessoas: engenheiros, cientistas,
              designers, marketeers, profissionais de saúde, entre muitas outras
              especialidades.
            </p>
            <button className="bg-secondary-500 font-medium px-4 hover:border-secondary-600 py-3 rounded hover:bg-secondary-600 text-lg pulse-secondary">
              Junte-se a nós
              <MdArrowForward className="inline-block ml-2" />
            </button>
            <button className="border-secondary-500 font-medium px-4 py-3 rounded hover:bg-primary-700 text-lg ml-3 text-secondary-500">
              Ler manifesto
            </button>
          </div>
          <div className="w-1/2 hidden lg:block">
            <Illustration height={400} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .banner {
          background-image: url(/assets/bg-pattern-1.svg);
        }
      `}</style>
    </div>
  )
}

Banner.displayName = 'Banner'

export { Banner }
export default Banner
