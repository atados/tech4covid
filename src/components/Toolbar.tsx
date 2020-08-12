import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import Logo from 'assets/svg/logo.svg'
import LogoText from 'assets/svg/new_logo.svg'
import { FaCode } from 'react-icons/fa'

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
          <LogoText width={320} height={35}/>
        </a>
      </Link>
      <div className="flex items-center space-x-8 text-white lg:ml-auto text-md pt-6 lg:pt-0">
        <a href={joinLink} target="__blank">
          Junte-se a nós
        </a>
        <a className="topBarLink" href="#projetos"><FaCode/><p>Veja os projetos</p></a>
        {/* <a className="topBarLink" href="#manifesto">Leia o manifesto</a> */}
      </div>
    </div>
  )
}

Toolbar.displayName = 'Toolbar'

export { Toolbar }
export default Toolbar
