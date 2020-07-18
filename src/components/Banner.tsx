import React from 'react'
import cx from 'classnames'
import Toolbar from 'components/Toolbar'
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
      <div className="container">
        <div className="flex flex-wrap content-center items-center justify-between">
          <div className="flex-1">
            <h1 className="text-5xl font-bold leading-tight max-w-2xl">
              {title}
            </h1>
            <p className="text-2xl mb-8 max-w-2xl">
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
          <div className="flex-1">
            <img src="cover-image.png" alt="Ilustração estilizada do corona vírus" class="object-contain object-center" />
          </div>
        </div>
      </div>
    </div>
  )
}

Banner.displayName = 'Banner'

export { Banner }
export default Banner
