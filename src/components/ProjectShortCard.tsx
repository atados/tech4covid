import React from 'react'
import cx from 'classnames'

export interface ProjectShortCardProps {
  readonly className?: string
}

const ProjectShortCard: React.FC<ProjectShortCardProps> = ({ className }) => {
  return (
    <div
      className={cx(
        'bg-white h-64 rounded-lg border-4 border-gray-300 hover:border-secondary-500 p-5',
        className,
      )}
    >
      <h4 className="font-medium text-xl">Entrega de sabão</h4>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
        eveniet, sed similique, odio, quasi perspiciatis inventore nisi quos ex
        itaque dolores totam repudiandae corrupti fugit cum delectus aspernatur?
        Fuga.
      </p>
    </div>
  )
}

ProjectShortCard.displayName = 'ProjectShortCard'

export { ProjectShortCard }
export default ProjectShortCard
