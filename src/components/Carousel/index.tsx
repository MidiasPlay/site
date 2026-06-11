import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

type ImageItem = {
    src: string;
    alt: string;
};

type Props = {
    desktopImages: ImageItem[];
    mobileImages: ImageItem[];
}

const Carousel: React.FC<Props> = ({ desktopImages, mobileImages }) => {
    return (
        <div className="carousel-container">
            {/* Desktop Carousel */}
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
                className="institutional-carousel desktop-carousel"
            >
                {desktopImages.map((image: ImageItem, index: number) => (
                    <SwiperSlide key={`desktop-${index}`} className="carousel-slide">
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

            {/* Mobile Carousel */}
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
                    nextEl: '.carousel-button-next-mobile',
                    prevEl: '.carousel-button-prev-mobile',
                }}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: false,
                }}
                className="institutional-carousel mobile-carousel"
            >
                {mobileImages.map((image: ImageItem, index: number) => (
                    <SwiperSlide key={`mobile-${index}`} className="carousel-slide">
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
                
                {/* Custom Navigation Buttons for Mobile */}
                <div className="carousel-button-prev-mobile">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="carousel-button-next-mobile">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </Swiper>
        </div>
    );
};

export default Carousel;