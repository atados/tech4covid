import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import Logo from 'assets/svg/logo.svg'
import LogoText from 'assets/svg/new_logo.svg'
import { FaCode, FaUserFriends, FaBookOpen } from 'react-icons/fa'
import { Link as SmoothScroll } from 'react-scroll'

export interface ToolbarProps {
  readonly joinLink: string
  readonly className?: string
}

const Toolbar: React.FC<ToolbarProps> = ({ joinLink, className }) => {
  return (
    <div className={cx('flex flex-col lg:flex-row', className)}>
      <Link href="/">
        <a className="flex items-center">
          <Logo height={36} width={60} className="mr-4" />
          <LogoText width={320} height={35} />
        </a>
      </Link>
      <div className="flex items-center space-x-8 text-gray-800 lg:ml-auto text-xl pt-6 lg:pt-0">
        <a
          href={joinLink}
          target="__blank"
          className="hover:underline hover:text-secondary-800 hover:bg-secondary-200"
        >
          <FaUserFriends className="inline-block mr-2" />
          Junte-se a nós
        </a>
        <SmoothScroll
          to="projetos"
          className="hover:underline hover:text-secondary-800 hover:bg-secondary-200 cursor-pointer"
          smooth
          duration={500}
        >
          <FaCode className="inline-block mr-2" />
          Veja os projetos
        </SmoothScroll>
        <SmoothScroll
          className="hover:underline hover:text-secondary-800 hover:bg-secondary-200 cursor-pointer"
          to="manifesto"
          smooth
          duration={800}
        >
          <FaBookOpen className="inline-block mr-2" />
          Leia o manifesto
        </SmoothScroll>
      </div>
    </div>
  )
}

Toolbar.displayName = 'Toolbar'

export { Toolbar }
export default Toolbar
