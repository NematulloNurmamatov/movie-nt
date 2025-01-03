import { Swiper, SwiperSlide } from "swiper/react"; // Swiper va SwiperSlide import qilinadi
import kino from "../assets/images/kino2.webp"; // Kino rasmi
import kino2 from "../assets/images/kino.webp"; // Kino rasmi
import person from "../assets/images/bg-person.webp"; // Kino rasmi
import { Button, Dropdown, Badge } from 'antd';
// import { Progress } from 'antd'; // Progress import qilinadi
import { EyeOutlined } from '@ant-design/icons';
import { Flex, Progress } from 'antd';
// import { Badge, Space } from 'antd';
import "swiper/css"; // Swiper asosiy CSS
import "swiper/css/navigation"; // Navigation CSS
import "swiper/css/pagination"; // Pagination CSS
import "swiper/css/scrollbar"; // Scrollbar CSS
import React, { useState } from "react"; // useState import qilinadi
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd'
// import { Badge, Space } from 'antd'; // This could be earlier in your file


export default function Home() {

    const twoColors = ['#FF5733', '#032541']; // Example definition
    const twoColors2 = ['#008000', '#032541']; // Example definition    
    const [activeTab, setActiveTab] = useState("today"); // Tugmalar holatini saqlash uchun state
    const [activeTab2, setActiveTab2] = useState("second"); // Ikkinchi tab uchun holat


    const cards = [
        { id: 1, title: "Avatar", description: "An epic sci-fi movie about Pandora.", image: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg", progress: 80, tab: "today" },
        { id: 2, title: "Inception", description: "A mind-bending thriller that explores dreams.", image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg", progress: 90, tab: "week" },
        { id: 3, title: "Interstellar", description: "A journey through space and time to save humanity.", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg", progress: 91, tab: "week" },
        { id: 4, title: "Titanic", description: "A tragic love story aboard the Titanic.", image: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg", progress: 60, tab: "today" },
        { id: 5, title: "Dark Knight", description: "A superhero story of Batman against Joker.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ekE6Hhz9gvIbiFSUPxt-FyAh4zXTXX0bjQ&s", progress: 85, tab: "week" },
        { id: 6, title: "The Matrix", description: "A hacker discovers the reality is a simulation.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSjSWOCaw5dnDL2GT1zFd9RMCgUGw5Q2Cfg&s", progress: 65, tab: "today" },
        { id: 7, title: "Gladiator", description: "A tale of revenge and honor in ancient Rome.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-rAnpCrP0jqKWBWf12oa1_P2lADNinE3Ug&s", progress: 95, tab: "week" },
        { id: 8, title: "The Lion King", description: "A Disney classic about a lion's journey to the throne.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdZliCqYzFyAaO1UHNrO0-UT5wx67rCvkbQ&s", progress: 55, tab: "today" },
        { id: 9, title: "The Avengers", description: "Earth's mightiest heroes unite to save the world.", image: "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", progress: 80, tab: "week" },
        { id: 10, title: "Forrest Gump", description: "A man's extraordinary life through decades of history.", image: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", progress: 75, tab: "today" },
        { id: 11, title: "Shawshank...", description: "A story of hope and friendship in prison.", image: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg", progress: 85, tab: "week" },
        { id: 12, title: "Jurassic Park", description: "Dinosaurs return to life in a theme park.", image: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg", progress: 70, tab: "today" },
        { id: 13, title: "The Godfather", description: "A powerful crime family's rise and fall.", image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg", progress: 90, tab: "week" },
        { id: 14, title: "Harry Potter", description: "A young wizard's journey through magic and destiny.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfILbk8qd5KHYWXTX1H7BhdKkmraxPIjINbA&s", progress: 80, tab: "today" },
        { id: 15, title: "Star Wars", description: "A galaxy far, far away filled with adventure and the Force.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRou-1kbFLKMHIZyF2KORbo1NKZrvHmXB9vkw&s", progress: 65, tab: "week" },
    ];

    // Filtering cards based on activeTab
    const filteredCards = cards.filter(card => card.tab === activeTab);

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
            {/* Birinchi div: Sahifa tavsifi */}
            <div
                className="b bg-cover bg-center h-[300px] w-full relative"
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

            {/* Oradagi button */}
            <br />
            <div className=" container w-[260px]  ">
                <div className=" w-52 flex justify-between  rounded-full  border border-black ">
                    <button
                        className={`px-6 py-1 rounded-full transition-all duration-300 ${activeTab === "today" ? "bg-[#032541] text-white" : "bg-gray-0 text-black"}`}
                        onClick={() => setActiveTab("today")}
                    >
                        Bugun
                    </button>
                    <button
                        className={`px-6 py-1 rounded-full transition-all duration-300 ${activeTab === "week" ? "bg-[#032541] text-white" : "bg-gray-0 text-black"}`}
                        onClick={() => setActiveTab("week")}
                    >
                        Bu hafta
                    </button>
                </div>
            </div>

            {/* Ikkinchi div: Karusel */}
            <div id="carousel" className="carousel-container container mt-8">
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
                    {filteredCards.map((card) => (
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
                            <div className="mt-2 w-full flex justify-center">
                                <div
                                    style={{
                                        position: "absolute",
                                        backgroundColor: "#091020",
                                        borderRadius: "50%",
                                        left: "30px",
                                        bottom: "45px",
                                        zIndex: "11",
                                    }}
                                >
                                    <Progress
                                        type="circle"
                                        percent={card.progress}
                                        width={43}
                                        strokeColor="#4caf50"
                                        trailColor="red"
                                        format={(percent) => (
                                            <span style={{ color: "#FFFFFF" }}>{`${percent}%`}</span>
                                        )}
                                        strokeLinecap="round"
                                    />
                                </div>
                                <div style={{ position: "absolute", top: "20px", right: "22px" }}>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        placement="bottom"
                                    >
                                        <Button className="w-0 h-8 bg-white bg-opacity-70 rounded-full text-[13px] tracking-[2px]">
                                            <EyeOutlined />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mt-4">{card.title}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Oradagi button */}

            <br />


            <div className="bg-cover bg-center h-[400px] w-full pt-18 relative"
                style={{ backgroundImage: `url(${kino2})`, paddingTop: "50px" }}>
                {/* Ikkinchi buton */}
                <div className=" container w-[270px]  ">
                    <div className=" w-[270px] flex justify-between bg-white   rounded-full  border border-black ">
                        <button
                            className={`px-6 py-1 rounded-full opacity-100	  transition-all duration-300 ${activeTab2 === "third" ? "bg-blue-500 text-white font-semibold" : "bg-transparent text-black"
                                }`}
                            onClick={() => setActiveTab2("third")}
                        >
                            Pupular
                        </button>
                        <button
                            className={`px-6 py-1 rounded-full transition-all duration-300 ${activeTab2 === "fourth" ? "bg-blue-500 text-white font-semibold" : "bg-transparent text-black"
                                }`}
                            onClick={() => setActiveTab2("fourth")}
                        >
                            Kinoteatrlarda
                        </button>
                    </div>
                </div>


                <br />

                {/* uchinchi div: Karusel */}

                <div style={{ msOverflowStyle: "none" }} class=" scrollbar-hide container flex gap-4 overflow-x-auto ">
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/X4EcUcoo0r4?si=f-vwUV__wni6PkZC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/rpWeDASdL9w?si=JcwlMzZLSjl-SP6H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/G0edEjt4Lzo?si=3WYUF_bMJtFhmuQT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/qaeHKoq_CLM?si=xtUlJI2T0AUQK86I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/0Ke86uLi8Pk?si=OyvmVp9MVL4CmpBz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/ToTRr6cF3oc?si=9NQh40eOMtNtbBEK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/8kooIgKESYE?si=TQbClpBnpjkWAU7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/xeFy89wKy7g?si=Iy4LiHXIEUxuJsuV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/X6axPYBhDiI?si=1NvX1TV6ywz3CIBF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <br /><br />



            <div id="carousel" className="carousel-container container mt-8">
                <h1 className="font-bold text-3xl">Ommabop</h1>
                <Swiper
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1.5 },
                        640: { slidesPerView: 2.5 },
                        768: { slidesPerView: 3.5 },
                        1024: { slidesPerView: 4.5 },
                        1280: { slidesPerView: 6.5 },
                    }}
                    className="my-swiper"
                >
                    {filteredCards.map((card) => (
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
                            <div className="mt-2 w-full flex justify-center">
                                <div
                                    style={{
                                        position: "absolute",
                                        backgroundColor: "#091020",
                                        borderRadius: "50%",
                                        left: "30px",
                                        bottom: "45px",
                                        zIndex: "11",
                                    }}
                                >
                                    <Progress
                                        type="circle"
                                        percent={card.progress}
                                        width={43}
                                        strokeColor="#4caf50"
                                        trailColor="red"
                                        format={(percent) => (
                                            <span style={{ color: "#FFFFFF" }}>{`${percent}%`}</span>
                                        )}
                                        strokeLinecap="round"
                                    />
                                </div>
                                <div style={{ position: "absolute", top: "20px", right: "22px" }}>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        placement="bottom"
                                    >
                                        <Button className="w-0 h-8 bg-white bg-opacity-70 rounded-full text-[13px] tracking-[2px]">
                                            <EyeOutlined />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mt-4">{card.title}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(94, 9, 105, 0.69), rgba(75, 25, 82, 0.5)), url(${person})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    width: "100%",
                    marginTop: "50px"
                }}
            >
                <div className="container pt-12">
                    <h1 className="text-white text-6xl font-bold mb-6">Bugun qoʻshiling</h1>
                    <p className="text-gray-300 italic text-lg">
                        <span className="text-white not-italic">Get access to maintain your own</span> custom personal lists, track what you've seen <span className="text-white not-italic" >and search and filter for</span> what to watch next—<span className="text-white not-italic">regardless if it's in theatres or on TV.</span>
                    </p>
                    <button className="mt-4 bg-violet-900 text-white py-2 px-4 rounded hover:bg-blue-600">Roʻyxatdan oʻtish</button>
                </div>
            </div>

            <br />

            <div className="container">
                <div className="flex items-center gap-10 mb-10">
                    <div>
                        <h1 className="font-bold text-2xl">Hurmat taxtasi</h1>
                    </div>
                    <div>
                        <Badge status="success" text="Foydalanuvchining roʻyxatga olinganidan beri qilgan jami tahrirlari soni" /> <br />
                        <Badge status="error" text="Foydalanuvchining shu haftada qilgan tahrirlari soni" />
                    </div>
                </div>
                <div>
                    <div>
                        <div className="flex justify-between gap-16">
                            <div className="w-full column">
                                <div className="flex items-center gap-4 w-full mb-4">
                                    <div>
                                        <Avatar size="large" src="https://i.pinimg.com/736x/e7/1e/ed/e71eed228bdb81e9b08fdf6b55c81191.jpg" />
                                    </div>
                                    <div className="w-full"> 
                                        <p className="mb-[-10px]">Shei</p>
                                        <Progress percent={39.9} strokeColor={twoColors2} />
                                        <Progress percent={79.9} strokeColor={twoColors} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full mb-4">
                                    <div>
                                        <Avatar size="large" src="https://media.istockphoto.com/id/811339568/photo/student-walking-learning-with-audio-lessons.jpg?s=612x612&w=0&k=20&c=JmWSpYNfSX9etdZYcH1IVH91a9dKSaNOasnswHlcCYk=" />
                                    </div>
                                    <div className="w-full"> 
                                        <p className="mb-[-10px]">Gargots</p>
                                        <Progress percent={40.9} strokeColor={twoColors2} />
                                        <Progress percent={99} strokeColor={twoColors} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full mb-4">
                                    <div>
                                        <Avatar size="large"  icon={<UserOutlined />}  />
                                    </div>
                                    <div className="w-full"> 
                                        <p className="mb-[-10px]">Samara
                                        </p>
                                        <Progress percent={79.9} strokeColor={twoColors2} />
                                        <Progress percent={40} strokeColor={twoColors} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full  mb-4">
                                    <div>
                                        <Avatar size="large" src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/ac010d61-89e1-4a35-8cef-734176694da0/99719fca-c51e-4e6c-b413-9aa56a041d1a.png" />
                                    </div>
                                    <div className="w-full">
                                        <p className="mb-[-10px]">CXC6000
                                        </p>
                                        <Progress percent={59.9} strokeColor={twoColors2} />
                                        <Progress percent={79.9} strokeColor={twoColors} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full mb-4">
                                    <div>
                                        <Avatar size="large" src="https://images-ng.pixai.art/images/thumb/87a9997f-c3f2-4869-ba37-6ef1b70c2177" />
                                    </div>
                                    <div className="w-full"> 
                                        <p className="mb-[-10px]">David

                                        </p>
                                        <Progress percent={29.9} strokeColor={twoColors2} />
                                        <Progress percent={89.9} strokeColor={twoColors} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex items-center gap-4 w-full mb-4">
                                    <div>
                                        <Avatar size="large" src="https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=yNawJP9JGXU6LOL262ME5M1U2xxNKQsvT7F9DZhZCh4=" />
                                    </div>
                                    <div className="w-full"> 
                                        <p className="mb-[-10px]">heli5m</p>
                                        <Progress percent={39.9} strokeColor={twoColors2} />
                                        <Progress percent={56} strokeColor={twoColors} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full mb-4">
                                    <div>
                                        <Avatar size="large" icon={<UserOutlined />} />
                                    </div>
                                    <div className="w-full"> 
                                        <p className="mb-[-10px]">talestalker
                                        </p>
                                        <Progress percent={40.9} strokeColor={twoColors2} />
                                        <Progress percent={89} strokeColor={twoColors} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full mb-4">
                                    <div>
                                        <Avatar size="large" src="https://img.freepik.com/free-photo/beautiful-anime-character-cartoon-scene_23-2151035156.jpg" />
                                    </div>
                                    <div className="w-full"> 
                                        <p className="mb-[-10px]">mrsunkeeper</p>
                                        <Progress percent={85.9} strokeColor={twoColors2} />
                                        <Progress percent={75.9} strokeColor={twoColors} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full mb-4">
                                    <div>
                                        <Avatar size="large" icon={<UserOutlined />} />
                                    </div>
                                    <div className="w-full"> 
                                        <p className="mb-[-10px]">chkchkboom
                                        </p>
                                        <Progress percent={79.9} strokeColor={twoColors2} />
                                        <Progress percent={40} strokeColor={twoColors} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full mb-4">
                                    <div>
                                        <Avatar size="large" icon={<UserOutlined />} />
                                    </div>
                                    <div className="w-full"> 
                                        <p className="mb-[-10px]">capricorn ✨</p>
                                        <Progress percent={59.9} strokeColor={twoColors2} />
                                        <Progress percent={79.9} strokeColor={twoColors} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br />

        </>
    );
}
