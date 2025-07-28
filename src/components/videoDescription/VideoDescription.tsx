'use client'

import React, { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

type Props = {
  title: string
  description: string
}

const VideoDescription: React.FC<Props> = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleShowMore = () => {
    if (isMobile) {
      setShowModal(true)
    } else {
      setExpanded(prev => !prev)
    }
  }

  return (
    <div className="mt-4" >
      <h1 className="text-xl font-semibold mb-2" > {title} </h1>

      < p className={`text-gray-600 text-sm whitespace-pre-wrap transition-all duration-200 ${expanded ? '' : 'line-clamp-3'}`
      }>
        {description}
      </p>
    </div>
  )
}

export default VideoDescription
