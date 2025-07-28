'use client'

import React from 'react'

type Props = {
    video: {
        videoUrl: string
        captions?: { label: string; src: string; lang: string }[]
        title: string
    }
}

const VideoPlayer: React.FC<Props> = ({ video }) => {
    return (
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow" >
            <video controls className="w-full h-full" >
                <source src={video.videoUrl} type="video/mp4" />
                {
                    video.captions?.map((caption, index) => (
                        <track
                            key={index}
                            label={caption.label}
                            kind="subtitles"
                            srcLang={caption.lang}
                            src={caption.src}
                            default={index === 0
                            }
                        />
                    ))}
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default VideoPlayer
