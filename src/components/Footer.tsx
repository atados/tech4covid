import React from 'react'
import cx from 'classnames'
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'
import { MdOpenInNew } from 'react-icons/md'

export interface FooterProps {
  readonly className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cx('bg-gray-200 py-12', className)}>
      <div className="container">
        <div className="flex items-center justify-center space-x-6 mb-4">
          <a
            href=""
            className="hover:text-primary-500 hover:underline hover:text-primary-500"
          >
            Termos & Condições
          </a>
          <a
            href=""
            className="hover:text-primary-500 hover:underline hover:text-primary-500"
          >
            Política de privacidade
          </a>
          <a
            href="https://atados.com.br"
            className="hover:text-primary-500 hover:underline hover:text-primary-500"
            target="__blank"
          >
            Atados <MdOpenInNew className="inline-block" />
          </a>
        </div>
        <div className="flex items-center justify-center space-x-5 text-3xl">
          <a href="" className="text-gray-600 hover:text-primary-500">
            <FaGithub />
          </a>
          <a href="" className="text-gray-600 hover:text-primary-500">
            <FaInstagram />
          </a>
          <a href="" className="text-gray-600 hover:text-primary-500">
            <FaFacebook />
          </a>
        </div>
        <hr className="my-6 border-gray-300" />
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Tech4Covid19 · A comunidade tecnológica
          combate a Covid19.
        </p>
      </div>
    </div>
  )
}

Footer.displayName = 'Footer'

export { Footer }
export default Footer
