import * as React from 'react';
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { RiCake3Line } from "react-icons/ri";
import { LuChefHat } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import BasicModal from '../components/BasicModal';
import Gallery from '../components/Galery';
import Header from '../components/Headers';
import './home.css'


function Home() {
    const [open, setOpen] = React.useState(false);
    const menuSectionRef = React.useRef(null);
    const aboutSectionRef = React.useRef(null);
    const homeSectionRef = React.useRef(null);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleMenuClick = () => {
        if (menuSectionRef.current) {
            menuSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAboutClick = () => {
        if (aboutSectionRef.current) {
            aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleHomeClick = () =>{
        if (homeSectionRef.current) {
            homeSectionRef.current.scrollIntoView({ behavior: 'smooth'})
        }
    }

    return (
        <>
            <div>
                <Header handleMenuClick={handleMenuClick} handleAboutClick={handleAboutClick} handleHomeClick={handleHomeClick}/>
            </div>
            <div id="homeSection" ref={homeSectionRef}></div>
            <div className='md:flex md:items-center md:h-[600px] md:justify-center md:pt-40 pt-32'>
                <div className='flex flex-col lg:flex-row justify-center gap-20 items-center'>
                    <div>
                        <span>
                            <img src="/assets/IMG_5890_11zon.jpeg" alt="img-cover-1" className='rounded-full md:w-[450px] md:h-[450px] w-[320px] h-[320px] object-cover' loading="lazy" />
                        </span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='text-xl text-md font-bold'>
                            <span>Lezat & Sehat</span>
                        </div>
                        <div className='md:text-6xl text-4xl md:w-[540px] w-[280px] font-bold text-[#FFAB07]'>
                            <span>Makanan dibuat dengan cinta!</span>
                        </div>
                        <div className='md:w-[400px] w-[270px] md:text-lg text-md opacity-60'>
                            <span>
                                Dapoer Sakha selalu menyediakan makanan yang
                                sehat dan higienist untuk disajikan sehingga aman
                                dan baik untuk dikonsumsi.
                            </span>
                        </div>
                        <div>
                            <button className='bg-[#FFAB07] md:w-[222px] md:h-[52px] w-[190px] h-[52px] justify-around items-center flex rounded-3xl' onClick={handleOpen}>
                                <span className='text-white md:ml-5 md:text-lg text-md ml-2'>Pesan Sekarang</span>
                                <div className='bg-white rounded-full md:w-10 md:h-10 w-10 h-10 flex justify-center items-center hover:bg-gray-100' >
                                    <div>
                                        <IoMdArrowRoundForward size={20} color='black' />

                                    </div>
                                </div>
                            </button>
                            <BasicModal statusOpen={open} onCloseModal={handleCloseModal} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-16 md:mt-28 mt-40'>
                <div className='md:flex md:flex-col md:justiify-center md:items-center gap-3 flex flex-col justify-center items-center hidden'>
                    <span className='text-[#FFAB07] md:text-3xl text-2xl font-bold md:w-[355px] w-[250px] md:text-center'>
                        Cara yang sehat untuk memulai harimu
                    </span>
                    <span className='md:w-[355px] w-[240px] md:text-center opacity-70'>
                        Berasal dari Distributors terbaik. untuk semua pelanggan terbaik Dapoer Sakha.
                    </span>
                </div>
                <div className='md:flex md:justify-center md:items-center md:gap-36 gap-5'>
                    <div className='flex flex-col items-center text-center'>
                        <RiCake3Line size={150} color='#FFAB07' />
                        <span className='w-[246px] font-bold text-2xl'>
                            Lezat & Sehat
                        </span>
                        <span className='w-[260px] h-auto opacity-70'>
                            Makanan yang dibuat dengan cinta, dan dari bahan terbaik.
                        </span>
                    </div>
                    <div className='md:flex flex flex-col items-center text-center'>
                        <LuChefHat size={150} color='#FFAB07' />
                        <span className='w-[246px] font-bold text-2xl'>
                            Chef Handal
                        </span>
                        <span className='w-[260px] h-auto opacity-70'>
                            Chef profesional yang sudah berpengalaman.
                        </span>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <TbTruckDelivery size={150} color='#FFAB07' />
                        <span className='w-[246px] font-bold text-2xl'>
                            Pengiriman Cepat
                        </span>
                        <span className='w-[260px] h-auto opacity-70'>
                            Layanan ini memudahkan pelanggan untuk memesan makanan.
                        </span>
                    </div>
                </div>
            </div >
            <div id='aboutSection' ref={aboutSectionRef}  ></div>
            <div className='flex justify-center items-center mt-28 flex-col mb-10 gap-10'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <span className='md:text-4xl text-2xl font-bold text-[#FFAB07]'>The Gallery Product</span>
                    <span className='w-[250px] text-center opacity-70'>Sample Product yang tersedia di Dapoer Sakha.</span>
                </div>
                <div className='flex gap-4'>
                    <Gallery  />
                </div>
            </div>
            <div></div>
            <div id="menuSection" ref={menuSectionRef} className='flex flex-col justify-center items-center md:mt-28'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-1'>
                        <span className='md:text-4xl text-xl font-bold text-[#FFAB07]'>Item Teratas Dapoer Sakha</span>
                        <span className='md:w-[574px] w-[260px] opacity-70 text-md'>
                            Produk ini adalah pilihan utama kami, dipilih dengan hati-hati
                            untuk  memenuhi kebutuhan anda dengan keunggulan terbaik.
                        </span>
                    </div>
                    <div className='md:flex gap-11'>
                        <div className='mb-10 md:mb-0 zoom-image'>
                            <img src="/assets/cromboloni-2.jpeg" alt="" className='w-[255px] h-[255px] rounded-md object-cover' loading="lazy" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-xl font-bold'>Cromboloni</span>
                                <span className='text-md opacity-70'>
                                    Open PO Cromboloni tersedia!
                                </span>
                            </div>
                        </div>
                        <div className='mb-10 md:mb-0 zoom-image'>
                            <img src="/assets/IMG_5873_11zon.jpeg" alt="" className='w-[255px] h-[255px] rounded-md object-cover' loading="lazy" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-xl font-bold'>Snack Box</span>
                                <span className='text-md opacity-70'>
                                    Snack box beraneka ragam pilihan
                                </span>
                            </div>
                        </div>
                        <div className='mb-10 md:mb-0 zoom-image'>
                            <img src="/assets/IMG_7138_11zon_11zon.jpg" alt="" className='w-[255px] h-[255px] rounded-md object-cover' loading="lazy" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-xl font-bold'>Pisang Coklat</span>
                                <span className='text-md opacity-70'>
                                    Pisang Coklat pilihan terbaik
                                </span>
                            </div>
                        </div>
                        <div className='mb-10 md:mb-0 zoom-image'>
                            <img src="/assets/IMG_7163_11zon_11zon.jpg" alt="" className='w-[255px] h-[255px] rounded-md object-cover' loading="lazy" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-xl font-bold'>Brownies Kukus</span>
                                <span className='text-md opacity-70'>
                                    Brownies Kukus Selalu tersedia
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Page 2 */}
                    <div className='md:flex gap-11'>
                        <div className='mb-10 md:mb-0 zoom-image'>
                            <img src="/assets/IMG_4109_11zon_11zon.jpg" alt="" className='w-[255px] h-[255px] rounded-md object-cover' loading="lazy" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-xl font-bold'>Donat Box</span>
                                <span className='text-md opacity-70 w-[250px]'>
                                    Donat Box untuk acara specialmu
                                </span>
                            </div>
                        </div>
                        <div className='mb-10 md:mb-0 zoom-image'>
                            <img src="/assets/IMG_7291_11zon_11zon.jpg" alt="" className='w-[255px] h-[255px] rounded-md object-cover' loading="lazy" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-xl font-bold'>Pie Buah</span>
                                <span className='text-md opacity-70'>
                                    Pie Buah beraneka ragam pilihan
                                </span>
                            </div>
                        </div>
                        <div className='mb-10 md:mb-0 zoom-image'>
                            <img src="/assets/IMG_5890_11zon.jpeg" alt="" className='w-[255px] h-[255px] rounded-md object-cover' loading="lazy" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-xl font-bold'>Nasi Box</span>
                                <span className='text-md opacity-70 w-[250px]'>
                                    Open Order Nasi Box!
                                </span>
                            </div>
                        </div>
                        <div className='mb-10 md:mb-0 zoom-image'>
                            <img src="/assets/pisang-coklat.jpeg" alt="" className='w-[255px] h-[255px] rounded-md object-cover' loading="lazy" />
                            <div className='flex flex-col gap-1'>
                                <span className='text-xl font-bold'>Bolen Lilit</span>
                                <span className='text-md opacity-70'>
                                    Bolen Lilit Selalu tersedia
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-10'>
                        <div>
                            <button className='bg-[#FFAB07] md:w-[222px] md:h-[52px] w-[190px] h-[52px] justify-around items-center flex rounded-3xl' onClick={handleOpen}>
                                <span className='text-white md:ml-5 md:text-lg text-md ml-2'>Pesan Sekarang</span>
                                <div className='bg-white rounded-full md:w-10 md:h-10 w-10 h-10 flex justify-center items-center hover:bg-gray-100' >
                                    <div>
                                        <IoMdArrowRoundForward size={20} color='black' />

                                    </div>
                                </div>
                            </button>
                            <BasicModal statusOpen={open} onCloseModal={handleCloseModal} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-20'>
                    <div className='flex flex-col gap-5 justify-center items-center'>
                        <span className='text-4xl font-bold text-[#FFAB07]'>Pelanggan Kami</span>
                        <span className='text-md opacity-70 md:w-[588px] w-[310px] text-center'>
                            Kehadiran Anda memberi arti pada setiap produk yang kami tawarkan, setiap
                            layanan yang kami berikan, dan setiap pengalaman yang kami ciptakan.
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center md:gap-20 gap-6 mt-20'>
                <div>
                    <div className='bg-gray-300 rounded-full w-10 h-10 md:flex md:justify-center md:items-center hover:bg-gray-200 hidden md:block'>
                        <button>
                            <IoMdArrowRoundBack size={20} color='white' />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <div className='md:w-[600px] w-[300px] text-center'>
                        <span>
                            “Tersedia layanan yang ramah dan makanan yang luar biasa.
                            Pengalaman yang memuaskan secara keseluruhan.”
                        </span>
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <div>
                            <img src="/assets/IMG_0425 (1).jpg" alt="" className='rounded-full w-[80px] h-[80px] object-cover' loading="lazy" />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-md font-bold'>Yogi Prayoga</span>
                            <span className='text-xs opacity-70'>Manager, Dapoer Sakha</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-[#FFAB07] rounded-full w-10 h-10 md:flex md:justify-center md:items-center hover:bg-[#FFAB07]/70 cursor-pointer hidden md:block'>
                        <button>
                            <IoMdArrowRoundForward size={20} color='white' />
                        </button>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className='bg-[#FFAB07]/40 md:p-20 mt-20 w-auto p-10'>
                <div className='md:flex md:gap-36 gap-5 justify-center'>
                    <div className='flex flex-col gap-3'>
                        <span className='text-2xl font-semibold'>Dapoer Sakha</span>
                        <span className='w-[200px] opacity-70'>All right reserved twinkle creative 2023</span>
                    </div>
                    <div className='md:mt-0 mt-5'>
                        <span className='text-xl font-bold'>Service</span>
                        <div className='flex flex-col opacity-80'>
                            <Link className=' hover:text-gray-400'>Product</Link>
                            <Link className=' hover:text-gray-400'>Menu</Link>
                            <Link className=' hover:text-gray-400'>Quality</Link>
                        </div>
                    </div>
                    <div className='md:mt-0 mt-5'>
                        <span className='text-xl font-bold'>Links</span>
                        <div className='flex flex-col opacity-80'>
                            <Link className=' hover:text-gray-400'>Home</Link>
                            <Link className=' hover:text-gray-400'>Tentang</Link>
                            <Link className=' hover:text-gray-400'>Contacs</Link>
                        </div>
                    </div>
                    <div className='md:mt-0 mt-5'>
                        <span className='text-xl font-bold'>Contacs</span>
                        <div className='flex flex-col opacity-80'>
                            <Link className=' hover:text-gray-400'>Terms & Condotions</Link>
                            <Link className=' hover:text-gray-400'>Provacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home