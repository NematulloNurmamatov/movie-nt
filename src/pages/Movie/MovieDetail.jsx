import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiClient } from '../../Utils/api';
import { Button, Progress } from 'antd';
import { HeartOutlined, InsertRowLeftOutlined, SettingOutlined } from '@ant-design/icons';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    // const imgSonic = "https://i.pinimg.com/600x315/81/f6/eb/81f6ebdd71daaba363e7c6e9314ceae1.jpg";  // Sonic uchun alohida rasm

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

    if (!movie) {
        return <div>Yuklanmoqda...</div>;
    }

    return (
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
                </div>
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
            </div>
        </div>

    );
};


export default MovieDetail;
