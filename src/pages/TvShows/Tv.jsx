import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../Utils/api";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Pagination, Select, Radio, Checkbox, Collapse, Slider, Input } from "antd";

const { Panel } = Collapse;
const { Option } = Select;

function Tv() {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [data, setData] = useState([]);
    const [sortOption, setSortOption] = useState("popularity.desc");
    const [showMeOption, setShowMeOption] = useState("everything");
    const [searchAllReleases, setSearchAllReleases] = useState(true);
    const [genreFilter, setGenreFilter] = useState([]);
    const [userScore, setUserScore] = useState([0, 10]);
    const [runtime, setRuntime] = useState([0, 300]);
    const [keyword, setKeyword] = useState("");
    const [certificates, setCertificates] = useState([]);
    const [platforms, setPlatforms] = useState([]);

    const params = useParams();

    const getMovieList = async () => {
        const res = await apiClient.get(
            `tv/${params.type}?language=en-US&page=${page}`
        );
        setTotalPages(res.data.total_pages);
        setData(res.data.results);
    };

    useEffect(() => {
        getMovieList();
    }, [params, page]);

    const genreOptions = ["Action", "Adventure", "Comedy", "Drama", "Fantasy"];
    const certificateOptions = ["G", "PG", "PG-13", "R", "NC-17"];
    const platformOptions = ["Streaming", "Theatre"];

    return (
        <div className="container mx-auto p-4">
            {/* Grid Layout */}
            <div className="grid grid-cols-8 gap-6">
                {/* Filter Panel */}
                <div className="col-span-2 border rounded-md p-4 bg-white shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-center">Filters</h2>
                    <Collapse defaultActiveKey={["1", "2", "3", "4", "5"]} ghost>
                        {/* Sort Section */}
                        <Panel
                            header={<span className="font-semibold text-gray-700">Sort</span>}
                            key="1"
                        >
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Sort Results By
                                </label>
                                <Select
                                    value={sortOption}
                                    onChange={(value) => setSortOption(value)}
                                    className="w-full"
                                >
                                    <Option value="popularity.desc">Popularity Descending</Option>
                                    <Option value="popularity.asc">Popularity Ascending</Option>
                                    <Option value="release_date.desc">Release Date Descending</Option>
                                    <Option value="release_date.asc">Release Date Ascending</Option>
                                </Select>
                            </div>
                        </Panel>

                        {/* Filters Section */}
                        <Panel
                            header={<span className="font-semibold text-gray-700">Filters</span>}
                            key="2"
                        >
                            {/* Show Me */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Show Me
                                </label>
                                <Radio.Group
                                    onChange={(e) => setShowMeOption(e.target.value)}
                                    value={showMeOption}
                                    className="flex flex-col gap-2"
                                >
                                    <Radio value="everything">Everything</Radio>
                                    <Radio value="unseen">Movies I Haven't Seen</Radio>
                                    <Radio value="seen">Movies I Have Seen</Radio>
                                </Radio.Group>
                            </div>

                            {/* Release Dates */}
                            <div className="mb-4">
                                <Checkbox
                                    checked={searchAllReleases}
                                    onChange={(e) => setSearchAllReleases(e.target.checked)}
                                >
                                    Search all releases?
                                </Checkbox>
                            </div>

                            {/* Genres */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Genres
                                </label>
                                {genreOptions.map((genre) => (
                                    <Checkbox
                                        key={genre}
                                        value={genre}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setGenreFilter([...genreFilter, genre]);
                                            } else {
                                                setGenreFilter(genreFilter.filter((g) => g !== genre));
                                            }
                                        }}
                                    >
                                        {genre}
                                    </Checkbox>
                                ))}
                            </div>

                            {/* User Scores */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    User Score
                                </label>
                                <Slider
                                    range
                                    min={0}
                                    max={10}
                                    value={userScore}
                                    onChange={(value) => setUserScore(value)}
                                />
                            </div>

                            {/* Runtime */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Runtime (minutes)
                                </label>
                                <Slider
                                    range
                                    min={0}
                                    max={300}
                                    value={runtime}
                                    onChange={(value) => setRuntime(value)}
                                />
                            </div>

                            {/* Certificates */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Certificates
                                </label>
                                {certificateOptions.map((cert) => (
                                    <Checkbox
                                        key={cert}
                                        value={cert}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setCertificates([...certificates, cert]);
                                            } else {
                                                setCertificates(certificates.filter((c) => c !== cert));
                                            }
                                        }}
                                    >
                                        {cert}
                                    </Checkbox>
                                ))}
                            </div>

                            {/* Platforms */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Platforms
                                </label>
                                {platformOptions.map((platform) => (
                                    <Checkbox
                                        key={platform}
                                        value={platform}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setPlatforms([...platforms, platform]);
                                            } else {
                                                setPlatforms(platforms.filter((p) => p !== platform));
                                            }
                                        }}
                                    >
                                        {platform}
                                    </Checkbox>
                                ))}
                            </div>

                            {/* Keywords */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Keywords
                                </label>
                                <Input
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    placeholder="Enter keywords"
                                />
                            </div>
                        </Panel>
                    </Collapse>
                </div>

                {/* Movie Cards */}
                <div className="col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data?.map((item) => (
                        <div key={item.id} className="shadow-md rounded-lg overflow-hidden">
                            <MovieCard
                                src={item.poster_path}
                                title={item.title}
                                release_date={item?.release_date}
                                vote_average={item?.vote_average}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <Pagination
                    current={page}
                    total={totalPages * 10}
                    showSizeChanger={false}
                    onChange={(event) => setPage(event)}
                />
            </div>
        </div>
    );
}

export default Tv;
