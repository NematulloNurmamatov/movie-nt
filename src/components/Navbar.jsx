import React from 'react';
import logo from '../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg';
import { Dropdown, Button } from 'antd';
import { FaPlus } from 'react-icons/fa6';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TaniqliKishilar from '../pages/People/TaniqliKishilar';

// import { Button, Popover } from 'antd';

export default function Navbar() {

    // const content = (
    //     <div>
    //         <p>Content</p>
    //         <p>Content</p>
    //     </div>
    // );


    const filmItems = [
        {
            key: '1',
            label: (
                <Link to={"movie/popular"}>
                    Popular
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to={"movie/now_playing"}>
                    Now playing
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link to={"movie/upcoming"}>
                    Up coming
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link to={"movie/top_rated"}>
                    Top rated
                </Link>
            ),
        },
    ];

    const tvItems = [
        {
            key: '1',
            label: (
                <Link to={"tv/popular"}>
                    Popular
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to={"tv/airing_today"}>
                    Now playing
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link to={"tv/on_the_air"}>
                    Up coming
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link to={"tv/top_rated"}>
                    Top rated
                </Link>
            ),
        },
    ];

    const personItems = [
        {
            key: '1',
            label: (
                <Link to={"/taniqliKishilar"}>
                    Taniqli kishilar
                </Link>
            ),
        }
    ];

    const moreItems = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.example.com">
                    Munozaralar
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.example.com">
                    Support
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.example.com">
                    Hurmat taxtasi
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.example.com">
                    API
                </a>
            ),
        },
    ];

    return (
        <div>
            <nav className="border-gray-200 bg-[#032541]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex gap-10">
                        <Link to={"/"}>
                            <img className="w-[140px]" src={logo} alt="Logo" />
                        </Link>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                            <Dropdown menu={{ items: filmItems }} placement="bottom" arrow={{ pointAtCenter: true }}>
                                <Button className="mr-3 bg-[#032541] text-white hover:!bg-[#032541] !border-none">Movies</Button>
                            </Dropdown>
                            <Dropdown menu={{ items: tvItems }} placement="bottom" arrow={{ pointAtCenter: true }}>
                                <Button className="mr-3 bg-[#032541] text-white hover:!bg-[#032541] !border-none">TV Shows</Button>
                            </Dropdown>
                            <Dropdown menu={{ items: personItems }} placement="bottom" arrow={{ pointAtCenter: true }}>
                                <Button className="mr-3 bg-[#032541] text-white hover:!bg-[#032541] !border-none">Kishilar</Button>
                            </Dropdown>
                            <Dropdown menu={{ items: moreItems }} placement="bottom" arrow={{ pointAtCenter: true }}>
                                <Button className="bg-[#032541] text-white hover:!bg-[#032541] !border-none">Yana</Button>
                            </Dropdown>
                        </div>

                    </div>
                    <div className='flex cursor  gap-4 text-white text-[18px] items-center '>
                        <FaPlus className=' cursor text-[25px] text-white' />
                        <button className=' cursor border px-[4px] py-[1px] rounded hover:bg-white hover:text-gray-800 transition'>UZ</button>
                        <h1 className=' cursor '>Kirish</h1>
                        <h1 className=' cursor '>TMDBga qoʻshiling</h1>
                        <SearchOutlined className=' cursor text-[25px] text-white' />
                    </div>
                </div>
            </nav>
        </div>
    );
}
