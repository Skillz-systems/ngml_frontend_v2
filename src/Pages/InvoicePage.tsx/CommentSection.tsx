import React, { useState } from 'react';

interface Comment {
  author: string;
  comment: string;
}

export default function CommentSection({
  commentsData,
}: {
  commentsData: Comment[];
}) {
  const [comments, setComments] = useState<Comment[]>(commentsData);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        comment: newComment.trim(),
        author: `User${comments.length + 1}`,
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="w-full lg:w-[30%] max-w-md pb-4 mx-auto mt-4 overflow-y-auto overflow-hidden bg-white rounded-lg shadow-md md:max-w-2xl max-h-[700px] tiny-scrollbar">
      <>
        <p className="p-4 text-lg font-semibold text-left bg-gray-100 rounded-t-lg">
          Comments
        </p>
        <div className="px-4 mt-4 mb-6 space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="px-4 py-3 bg-gray-100 rounded-lg">
              <p className="text-xs text-gray-700">{comment.comment}</p>
              <p className="mt-1 text-xs text-gray-500">- {comment.author}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="px-4 mt-4">
          <textarea
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none"
            rows={4}
            placeholder="Enter your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 mt-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send
          </button>
        </form>
      </>
    </div>
  );
}
