import React, { useState, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../assets/styles/swiper.css';
import Default from '../../assets/images/default.jpg';

const index = ({ destination }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // mengecek jika destination datanya ada dan loading menjadi false
    if (destination) {
      setLoading(false);
    }
  }, [destination]);

  return (
    <section className="destination">
      <div className="destination-wrapper">
        <div className="destination-carousel">
          <div className="destination-text">
            <div className="destination-title">top 10</div>
            <div className="destination-subtitle">Top 10 destinations</div>
          </div>
          <Swiper
            slidesPerView={5}
            slidesPerGroup={1}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              100: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 5
              }
            }}>
            {loading ? (
              <div></div>
            ) : (
              destination.data.map((item) => (
                <SwiperSlide key={item.city_id} className="mySwiper">
                  <div style={{ marginTop: '-6em' }}>
                    <div className="destination-decoration">
                      <img
                        src={`https://drive.google.com/uc?export=view&id=${item.image}`}
                        alt={`${item.city_name}`}
                        className="destination-image"
                        onError={(e) => {
                          e.target.src = Default;
                        }}
                      />
                    </div>
                    <div className="destination-caption mt-4">{item.city_name}</div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default index;
