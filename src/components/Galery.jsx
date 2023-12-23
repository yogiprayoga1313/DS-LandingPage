import { useState } from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import './style.css'

// Dummy data gambar
const imageData = [
    { id: 1, src: '/assets/IMG_5890.jpeg' },
    { id: 2, src: '/assets/IMG_5886.jpeg' },
    { id: 3, src: '/assets/IMG_5873.jpeg' },
    { id: 4, src: '/assets/IMG_5874.jpeg' },
    { id: 5, src: '/assets/IMG_4109_11zon.jpg' },
    { id: 6, src: '/assets/IMG_6361_11zon.jpg' },
    { id: 7, src: '/assets/IMG_7114_11zon.jpg' },
    { id: 8, src: '/assets/IMG_7119_11zon.jpg' },
    { id: 9, src: '/assets/IMG_7130_11zon.jpg' },
    { id: 10, src: '/assets/IMG_7138_11zon.jpg' },
    { id: 11, src: '/assets/IMG_7143_11zon.jpg' },
    { id: 12, src: '/assets/IMG_7147_11zon.jpg' },
    { id: 13, src: '/assets/IMG_7163_11zon.jpg' },
    { id: 13, src: '/assets/IMG_7288_11zon.jpg' },
    { id: 13, src: '/assets/IMG_7291_11zon.jpg' },
    { id: 13, src: '/assets/IMG_7114 2.png' },
];

const imagesPerPage = 4;

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    const currentImages = imageData.slice(startIndex, endIndex);

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
    };

    const goToNextPage = () => {
        const totalPages = Math.ceil(imageData.length / imagesPerPage);
        setCurrentPage((prevPage) => Math.min(totalPages - 1, prevPage + 1));
    };

    return (
        <div className='flex justify-center items-center mt-7 flex-col mb-10 gap-10'>
            <div className='md:flex gap-4'>
                {currentImages.map((image, index) => (
                    <div key={index} className='flex flex-col gap-3 mb-5 md:mb-0'>
                        <img
                            src={image.src}
                            className='w-[280px] h-[345px] object-cover md:mx-0 mx-2'
                            alt={`Image ${image.id}`}
                        />
                    </div>
                ))}
            </div>
            <div className='flex gap-5 button-wrapper'>
                <div>
                    <div className='bg-gray-300 rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-200' onClick={goToPreviousPage} >
                        <button className="arrow-button" onClick={goToPreviousPage} >
                            <IoMdArrowRoundBack size={20} color='white' />
                        </button>
                    </div>
                </div>
                <div>
                    <div className='bg-[#FFAB07] rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#FFAB07]/70' onClick={goToNextPage} >
                        <button className="arrow-button" onClick={goToNextPage}>
                            <IoMdArrowRoundForward size={20} color='white' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
