import React from 'react'
import footer from '../assets/footer.svg';

export default function Footer() {
    return (
        <div className='bg-[#032541] py-16'>
            <div className='container flex justify-between text-white'>
                <div className=''>
                    <img className='w-32' src={footer} alt="" />
                    <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-300 transform hover:scale-105 active:scale-95 mt-10">
                        Join the Community
                    </button>
                </div>
                <div>
                    <h3 className='mb-3 cursor-pointer hover:text-blue-300 transition font-bold'>Asosiy</h3>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>TMDB haqida</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Aloqa</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Forumlarni dastaklash</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>API</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Tizim statusi</p>
                </div>
                <div>
                    <h3 className='mb-3 cursor-pointer hover:text-blue-300 transition font-bold'>Ishtirok</h3>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Contribution Bible</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Yangi film qo'shish</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Yangi teleko'rsatuv qo'shish</p>
                </div>
                <div>
                    <h3 className='mb-3 cursor-pointer hover:text-blue-300 transition font-bold'>Hamjamiyat</h3>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Koʻrsatmalar</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Munozaralar</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Hurmat taxtasi</p>
                </div>
                <div>
                    <h3 className='mb-3 cursor-pointer hover:text-blue-300 transition font-bold'>Legal</h3>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Foydalanish shartlari</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>APIdan foydalanish shartlari</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>Maxfiylik siyosati</p>
                    <p className='mb-1 cursor-pointer hover:text-blue-300 transition'>DMCA Policy</p>
                </div>
            </div>
        </div>
    )
}
