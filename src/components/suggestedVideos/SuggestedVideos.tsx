'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Video = {
    _id: string
    title: string
    thumbnailUrl: string
}


type Props = {
    currentVideoId: string
}

const SuggestedVideos: React.FC<Props> = ({ currentVideoId }) => {
    const [videos, setVideos] = useState<Video[]>([])

    useEffect(() => {
        fetch(`/api/videos/${currentVideoId}/suggested`)
            .then(res => res.json())
            .then(data => setVideos(data))
    }, [currentVideoId])

    return (
        <div className="mt-6">
            <h3 className="text-md font-semibold mb-3">Suggested Videos</h3>

            {/* Desktop: Vertical list */}
            <div className="flex flex-col gap-4">
                {videos.map(video => (
                    <Link key={video._id} href={`/video/${video._id}`} className="flex gap-3 p-2 rounded">
                        <div className="w-28 h-16 relative flex-shrink-0">
                            <Image
                                src={video.thumbnailUrl}
                                alt={video.title}
                                fill
                                className="object-cover object-top rounded"
                            />
                        </div>
                        <p className="text-sm font-medium line-clamp-2">{video.title}</p>
                    </Link>
                ))}
            </div>

            {/* Mobile: Horizontal scroll */}
            {/* <div className="lg:hidden flex overflow-x-auto gap-4">
                {videos.map(video => (
                    <Link
                        key={video._id}
                        href={`/video/${video._id}`}
                        className="min-w-[200px] flex-shrink-0"
                    >
                        <div className="w-full h-32 relative">
                            <Image
                                src={video.thumbnailUrl}
                                alt={video.title}
                                fill
                                className="object-cover object-top rounded"
                            />
                        </div>
                        <p className="text-sm font-medium mt-1 line-clamp-2">{video.title}</p>
                    </Link>
                ))}
            </div> */}
        </div>
    )
}

export default SuggestedVideos
