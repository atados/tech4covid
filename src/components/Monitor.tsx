import React from 'react'
import Map from '../assets/svg/brazil.svg'
import { Link } from 'react-scroll'
import { FaCaretDown, FaCaretUp, FaPlay } from 'react-icons/fa'

interface MonitorProps {
  Confirmed: string
  Active: string
  Recovered: string
  Deaths: string
  Date: string
  ProjectCount: number
  Slope: {
    Confirmed: boolean
    Active: boolean
    Recovered: boolean
    Deaths: boolean
  }
}

const Monitor: React.FC<MonitorProps> = ({
  Confirmed,
  Active,
  Recovered,
  Deaths,
  Date,
  ProjectCount,
  Slope,
}) => {
  return (
    <div>
      <div className="flex flex-col mx-16 md:mx-0 md:p-8 rounded-lg justify-evenly border-4 border-solid md:flex-row py-8 bg-white border-gray-00 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <Map className="w-0 h-0 absolute lg:w-64 lg:h-64 invisible lg:visible xl:visible ping avoid-global" />
          <Map className="w-0 h-0 lg:w-64 lg:h-64 invisible lg:visible xl:visible avoid-global" />
        </div>
        <div className="dataContainer flex flex-col md:grid grid-cols-2 grid-rows-2 col-gap-8 row-gap-8 lg:mx-0 md:mx-0 md:ml-4 lg:ml-0 sm:mx-0">
          <div className="flex flex-col justify-center align-center cursor-default">
            <h1 className="text-secondary-500 text-center text-4xl font-extrabold leading-snug">
              {Confirmed}
            </h1>
            <span className="flex flex-row items-center justify-center">
              <h2 className="text-center text-2xl font-extrabold leading-none text-black dark:text-gray-100">
                Casos confirmados
              </h2>
              {Active !== '--' &&
                (Slope.Confirmed ? (
                  <FaCaretUp className="inline-block text-red-600 bounce-up" />
                ) : (
                  <FaCaretDown className="inline-block text-green-500 bounce-down" />
                ))}
              <span className="pop-up">
                <FaPlay />
                {Slope.Confirmed
                  ? 'Crescimento acelerado'
                  : 'Crescimento desacelerado'}
              </span>
            </span>
          </div>
          <div className="flex flex-col justify-center align-center cursor-default">
            <h1 className="text-secondary-500 text-center text-4xl font-extrabold leading-snug">
              {Active}
            </h1>
            <span className="flex flex-row items-center justify-center">
              <h2 className="text-center text-2xl font-extrabold leading-none text-black dark:text-gray-100">
                Casos ativos
              </h2>
              {Active !== '--' &&
                (Slope.Active ? (
                  <FaCaretUp className="inline-block text-green-500 bounce-up" />
                ) : (
                  <FaCaretDown className="inline-block text-red-600 bounce-down" />
                ))}
              <span className="pop-up">
                <FaPlay />
                {Slope.Active
                  ? 'Crescimento acelerado'
                  : 'Crescimento desacelerado'}
              </span>
            </span>
          </div>
          <div className="flex flex-col justify-center align-center cursor-default">
            <h1 className="text-secondary-500 text-center text-4xl font-extrabold leading-snug">
              {Recovered}
            </h1>
            <span className="flex flex-row items-center justify-center">
              <h2 className="text-center text-2xl font-extrabold leading-none text-black dark:text-gray-100">
                Recuperações
              </h2>
              {Active !== '--' &&
                (Slope.Recovered ? (
                  <FaCaretUp className="inline-block text-green-600 bounce-up" />
                ) : (
                  <FaCaretDown className="inline-block text-red-500 bounce-down" />
                ))}
              <span className="pop-up">
                <FaPlay />
                {Slope.Recovered
                  ? 'Crescimento acelerado'
                  : 'Crescimento desacelerado'}
              </span>
            </span>
          </div>
          <div className="flex flex-col justify-center align-center cursor-default">
            <h1 className="text-secondary-500 text-center text-4xl font-extrabold leading-snug">
              {Deaths}
            </h1>
            <span className="flex flex-row items-center justify-center">
              <h2 className="text-center text-2xl font-extrabold leading-none text-black dark:text-gray-100">
                Óbitos
              </h2>
              {Active !== '--' &&
                (Slope.Deaths ? (
                  <FaCaretUp className="inline-block text-red-600 bounce-up" />
                ) : (
                  <FaCaretDown className="inline-block text-green-500 bounce-down" />
                ))}
              <span className="pop-up">
                <FaPlay />
                {Slope.Deaths
                  ? 'Crescimento acelerado'
                  : 'Crescimento desacelerado'}
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center align-center cursor-pointer nudge">
          <Link
            className="projectContainer"
            to="projetos"
            smooth
            duration={800}
          >
            <h1 className="text-secondary-500 text-center text-xxl font-extrabold leading-snug shine-text">
              {ProjectCount}
            </h1>
            <h2 className="text-center text-4xl font-extrabold leading-none text-black dark:text-gray-100">
              Projetos
              <br />
              Tech4Covid
            </h2>
          </Link>
        </div>
      </div>
      <p className="text-center text-primary-300 mt-3 cursor-default">
        {Active !== '--' &&
          `Última atualização dos dados: ${Date.slice(8, 10)}/${Date.slice(
            5,
            7,
          )}/${Date.slice(0, 4)} | `}
        Status: {Active !== '--' ? 'Online' : 'Offline'}
      </p>
    </div>
  )
}

export default Monitor
