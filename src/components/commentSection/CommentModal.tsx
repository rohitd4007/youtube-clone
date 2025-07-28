'use client'

import React, { useEffect, useState } from 'react'

type Comment = {
    _id: string
    user: string
    text: string
    createdAt: string
}

type Props = {
    videoId: string
    onClose: () => void
}

const CommentsModal: React.FC<Props> = ({ videoId, onClose }) => {
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        fetch(`/api/comments/${videoId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [videoId])

    return (
        <div className="fixed inset-0 bg-black z-50 overflow-y-auto p-4">
            <button onClick={onClose} className="text-red-600 mb-4 font-medium">
                Close
            </button>

            <h2 className="text-lg font-semibold mb-3">All Comments</h2>

            <div className="space-y-4">
                {comments.map(comment => (
                    <div key={comment._id} className="border-b pb-2">
                        <p className="text-sm font-medium">{comment.user}</p>
                        <p className="text-sm text-gray-400">{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentsModal