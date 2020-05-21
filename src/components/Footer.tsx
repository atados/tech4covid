import React from 'react'
import cx from 'classnames'
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'
import { MdOpenInNew } from 'react-icons/md'
import Link from 'next/link'

export interface FooterProps {
  readonly className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cx('bg-gray-200 py-12', className)}>
      <div className="container">
        <div className="flex items-center justify-center space-x-6 mb-4">
          <Link href="/[slug]" as="/termos">
            <a className="hover:text-primary-500 hover:underline hover:text-primary-500">
              Termos & Condições
            </a>
          </Link>
          <Link href="/[slug]" as="/privacidade">
            <a className="hover:text-primary-500 hover:underline hover:text-primary-500">
              Política de privacidade
            </a>
          </Link>
          <a
            href="https://atados.com.br"
            className="hover:text-primary-500 hover:underline hover:text-primary-500"
            target="__blank"
          >
            Atados <MdOpenInNew className="inline-block" />
          </a>
        </div>
        <div className="flex items-center justify-center space-x-5 text-3xl">
          <a
            target="__blank"
            href="https://github.com/atados/tech4covid"
            className="text-gray-600 hover:text-primary-500"
          >
            <FaGithub />
          </a>
          <a
            target="__blank"
            href="https://instagram.com/atados"
            className="text-gray-600 hover:text-primary-500"
          >
            <FaInstagram />
          </a>
          <a
            target="__blank"
            href="https://www.facebook.com/atadosjuntandogenteboa/"
            className="text-gray-600 hover:text-primary-500"
          >
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
