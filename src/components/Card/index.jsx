import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APP_PROD } from '../../helper/env';
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
import back from '../../assets/icons/btnback.svg';

const index = ({ trending }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // mengecek jika trending datanya ada dan loading menjadi false
    if (trending) {
      setLoading(false);
    }
  }, [trending]);

  return (
    <section className="trending">
      <p className="trending-title">trending</p>
      <div className="trending-container">
        <h2 className="trending-subtitle">Trending destinations</h2>
        <Link to="/" className="trending-view">
          View All
        </Link>
      </div>
      <div className="trending-wrapper col-md-12">
        <Swiper
          slidesPerView={5}
          slidesPerGroup={2}
          scrollbar={{
            hide: true
          }}
          modules={[Scrollbar]}
          id="trending-carousel"
          breakpoints={{
            100: {
              slidesPerView: 'auto'
            },
            768: {
              slidesPerView: 5
            }
          }}>
          {loading ? (
            <div></div>
          ) : (
            trending.data.map((item) => (
              <SwiperSlide key={item.city_id}>
                <div
                  className="trending-card"
                  style={{
                    background: `url(${APP_PROD}uploads/cities/${item.image})`
                  }}
                  key={item.id}>
                  <div className="trending-airline mt-3">
                    <span>
                      <b>15</b> Airlines
                    </span>
                  </div>
                  <div className="row trending-detail">
                    <div className="col-sm-8">
                      <p>{item.city_name},</p>
                      <h4>{item.country_name}</h4>
                    </div>
                    <div className="trending-button col-sm-2">
                      <img src={back} alt="Back" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default index;
