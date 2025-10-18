import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ 
                    delay: 3000,
                    disableOnInteraction: false 
                }}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img 
                        src="https://mapadasfranquias.com.br/wp-content/uploads/2021/10/389loja.jpeg" 
                        alt="Imagem 1" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src="https://tribetecnologia.com.br/wp-content/uploads/s03-pic5-3-scaled-1.jpg" 
                        alt="Imagem 2" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src="https://i.ytimg.com/vi/DqI3zMUOSAY/maxresdefault.jpg" 
                        alt="Imagem 3" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;