import React from 'react'
import cx from 'classnames'
import Logo from 'assets/svg/logo.svg'
import LogoText from 'assets/svg/logo-text-2.svg'

export interface ToolbarProps {
  readonly className?: string
}

const Toolbar: React.FC<ToolbarProps> = ({ className }) => {
  return (
    <div className={cx('flex flex-col lg:flex-row', className)}>
      <div className="flex items-center">
        <Logo height={36} width={60} className="mr-4" />
        <LogoText height={28} width={361} />
      </div>
      <div className="flex items-center space-x-8 text-white lg:ml-auto text-md pt-6 lg:pt-0">
        <a href="#projetos">Veja os projetos</a>
        <a href="https://tech4covid.now.sh/#projects" target="__blank">
          Junte-se a nós
        </a>
        <a href="#manifesto">Leia o manifesto</a>
      </div>
    </div>
  )
}

Toolbar.displayName = 'Toolbar'

export { Toolbar }
export default Toolbar
