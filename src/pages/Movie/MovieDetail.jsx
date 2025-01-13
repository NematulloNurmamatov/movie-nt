import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiClient } from '../../Utils/api';
import { Button, Progress } from 'antd';
import { HeartOutlined, InsertRowLeftOutlined, SettingOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';


const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState(null);


    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await apiClient.get(`movie/${id}?language=en-US`);
                setMovie(response.data);
            } catch (error) {
                console.error("Kinoning ma'lumotlarini olishda xatolik:", error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    useEffect(() => {
        const credits = async () => {
            try {
                const response = await apiClient.get(`movie/${id}/credits?language=en-US`);
                setCredits(response.data);
            } catch (error) {
                console.error("Kinoning ma'lumotlarini olishda xatolik:", error);
            }
        };

        credits();
    }, [id]);


    if (!movie) {
        return <div>Yuklanmoqda...</div>;
    }



    return (
        <div>
            <div className='relative'>
                {/* Qoraytiruvchi overlayni fon rasmiga xira qilmasdan qo'shish */}
                <div
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-[450px]'
                    style={{
                        backgroundImage: `url(${`https://media.themoviedb.org/t/p/original/${movie?.backdrop_path}`})`,
                    }}
                ></div>

                {/* Overlay fonni qoraytiruvchi */}
                <div className='absolute inset-0 bg-black pb-[450px] opacity-70'></div>  {/* Xira darajasini sozlash */}

                {/* Kontent */}
                <div className='flex container pt-4 pb-4 gap-4 relative items-center'>
                    <div className=''>
                        <img
                            className='max-w-[280px] min-w-[280px] !h-[405px] rounded object-cover'
                            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie?.poster_path}`}
                            alt={movie.title}
                        />
                    </div >
                    <div className='text-white'>
                        <h1 className='font-black text-5xl mb-1'>{movie.title}</h1>
                        <p>{movie?.release_date} • {movie.genres.map(genre => genre.name).join(', ')} • {movie.runtime} minutes</p>
                        {/* vote_average */}
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#032541] inline-block rounded-full text-white mt-6'>
                                <Progress
                                    type="circle"
                                    size={60}
                                    strokeColor="green"
                                    percent={Math.round(movie.vote_average * 10)}
                                    format={(percent) => <span style={{ color: 'white' }}>{percent}%</span>}
                                />
                            </div>
                            <div>
                                <h1 className='font-bold'> <br /> User <br /> Score</h1>
                            </div>
                            <p className='text-3xl mb-[-22px] '> 😍🤯😂</p>
                            <Button
                                style={{ backgroundColor: '#032541', color: 'white', border: 'none', marginBottom: "-22px", }}
                                className='rounded-3xl px-6 py-5 font-bold'
                                onClick={() => alert("What's your vibe?")}
                            >
                                What's your Vibe?
                            </Button>
                        </div>

                        <div className='flex gap-2 mt-4 text-2xl items-center mb-3'>
                            <InsertRowLeftOutlined classNam className='bg-[#032541] p-2 rounded-full' />
                            <HeartOutlined className='bg-[#032541] p-2 rounded-full' />
                            <SettingOutlined className='bg-[#032541] p-2 rounded-full' />
                            <p className='font-black'>Play Trailer</p>
                        </div>
                        <p className='text-gray-300'>{movie.tagline}</p>
                        <h2 className='text-2xl font-black mt-2'>Overview</h2>
                        <p>{movie.overview}</p>

                    </div>
                </div >
            </div >

            <br />

            <div className=" container  grid grid-cols-9  p-2">
                <div className="col-span-7">
                    {credits?.cast?.length > 0 && (
                        <div className="flex gap-4 overflow-x-auto scrollbar-hide mt-4">
                            {credits.cast.slice(0, 10).map((actor) => (
                                <div
                                    key={actor.id}
                                    className="bg-[#032541] text-white rounded-lg shadow w-40 flex-shrink-0"
                                >
                                    <img
                                        className="w-full h-40 object-cover rounded-t-lg"
                                        src={
                                            actor.profile_path
                                                ? `https://media.themoviedb.org/t/p/w300/${actor.profile_path}`
                                                : "https://via.placeholder.com/300x450?text=No+Image"
                                        }
                                        alt={actor.name}
                                    />
                                    <div className="p-2">
                                        <h3 className="font-bold text-sm">{actor.name}</h3>
                                        <p className="text-xs text-gray-300">{actor.character}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className='mt-4'>
                        <h1 className='font-bold mb-2'>Full Cast & Crew</h1>
                        <hr style={{ borderTop: '2px solid gray' }} />
                        <h2 className=' font-bold mb-2 mt-2'>Social</h2>
                        <Segmented
                            className='text-white bg-[#032541]'
                            options={['Reviews 1', ' Discussions 2']}
                            onChange={(value) => {
                                console.log(value); // string
                            }}
                        />
                        <div className='border shadow-md bg-white p-4 mt-4 mb-4 rounded'>
                            <div className='flex gap-4'>
                                <div>
                                    <img className='rounded-full' src="https://media.themoviedb.org/t/p/w45_and_h45_face/yz2HPme8NPLne0mM8tBnZ5ZWJzf.jpg" alt="" />
                                </div>
                                <div>
                                    <h1 className='font-bold text-[20px]'>A review by CinemaSerf </h1>
                                    <p>Written by CinemaSerf on December 24, 2024</p>
                                </div>
                            </div>
                            <p className='mt-3'>So for fifty years, "GUN" have kept "Shadow" in a gloopy state of stasis deep underground in a top secret facility. All of a sudden he awakens, punches himself out of the place and that means that the director (Krysten Ritter) has to disrupt a family barbecue to engage the services of "Team Sonic". Our eponymous blue hedgehog, his best pals "Tails" and "Knuckles" have settled down to a peaceable life with "Tom" (James Marsden) and "Maddie" (Tika Sumpter) but realise they have to rise to the occasion so off they go. Imagine their shock, though, when they discover that their new super-fast and su... read the rest.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2   rounded-lg p-4 ">
                    <div className='flex justify-between items-center gap-4'>
                        <button
                            className="bg-[#032541] text-white font-bold py-1 px-4 rounded-full shadow-lg hover:bg-[#0466c8] transition duration-300 ease-in-out transform hover:scale-105 w-[200px]"
                            onClick={() => alert("Playing the movie!")}
                        >
                            Play Now
                        </button>
                        <span>
                            <p className='text-[14px]'>Presumed </p>
                            <p className='text-[14px]'> on Apple</p>
                        </span>
                    </div>
                    <h3 className="text-lg font-bold mb-4 mt-4">Movie Details</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <span className="font-bold">Status:</span> {movie.status}
                        </li>
                        <li>
                            <span className="font-bold">Original Language:</span> {movie.original_language}
                        </li>
                        <li>
                            <span className="font-bold">Budget:</span> ${movie.budget?.toLocaleString() || "N/A"}
                        </li>
                        <li>
                            <span className="font-bold">Revenue:</span> ${movie.revenue?.toLocaleString() || "N/A"}
                        </li>
                    </ul>

                    <div className='flex flex-wrap gap-2 mt-4'>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Moon</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Sequel</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Based on Video Game</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Dual Role</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Aftercreditsstinger</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Duringcreditsstinger</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Hedgehog</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Live Action and Animation</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Grandfather Grandson Relationship</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Animal Human Friendship</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Anthropomorphic </button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Loss and Grief</button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Sonic Cinematic </button>
                        <button class="px-1 py-1 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300">Sonic Adventure 2</button>
                    </div>
                </div>
            </div>



        </div>
    );
};


export default MovieDetail;
