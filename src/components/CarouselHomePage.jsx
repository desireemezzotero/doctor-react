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
          delay: 2500,
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
      <div className='absolute top-[50%] left-[50%] z-40 translate-x-[-50%] translate-y-[-50%] container min-h-[450px] bg-black bg-opacity-50 p-[50px] radius'>
        <div>
          <h1 className='text-5xl text-white'>Trova il medico giusto <br></br>per te in pochi click.</h1>
          <h4 className='text-xl mt-6 text-white'>Scegli tra centinaia di specialisti verificati <br></br> e prenota subito la tua visita!</h4>
          <button className='mt-[100px]'><Link className=' bg-white py-[15px] px-[40px]' to='/advance'>Trova un Dottore!</Link></button>
        </div>
      </div>
    </div>
  );
}

export default CarouselHomePage
