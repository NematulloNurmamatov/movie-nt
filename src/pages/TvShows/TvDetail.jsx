import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../Utils/api";
import ThreeDot from "../../components/ThreeDot";

function TvDetail() {
    const { id } = useParams(); // Dinamik `id` ni olish
    const [tvDetails, setTvDetails] = useState(null);

    const fetchTvDetails = async () => {
        try {
            const res = await apiClient.get(`tv/${id}?language=en-US`);
            setTvDetails(res.data);
        } catch (error) {
            console.error("Error fetching TV details:", error);
        }
    };

    useEffect(() => {
        fetchTvDetails();
    }, [id]);

    if (!tvDetails) {
        return (
            <div className="flex items-center justify-center h-screen">
                <ThreeDot color="#32cd32" size="large" />
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-8 p-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Section */}
                <div className="w-full md:w-1/3">
                    {tvDetails.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`}
                            alt={tvDetails.name}
                            className="w-full h-auto rounded-md"
                        />
                    )}
                </div>

                {/* Right Section */}
                <div className="w-full md:w-2/3">
                    <h1 className="text-2xl font-bold mb-4">{tvDetails.name}</h1>
                    <p className="mb-4">{tvDetails.overview}</p>
                    <p>
                        <span className="font-semibold">First Air Date:</span> {tvDetails.first_air_date}
                    </p>
                    <p>
                        <span className="font-semibold">Vote Average:</span> ⭐ {tvDetails.vote_average}
                    </p>
                    <p>
                        <span className="font-semibold">Genres:</span>{" "}
                        {tvDetails.genres.map((genre) => genre.name).join(", ")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TvDetail;
