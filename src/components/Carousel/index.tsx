import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
    imageList: {
        src: string;
        alt: string;
    }[];
}

const Carousel: React.FC<Props> = ({ imageList }) => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
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
                {imageList.map((image) => (
                    <SwiperSlide
                        style={{
                            backgroundColor: '#575757',
                            width: "100%",
                            height: "100%",
                            border: "none",
                            overflow: 'hidden',
                            aspectRatio: "20/5",
                        }}
                    >
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            style={{ width: '100%', objectFit: 'cover' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;