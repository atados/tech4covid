import React from 'react'
import cx from 'classnames'
import Toolbar from 'components/Toolbar'
import Illustration from 'assets/svg/real_time_collaboration.svg'
import { MdArrowForward } from 'react-icons/md'

export interface BannerProps {
  readonly title: React.ReactNode
  readonly subtitle: React.ReactNode
  readonly joinLink: string
  readonly className?: string
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  joinLink,
  className,
}) => {
  return (
    <div
      className={cx('py-16 overflow-hidden', className)}
    >
      <Toolbar joinLink={joinLink} className="mb-4 container" />
      <div className="container py-2">
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 lg:w-1/2">
            <h1 className="text-6xl text-white font-bold leading-tight max-w-2xl">
              {title}
            </h1>
            <p className="text-2xl text-secondary-500 mb-8 max-w-2xl">
              {subtitle}
            </p>
            <div>
              <a
                href={joinLink}
                target="__blank"
                className="bg-secondary-500 font-medium px-5 hover:border-secondary-600 py-4 rounded hover:bg-secondary-600 text-lg pulse-secondary"
              >
                Junte-se a nós
                <MdArrowForward className="inline-block ml-2" />
              </a>
              <a
                href="#manifesto"
                className="border-secondary-500 font-medium px-5 py-4 rounded hover:bg-primary-700 text-lg ml-3 text-secondary-500"
              >
                Ler manifesto
              </a>
            </div>
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
