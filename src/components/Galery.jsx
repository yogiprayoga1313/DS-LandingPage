import { useEffect, useState } from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import './style.css'

// Dummy data gambar
const imageData = [
    { id: 1, src: '/assets/cromboloni-1.jpeg' },
    { id: 2, src: '/assets/IMG_5890_11zon.jpeg' },
    { id: 3, src: '/assets/cromboloni-2.jpeg' },
    { id: 4, src: '/assets/IMG_7154_11zon.jpg' },
    { id: 5, src: '/assets/IMG_4109_11zon_11zon.jpg' },
    { id: 6, src: '/assets/IMG_6361_11zon_11zon.jpg' },
    { id: 7, src: '/assets/IMG_7114_11zon_11zon.jpg' },
    { id: 8, src: '/assets/IMG_7119_11zon_11zon.jpg' },
    { id: 9, src: '/assets/mini-pizza.jpeg' },
    { id: 10, src: '/assets/IMG_7138_11zon_11zon.jpg' },
    { id: 11, src: '/assets/piebuah-2.jpeg' },
    { id: 12, src: '/assets/pisang-coklat.jpeg' },
    { id: 13, src: '/assets/IMG_7163_11zon_11zon.jpg' },
    { id: 14, src: '/assets/pie_brownies.jpeg' },
    { id: 15, src: '/assets/IMG_7291_11zon_11zon.jpg' },
    { id: 16, src: '/assets/nastar.jpeg' },
];

const imagesPerPage = 4;

const Shimmer = () => {
    return (
        <div className="shimmer-wrapper">
            <div className="shimmer"></div>
        </div>
    );
};

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    const currentImages = imageData.slice(startIndex, endIndex);

    useEffect(() => {
        // Simulasi pengunduhan data
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulasi waktu pengunduhan data

        return () => clearTimeout(timer);
    }, [currentPage]);

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
        setCurrentImageIndex(0);
    };

    const goToNextPage = () => {
        const totalPages = Math.ceil(imageData.length / imagesPerPage);
        setCurrentPage((prevPage) => Math.min(totalPages - 1, prevPage + 1));
        setCurrentImageIndex(0);
    };

    const handleImageClick = (index) => {
        const imageIndex = startIndex + index;
        setCurrentImageIndex(imageIndex);
    };
    return (
        <div className='flex justify-center items-center mt-7 flex-col mb-10 gap-10'>
            <div className='md:flex gap-4'>
                {loading ? (
                    Array.from({ length: imagesPerPage }).map((_, index) => (
                        <div key={index} className='flex flex-col gap-3 mb-5 md:mb-0'>
                            <Shimmer /> {/* Memanggil komponen Shimmer */}
                        </div>
                    ))
                ) : (
                    currentImages.map((image, index) => (
                        <div key={index}
                            className={`flex flex-col gap-3 mb-5 md:mb-0 image-slide zoom-image ${currentImageIndex === startIndex + index ? 'active' : ''
                                }`}
                            onClick={() => handleImageClick(index)}>
                            <img
                                src={image.src}
                                className='w-[280px] h-[345px] object-cover md:mx-0 mx-2 rounded-md'
                                alt={`Image ${image.id}`}
                                onLoad={() => setLoading(false)}
                                loading='lazy'
                            />

                        </div>
                    ))
                )}
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
