import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ id, ism, img_src, describe }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/person/${id}`); // To'g'ri marshrut: /person/:id
    };

    return (
        <div
            onClick={handleCardClick}
            className="w-full h-auto border rounded-lg p-4 shadow transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
            <img
                src={img_src ? `https://image.tmdb.org/t/p/w500${img_src}` : 'https://via.placeholder.com/150'}
                alt={ism || 'No name available'}
                className="w-full h-64 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-800">
                {ism || 'Unknown Name'}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
                {describe && describe.length > 0
                    ? describe.map((item) => item.title || item.name).join(', ')
                    : 'No known works available'}
            </p>
        </div>
    );
}
