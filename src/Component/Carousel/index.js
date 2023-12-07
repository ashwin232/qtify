import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({data,navId})=>{
    return <div className='carousel-container'>
       <Swiper
        modules={[Virtual, Navigation, Pagination]}
       // onSwiper={setSwiperRef}
        slidesPerView={8}
       // centeredSlides={true}
        spaceBetween={30}
        //pagination={{
          //type: 'fraction',
        //}}
        //navigation={true}
        navigation={{nextEl:`.arrow-left-${navId}`,prevEl:`.arrow-right-${navId}`}}
        virtual
      >
        {data.map(cardData=><SwiperSlide key={cardData.id}><Card
           
          imgSrc={cardData.image}
          title={cardData.title}
          follows={cardData.follows}/></SwiperSlide>)}
             </Swiper>
          <div className={`arrow-left-${navId} arrow-left arrow`}><img src='/leftIcon.png' alt='left'/></div>
          <div className={`arrow-right-${navId} arrow-right arrow`}><img src='/rightIcon.png' alt='right'/></div>
     </div>
   
    
}