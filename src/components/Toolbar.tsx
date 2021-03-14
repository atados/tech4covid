import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import Logo from 'assets/svg/logo.svg'
import LogoText from 'assets/svg/new_logo.svg'
import DarkLogo from 'assets/svg/logo_dark.svg'
import DarkLogoText from 'assets/svg/new_logo_dark.svg'
import { FaCode, FaUserFriends, FaBookOpen } from 'react-icons/fa'
import { Link as SmoothScroll } from 'react-scroll'

export interface ToolbarProps {
  readonly darkMode: boolean
  readonly joinLink: string
  readonly className?: string
}

const Toolbar: React.FC<ToolbarProps> = ({ joinLink, className, darkMode }) => {
  return (
    <div className={cx('flex flex-col lg:flex-row', className)}>
      <Link href="/">
        <a className="flex items-center hover:opacity-75 transition duration-300 ease-out">
          {darkMode ? (
            <DarkLogo height={36} width={60} className="mr-4" />
          ) : (
            <Logo height={36} width={60} className="mr-4" />
          )}
          {darkMode ? (
            <DarkLogoText width={320} height={35} />
          ) : (
            <LogoText width={320} height={35} />
          )}
        </a>
      </Link>
      <div
        className={`flex items-center space-x-8 lg:ml-auto text-xl pt-6 lg:pt-0${
          darkMode ? ' text-gray-400' : ' text-gray-800'
        }`}
      >
        <a
          href={joinLink}
          target="__blank"
          className="hover:text-secondary-800 transition duration-300 nudge"
        >
          <FaUserFriends className="inline-block mr-2" />
          Junte-se a nós
        </a>
        <SmoothScroll
          to="projetos"
          className="hover:text-secondary-800 transition duration-300 nudge cursor-pointer"
          smooth
          duration={500}
        >
          <FaCode className="inline-block mr-2" />
          Veja os projetos
        </SmoothScroll>
        <SmoothScroll
          className="hover:text-secondary-800 transition duration-300 nudge cursor-pointer"
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
