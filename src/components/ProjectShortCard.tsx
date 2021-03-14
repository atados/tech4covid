import React from 'react'
import cx from 'classnames'
import { RichText } from 'prismic-reactjs'
import { ProjectData } from 'lib/prismic'

export interface ProjectShortCardProps {
  readonly darkMode: boolean
  readonly project: ProjectData
  readonly className?: string
}

const ProjectShortCard: React.FC<ProjectShortCardProps> = ({
  darkMode,
  className,
  project,
}) => {
  return (
    <div
      className={`${cx(
        'h-64 rounded-lg border-4 hover:border-secondary-500 p-5 box-content lg:box-border transition duration-100',
        className,
      )}${
        darkMode ? ' bg-gray-800 border-gray-700' : ' bg-white border-gray-300'
      }`}
    >
      <h4
        className={`font-medium text-xl cursor-default${
          darkMode ? ' text-gray-100' : undefined
        }`}
      >
        <RichText render={project.name} />
      </h4>
      <p className={darkMode ? 'text-gray-500' : 'text-gray-600'}>
        <RichText render={project.description} />
      </p>
    </div>
  )
}

ProjectShortCard.displayName = 'ProjectShortCard'

export { ProjectShortCard }
export default ProjectShortCard
