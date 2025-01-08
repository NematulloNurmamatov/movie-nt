import React, { useEffect } from 'react'
import UseFormatDate from '../../Hooks/UseFormatDate'
import { Progress } from 'antd'

function MovieCard({ src, title, release_date, vote_average }) {

    const { formatTime } = UseFormatDate()


    return (
        <div className='border rounded shadow h-[440px] bg-white relative'>
            <img className='rounded w-full h-[329px]' src={`https://image.tmdb.org/t/p/w500${src}`} alt={title} />
            <Progress
                type="circle"
                percent={Math.round(vote_average*10)}
                size={45}
                className="custom-progress absolute left-3 top-[305px]"
                style={{ backgroundColor: "#151515", borderRadius: "50%" }}
            />
            <h3 className='mt-8 pl-2 font-serif font-medium'>{title}</h3>
            <p className=' pl-2 text-[15px] mt-1 text-gray-600'>{formatTime(release_date)}</p>
        </div>
    )
}

export default MovieCard