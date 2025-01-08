import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { apiClient } from '../../Utils/api';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';

export default function TaniqliKishilar() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [Total, setTotal] = useState(0);

    const getPeopleList = async () => {
        try {
            let res = await apiClient.get(`person/popular?language=en-US&page=${page}`);
            setData(res.data.results);
            setTotal(res.data.total_results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getPeopleList();
    }, [page]);

    return (
        <div className="mt-8 mb-8">
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data?.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => navigate(`/person/${item.id}`)} // Har bir shaxs uchun sahifaga o'tish
                        style={{ cursor: 'pointer' }}
                    >
                        <Card
                            img_src={item?.profile_path}
                            ism={item?.name}
                            describe={item?.known_for}
                        />
                    </div>
                ))}
            </div>
            <div className='container flex justify-center' style={{ marginTop: "40px", marginBottom: "30px" }}>
                <Pagination
                    total={Total}
                    current={page}
                    onChange={(page) => setPage(page)}
                    pageSize={20}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
}
