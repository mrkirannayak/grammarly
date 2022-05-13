import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, FreeMode, Navigation, Thumbs } from "swiper";

const InformationSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="informationSlider">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          navigation={false}
          //thumbs={{ swiper: thumbsSwiper }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Autoplay, EffectFade, FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <Box className="bannerImgBox">
              <Box className="bannerImgOne">
                <img
                  src="https://static.grammarly.com/assets/files/1495248700340626177a3f4fb713a94d/writing_sample.svg"
                  alt="Aim High With Brilliant Writing"
                  title="Aim High With Brilliant Writing"
                />
              </Box>
              <Box className="bannerImgTwo">
                <img
                  src="https://static.grammarly.com/assets/files/32847965b20166d16b376b3f97d7ad65/grammarly_suggestion.svg"
                  alt="Aim High With Brilliant Writing"
                  title="Aim High With Brilliant Writing"
                />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="bannerImgBox">
              <Box className="bannerImgOne">
                <img
                  src="https://static.grammarly.com/assets/files/718a361635f4474a3b373645dce51bec/writing_sample.svg"
                  alt="Aim High With Brilliant Writing"
                  title="Aim High With Brilliant Writing"
                />
              </Box>
              <Box className="bannerImgTwo">
                <img
                  src="https://static.grammarly.com/assets/files/299da6fd3e0803d745cb860de475a4e5/grammarly_suggestion.svg"
                  alt="Aim High With Brilliant Writing"
                  title="Aim High With Brilliant Writing"
                />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="bannerImgBox">
              <Box className="bannerImgOne">
                <img
                  src="https://static.grammarly.com/assets/files/467997bcab46bc3b210b11951fa061d8/writing_sample.svg"
                  alt="Aim High With Brilliant Writing"
                  title="Aim High With Brilliant Writing"
                />
              </Box>
              <Box className="bannerImgTwo">
                <img
                  src="https://static.grammarly.com/assets/files/8557e8eb1af323bdc9bb1cc8acff9bb7/grammarly_suggestion.svg"
                  alt="Aim High With Brilliant Writing"
                  title="Aim High With Brilliant Writing"
                />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="bannerImgBox">
              <Box className="bannerImgOne">
                <img
                  src="https://static.grammarly.com/assets/files/18c5385a8f59a60ee1a389426a2a0b89/writing_sample.svg"
                  alt="Aim High With Brilliant Writing"
                  title="Aim High With Brilliant Writing"
                />
              </Box>
              <Box className="bannerImgTwo">
                <img
                  src="https://static.grammarly.com/assets/files/d9d689c835ee698bca792fe86759fbe1/grammarly_suggestion.svg"
                  alt="Aim High With Brilliant Writing"
                  title="Aim High With Brilliant Writing"
                />
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box className="servicesBox">
              <Box className="servicesTitle">
                Clear, confident communication
              </Box>
              <Typography variant="body1">
                Take the guesswork out of great writing.
              </Typography>
              <div class="progressBar">
                <div class="progressMade"></div>
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="servicesBox">
              <Box className="servicesTitle">
                Comprehensive real-time feedback
              </Box>
              <Typography variant="body1">
                Effective writing takes more than good grammar.
              </Typography>
              <div class="progressBar">
                <div class="progressMade"></div>
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="servicesBox">
              <Box className="servicesTitle">Support you can rely on</Box>
              <Typography variant="body1">
                Write with a second pair of eyes that never gets tired.
              </Typography>
              <div class="progressBar">
                <div class="progressMade"></div>
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="servicesBox">
              <Box className="servicesTitle">Strike the right tone</Box>
              <Typography variant="body1">
                Make the best impression, every time.
              </Typography>
              <div class="progressBar">
                <div class="progressMade"></div>
              </div>
            </Box>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default InformationSlider;
