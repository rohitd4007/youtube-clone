'use client'

import React, { useEffect, useState } from 'react'
import CommentsModal from './CommentModal'

type Comment = {
    _id: string
    user: string
    text: string
    createdAt: string
}

type Props = {
    videoId: string
}

const CommentsPreview: React.FC<Props> = ({ videoId }) => {
    const [comments, setComments] = useState<Comment[]>([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        fetch(`/api/comments/${videoId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [videoId])

    const handleViewAll = () => setShowModal(true)

    return (
        <div className="mt-6">
            <h3 className="text-md font-semibold mb-2">Comments</h3>

            {comments.length > 0 ? (
                <div className="bg-gray-900 p-3 rounded" onClick={handleViewAll}>
                    <p className="text-sm font-medium">{comments[0].user}</p>
                    <p className="text-sm text-gray-700">{comments[0].text}</p>
                </div>
            ) : (
                <p className="text-sm text-gray-500">No comments yet</p>
            )}

            <div className="mt-2 flex justify-end">
                <button
                    className="mt-2 text-black-600 text-sm hover:underline"
                    onClick={handleViewAll}
                >
                    View all comments
                </button>
            </div>

            {showModal && (
                <CommentsModal videoId={videoId} onClose={() => setShowModal(false)} />
            )}
        </div>
    )
}

export default CommentsPreview
