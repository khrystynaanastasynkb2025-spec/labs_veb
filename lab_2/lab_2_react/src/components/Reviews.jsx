import React, { useState, useEffect } from 'react';

function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Запит до JSONPlaceholder для вашого 1-го варіанта
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(data => {
                setComments(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Помилка завантаження відгуків:', error);
                setLoading(false);
            });
    }, []); // Порожній масив означає виконання лише один раз при монтуванні[cite: 6, 7]

    if (loading) {
        return <p className="text-center text-purple-300">Завантаження відгуків...</p>;
    }

    return (
        <section className="reviews-section my-8 p-4">
            <h2 className="text-2xl font-bold mb-4 text-purple-200">Відгуки попередніх роботодавців</h2>
            <div className="space-y-4">
                {comments.map(comment => (
                    <div key={comment.id} className="review-card p-4 bg-[#1a1225] border border-[#3b2b4d] rounded-lg shadow-md text-purple-100">
                        <h3 className="font-semibold text-purple-300">{comment.name}</h3>
                        <p className="text-sm text-purple-400 italic mb-2">{comment.email}</p>
                        <p className="text-sm">{comment.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;