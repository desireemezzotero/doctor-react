import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function CarouselHomePage() {
  return (
    <div className='relative h-[600px] overflow-hidden'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='bg_image-1'></SwiperSlide>
        <SwiperSlide className='bg_image-2'></SwiperSlide>
      </Swiper>
      <div className='absolute bottom-0 left-0 w-full h-[75%] bg-gradient-to-t from-black to-transparent z-40'></div>
      <div className='absolute bottom-0 left-0 z-50 w-full flex justify-center items-end'>
        <div className='container p-[50px] flex flex-col md:flex-row md:justify-between md:items-end items-center text-center md:text-left'>
          <div className='flex flex-col justify-center lg:justify-end'>
            <h1 className='text-3xl lg:text-5xl text-white'>Trova il medico giusto <br></br>per te in pochi click.</h1>
            <h4 className='text-lg lg:text-xl mt-6 text-white'>Scegli tra centinaia di specialisti verificati <br></br> e prenota subito la tua visita!</h4>
          </div>
          <button className='bg-white py-[15px] px-[40px] mt-6 lg:mt-0'><a href='/advance'>Trova un Dottore!</a></button>
        </div>
      </div>
    </div>
  );




}

export default CarouselHomePage
