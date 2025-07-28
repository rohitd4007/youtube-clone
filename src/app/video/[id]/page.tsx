'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import VideoPlayer from '@/components/videoPlayer/VideoPlayer'
import VideoDescription from '@/components/videoDescription/VideoDescription'
import CommentsPreview from '@/components/commentSection/CommentPreview'
import SuggestedVideos from '@/components/suggestedVideos/SuggestedVideos'

export default function VideoPage() {
    const { id } = useParams()
    const [videoData, setVideoData] = useState<any>(null)

    useEffect(() => {
        // if (id) {
        //     fetch(`/api/videos/${id}`)
        //         .then(res => res.json())
        //         .then(data => setVideoData(data))
        // }


        setVideoData({
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            title: 'Sample Video',
            description: 'This is a sample description for a video.',
            captions: [
                {
                    label: 'English',
                    src: '/captions_en.vtt',
                    lang: 'en',
                },
            ],
        })

    }, [id])

    if (!videoData) return <div className="p-4" > Loading...</div>

    return (
        <div className="flex flex-col lg:flex-row p-4 gap-4" >
            {/* Main Content */}
            < div className="flex-1" >
                <VideoPlayer video={videoData} />
                < VideoDescription title={videoData.title} description={videoData.description} />
                <CommentsPreview videoId={id as string} />
            </div>

            {/* Suggestions (only on desktop) */}
            <div >
                <SuggestedVideos currentVideoId={id as string} />
            </div>
        </div>
    )
}
