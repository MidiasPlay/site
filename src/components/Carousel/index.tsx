import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

type Props = {
    imageList: {
        src: string;
        alt: string;
    }[];
}

const Carousel: React.FC<Props> = ({ imageList }) => {
    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                speed={800}
                autoplay={{ 
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                navigation={{
                    nextEl: '.carousel-button-next',
                    prevEl: '.carousel-button-prev',
                }}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: false,
                }}
                className="institutional-carousel"
            >
                {imageList.map((image, index) => (
                    <SwiperSlide key={index} className="carousel-slide">
                        <div className="carousel-image-wrapper">
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="carousel-image"
                            />
                            <div className="carousel-overlay"></div>
                        </div>
                    </SwiperSlide>
                ))}
                
                {/* Custom Navigation Buttons */}
                <div className="carousel-button-prev">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="carousel-button-next">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </Swiper>
        </div>
    );
};

export default Carousel;