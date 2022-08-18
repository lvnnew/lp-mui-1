import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Binotel from "../images/partners/Binotel.png";
import СМС from "../images/partners/СМС-Визитка.png";
import Mango from "../images/partners/Mango_Office.png";
import myCool from "../images/partners/myCool.png";
import Pbx from "../images/partners/Pbx.png";
import rostelecom from "../images/partners/rostelecom.png";
import Wazzup from "../images/partners/Wazzup.png";
import Zadarma from "../images/partners/Zadarma.png";
import "../styles/SectionPartners.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionPartners = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: false,
    pauseOnHover: false,
    responsive: [
      {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container
      sx={{
        minHeight: "500px",
      }}
    >
      <Box
        sx={{
          minHeight: "100px",
          maxWidth: "100vw",
          paddingTop: "50px",
        }}
      >
        <Typography
          variant="h3"
          fontFamily="Montserrat, sans-serif"
          textAlign="center"
          lineHeight={1.2}
          fontWeight={600}
          fontSize="2.6rem"
          sx={{
            paddingTop: "35px",
            paddingBottom: "25px",
            color: "#231F20",
            overflowWrap: "break-word",
          }}
        >
          <span style={{ color: "#205edc", fontWeight: "700" }}>
            Быстрая и простая
            <br />
          </span>
          интеграция
        </Typography>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Slider {...settings}>
          <div>
            <Box
              sx={{
                paddingTop: "40px",
                margin: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                height: "100%",
              }}
            >
              <Box>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    className="grayFilter"
                    src={Binotel}
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    alt="картинка"
                  />
                </div>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                paddingTop: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    className="grayFilter"
                    src={СМС}
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    alt="картинка"
                  />
                </div>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                paddingTop: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    className="grayFilter"
                    src={Mango}
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    alt="картинка"
                  />
                </div>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                paddingTop: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    className="grayFilter"
                    src={myCool}
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    alt="картинка"
                  />
                </div>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                paddingTop: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    className="grayFilter"
                    src={Pbx}
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    alt="картинка"
                  />
                </div>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                paddingTop: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    className="grayFilter"
                    src={rostelecom}
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    alt="картинка"
                  />
                </div>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                paddingTop: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    className="grayFilter"
                    src={Wazzup}
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    alt="картинка"
                  />
                </div>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                paddingTop: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img
                    className="grayFilter"
                    src={Zadarma}
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    alt="картинка"
                  />
                </div>
              </Box>
            </Box>
          </div>
        </Slider>
      </Box>
    </Container>
  );
};

export default SectionPartners;
