import { Swiper, SwiperSlide } from "swiper/react"; // Swiper va SwiperSlide import qilinadi
import kino from "../assets/images/kino.webp"; // Kino rasmi
import { Button, Dropdown, Space } from 'antd';
import { Progress } from 'antd'; // Progress import qilinadi
import { EyeOutlined } from '@ant-design/icons';
import "swiper/css"; // Swiper asosiy CSS
import "swiper/css/navigation"; // Navigation CSS
import "swiper/css/pagination"; // Pagination CSS
import "swiper/css/scrollbar"; // Scrollbar CSS

export default function Home() {
    const cards = [
        { id: 1, title: "Avatar", description: "An epic sci-fi movie about Pandora.", image: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg", progress: 80 },
        { id: 2, title: "Inception", description: "A mind-bending thriller that explores dreams.", image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg", progress: 90 },
        { id: 3, title: "Interstellar", description: "A journey through space and time to save humanity.", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg", progress: 70 },
        { id: 4, title: "Titanic", description: "A tragic love story aboard the Titanic.", image: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg", progress: 60 },
        { id: 5, title: "Dark Knight", description: "A superhero story of Batman against Joker.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ekE6Hhz9gvIbiFSUPxt-FyAh4zXTXX0bjQ&s", progress: 85 },
        { id: 6, title: "The Matrix", description: "A hacker discovers the reality is a simulation.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjSWOCaw5dnDL2GT1zFd9RMCgUGw5Q2Cfg&s", progress: 65 },
        { id: 7, title: "Gladiator", description: "A tale of revenge and honor in ancient Rome.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-rAnpCrP0jqKWBWf12oa1_P2lADNinE3Ug&s", progress: 95 },
        { id: 8, title: "The Lion King", description: "A Disney classic about a lion's journey to the throne.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdZliCqYzFyAaO1UHNrO0-UT5wx67rCvkbQ&s", progress: 55 },
        { id: 9, title: "The Avengers", description: "Earth's mightiest heroes unite to save the world.", image: "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", progress: 80 },
        { id: 10, title: "Forrest Gump", description: "A man's extraordinary life through decades of history.", image: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", progress: 75 },
        { id: 11, title: "Shawshank Redemption", description: "A story of hope and friendship in prison.", image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg", progress: 85 },
        { id: 12, title: "Jurassic Park", description: "Dinosaurs return to life in a theme park.", image: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg", progress: 70 },
        { id: 13, title: "The Godfather", description: "A powerful crime family's rise and fall.", image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg", progress: 90 },
        { id: 14, title: "Harry Potter", description: "A young wizard's journey through magic and destiny.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfILbk8qd5KHYWXTX1H7BhdKkmraxPIjINbA&s", progress: 80 },
        { id: 15, title: "Star Wars", description: "A galaxy far, far away filled with adventure and the Force.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRou-1kbFLKMHIZyF2KORbo1NKZrvHmXB9vkw&s", progress: 65 },
    ];

    const items = [

        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Want to rate or add this item to a list? <br />
                    <button className="bg-blue-500 w-full text-start p-1 text-white">kirish</button> <br />
                    Not a member? <br />
                    <button className="bg-blue-500 w-full text-start p-1 text-white">Sign up</button>
                </a>
            ),
        },
    ];


    return (
        <>
            <div
                className="b bg-cover bg-center h-[400px] w-full relative"
                style={{ backgroundImage: `url(${kino})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white p-4">
                    <h1 className="text-5xl font-bold">Xush kelibsiz.</h1>
                    <h3 className="text-2xl bold mt-2">
                        Millionlab filmlar, telekoʻrsatuvlar va kishilar. Hoziroq kashf eting.
                    </h3>
                    <div className="flex items-center mt-4 w-full max-w-[500px]">
                        <input
                            type="text"
                            placeholder="Film, telekorsatuvlar, kishi va hk lar..."
                            className="px-4 py-2 bg-white text-black rounded-l-md w-full"
                        />
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="carousel-container container mt-8">
                <Swiper
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 8 },
                        480: { slidesPerView: 1.5, spaceBetween: 10 },
                        640: { slidesPerView: 2.5, spaceBetween: 12 },
                        768: { slidesPerView: 3.5, spaceBetween: 15 },
                        1024: { slidesPerView: 4.5, spaceBetween: 20 },
                        1280: { slidesPerView: 6.5, spaceBetween: 25 },
                    }}
                    className="my-swiper"
                >
                    {cards.map((card) => (
                        <SwiperSlide
                            key={card.id}
                            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4"
                        >
                            <div className="w-full h-48 relative">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            {/* Progress rasmning pastida joylashadi */}
                            <div className="mt-2 w-full flex justify-center">
                                <div style={{ position: "absolute", backgroundColor: "#091020", borderRadius: "50%", left: "30px", bottom: "45px", zIndex: "11" }}>
                                    <Progress
                                        type="circle"
                                        percent={card.progress}
                                        width={43} // Progress aylanasining kengligi
                                        strokeColor="#4caf50" // Progress barni yashil rangda qilish
                                        trailColor="red" // Orqa fon qora rang
                                        format={(percent) => (
                                            <span style={{ color: "#FFFFFF" }}>{`${percent}%`}</span> // Yozuvni oq rangda qilish
                                        )}
                                        strokeLinecap="round" // Oqish rangining oxirini yumaloq qilish
                                    />
                                </div>
                                <div style={{ position: "absolute", top: "20px", right: "22px" }} >
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        placement="bottom"
                                    >
                                        <Button className="w-0 h-8  bg-white bg-opacity-70 rounded-full text-[13px] tracking-[2px]"> <EyeOutlined /> </Button>
                                    </Dropdown>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mt-4">{card.title}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}



