import React from 'react'
import cx from 'classnames'
import Toolbar from 'components/Toolbar'
import Illustration from 'assets/svg/real_time_collaboration.svg'
import { MdArrowForward } from 'react-icons/md'
import { Link } from 'react-scroll'

export interface BannerProps {
  readonly darkMode: boolean
  readonly title: React.ReactNode
  readonly subtitle: React.ReactNode
  readonly joinLink: string
  readonly className?: string
}

const Banner: React.FC<BannerProps> = ({
  darkMode,
  title,
  subtitle,
  joinLink,
  className,
}) => {
  return (
    <div
      className={`${cx('py-16 overflow-hidden', className)}${
        darkMode ? ' bg-gray-800' : undefined
      }`}
    >
      <Toolbar
        darkMode={darkMode}
        joinLink={joinLink}
        className="mb-4 container"
      />
      <div className="container py-2">
        <div className="flex flex-wrap -mx-2">
          <div className="px-2 lg:w-1/2 flex flex-col justify-center">
            <h1
              className={`text-5xl font-bold leading-tight max-w-2xl${
                darkMode ? ' text-gray-100' : undefined
              }`}
            >
              {title}
            </h1>
            <p
              className={`text-2xl my-8 max-w-2xl${
                darkMode ? ' text-gray-100' : undefined
              }`}
            >
              {subtitle}
            </p>
            <div>
              <a
                href={joinLink}
                target="__blank"
                className="bg-secondary-500 font-medium px-5 hover:border-secondary-600 transition duration-300 py-4 rounded hover:bg-secondary-600 text-lg pulse-secondary"
              >
                Junte-se a nós
                <MdArrowForward className="inline-block ml-2" />
              </a>
              <Link
                to="manifesto"
                className="border-secondary-500 font-medium px-5 py-4 rounded transition duration-200 hover:bg-secondary-900 text-lg ml-3 text-secondary-500 cursor-pointer"
                smooth
                duration={800}
              >
                Ler&nbsp;manifesto
              </Link>
            </div>
          </div>
          <div className="illustration-container w-1/2 hidden lg:block -ml-48 xl:-ml-16">
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
