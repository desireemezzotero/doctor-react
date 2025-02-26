import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function CarouselHomePage() {
  return (
    <div className='relative h-[600px]'>
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
        <div className='mx-[100px]'>
          <h1 className='text-5xl w-[500px] text-white'>Trova il medico giusto per te in pochi clic.</h1>
          <h4 className='text-xl mt-6 w-[400px] text-white'>Scegli tra centinaia di specialisti verificati e prenota subito la tua visita!</h4>
        </div>
      </div>
    </div>
  );
}

export default CarouselHomePage
