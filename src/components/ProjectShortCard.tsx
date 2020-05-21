import React from 'react'
import cx from 'classnames'
import { RichText } from 'prismic-reactjs'
import { ProjectData } from 'lib/prismic'

export interface ProjectShortCardProps {
  readonly project: ProjectData
  readonly className?: string
}

const ProjectShortCard: React.FC<ProjectShortCardProps> = ({
  className,
  project,
}) => {
  return (
    <div
      className={cx(
        'bg-white h-64 rounded-lg border-4 border-gray-300 hover:border-secondary-500 p-5',
        className,
      )}
    >
      <h4 className="font-medium text-xl">
        <RichText render={project.name} />
      </h4>
      <p className="text-gray-600">
        <RichText render={project.description} />
      </p>
    </div>
  )
}

ProjectShortCard.displayName = 'ProjectShortCard'

export { ProjectShortCard }
export default ProjectShortCard
