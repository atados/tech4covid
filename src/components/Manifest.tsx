import React from 'react'
import AtadosLogo from 'assets/svg/atados-logo.svg'

export interface ManifestProps {
  readonly className?: string
}

const Manifest: React.FC<ManifestProps> = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Manifesto Tech 4 CONVID 19 BR
      </h1>
      <p className="mb-6 text-xl leading-relaxed font-serif">
        Nunca o mundo se sentiu tão vulnerável e incerto.  A única certeza que
        temos é que a ajuda é sempre necessária.  Desta forma, inspirados pelos
        nossos irmãos portugueses, que iniciaram o movimento #tech4COVID19,
        nasce o #tech4COVID19BR! Uma comunidade dedicada a trazer soluções para
        os diversos desafios que Brasil está enfrentando com a pandemia do
        Covid-19.
      </p>
      <p className="text-xl leading-relaxed font-serif">
        Somos um grupo aberto formado por pessoas de diferentes áreas de
        conhecimento e atuação, trabalhando para somar forças e esforços, mesmo
        que à distância, a todos aqueles que se encontram na linha de frente do
        combate ao novo coronavírus: de profissionais da área da saúde, à garis
        e entregadores.
      </p>
      <p className="text-gray-600 text-2xl font-light mt-5">
        <AtadosLogo
          width={32}
          height={32}
          className="text-gray-600 inline-block mr-1"
        />{' '}
        Atados
      </p>
    </div>
  )
}

Manifest.displayName = 'Manifest'

export { Manifest }
export default Manifest
