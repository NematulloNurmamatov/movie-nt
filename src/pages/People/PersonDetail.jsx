import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiClient } from '../../Utils/api';

export default function PersonDetail() {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [directingCredits, setDirectingCredits] = useState([]);
    const [actingVideos, setActingVideos] = useState([]);

    const fetchPersonDetails = async () => {
        try {
            const res = await apiClient.get(`person/${id}?language=en-US`);
            setPerson(res.data);
        } catch (error) {
            console.error('Error fetching person details:', error);
        }
    };

    const fetchCombinedCredits = async () => {
        try {
            const res = await apiClient.get(`person/${id}/combined_credits?language=en-US`);
            // Directing ma'lumotlari
            const directing = res.data.crew.filter(
                (credit) => credit.department === 'Directing'
            );
            setDirectingCredits(directing);

            // Acting yoki video ma'lumotlari
            const acting = res.data.cast.filter((credit) => credit.media_type === 'movie' || credit.media_type === 'tv');
            setActingVideos(acting);
        } catch (error) {
            console.error('Error fetching combined credits:', error);
        }
    };

    useEffect(() => {
        fetchPersonDetails();
        fetchCombinedCredits();
    }, [id]);

    if (!person) return <div>Loading...</div>;

    return (
        <div className="container mx-auto mt-8 p-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Section: Personal Info */}
                <div className="w-full md:w-1/3">
                    {person.profile_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                            alt={person.name}
                            className="w-full h-auto object-cover rounded-md mb-4"
                        />
                    )}
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h3 className="text-lg font-bold mb-4">Personal Info</h3>
                        <p>
                            <span className="font-semibold">Known For:</span> {person.known_for_department || 'N/A'}
                        </p>
                        <p>
                            <span className="font-semibold">Known Credits:</span> {person.known_credits || 'N/A'}
                        </p>
                        <p>
                            <span className="font-semibold">Gender:</span> {person.gender === 1 ? 'Female' : 'Male'}
                        </p>
                        <p>
                            <span className="font-semibold">Birthday:</span> {person.birthday || 'N/A'}
                        </p>
                        {person.deathday && (
                            <p>
                                <span className="font-semibold">Deathday:</span> {person.deathday}
                            </p>
                        )}
                        <p>
                            <span className="font-semibold">Place of Birth:</span> {person.place_of_birth || 'N/A'}
                        </p>
                        {person.also_known_as?.length > 0 && (
                            <div>
                                <span className="font-semibold">Also Known As:</span>
                                <ul className="list-disc ml-5">
                                    {person.also_known_as.map((name, index) => (
                                        <li key={index}>{name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Section: Biography and Directing */}
                <div className="w-full md:w-2/3">
                    <h1 className="text-2xl font-bold mb-4">{person.name}</h1>
                    <h3 className="font-semibold text-lg mb-2">Biography</h3>
                    <p>{person.biography || 'Biography not available.'}</p>

                    <div className="mt-8">
                        <h3 className="font-semibold text-lg mb-4">Videos</h3>
                        <div className="flex gap-4 overflow-x-auto">
                            {actingVideos.length > 0 ? (
                                actingVideos.map((video) => (
                                    <div key={video.id} className="min-w-[200px]">
                                        {video.poster_path && (
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200${video.poster_path}`}
                                                alt={video.title || video.name}
                                                className="w-full h-auto rounded-md mb-2"
                                            />
                                        )}
                                        <h4 className="font-semibold text-sm">{video.title || video.name}</h4>
                                        <p className="text-xs text-gray-500">{video.release_date || 'N/A'}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No videos available.</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="font-semibold text-lg mb-4">Directing</h3>
                        <div className="overflow-hidden">
                            {directingCredits.length > 0 ? (
                                <ul>
                                    {directingCredits.map((credit) => (
                                        <li
                                            key={credit.id}
                                            className="border-b py-2 flex justify-between items-center"
                                        >
                                            <div>
                                                <h4 className="font-semibold">{credit.title || credit.name}</h4>
                                                <p className="text-sm text-gray-600">{credit.release_date || 'N/A'}</p>
                                            </div>
                                            <span className="text-gray-500">{credit.job}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No directing credits available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
