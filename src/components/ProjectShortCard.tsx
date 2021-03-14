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
      className={`${cx(
        'h-64 rounded-lg border-4 hover:border-secondary-500 p-5 box-content lg:box-border transition duration-100 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-secondary-500',
        className,
      )}`}
    >
      <h4 className="font-medium text-xl cursor-default dark:text-gray-100">
        <RichText render={project.name} />
      </h4>
      <p className="text-gray-600 dark:text-gray-500">
        <RichText render={project.description} />
      </p>
    </div>
  )
}

ProjectShortCard.displayName = 'ProjectShortCard'

export { ProjectShortCard }
export default ProjectShortCard
