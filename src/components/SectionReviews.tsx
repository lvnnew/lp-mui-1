import { Typography, Box, Container, Grid, Card } from "@mui/material";
import f1 from "../images/reviews/f1.jpg";
import f2 from "../images/reviews/f2.jpg";
import f3 from "../images/reviews/f3.jpg";
import f4 from "../images/reviews/f4.jpg";
import f5 from "../images/reviews/f5.jpg";
import f6 from "../images/reviews/f6.jpg";
import f7 from "../images/reviews/f7.jpg";
import f8 from "../images/reviews/f8.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const SectionReviews = () => {
  const sectionItems = [
    {
      id: 1,
      count: "15K",
      sentence: "Посетителей в день",
    },
    {
      id: 2,
      count: "27",
      sentence: "Георгафия стран",
    },
    {
      id: 3,
      count: "#1",
      sentence: "Номер в рейтинге",
    },
  ];

  let settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    adaptiveHeight: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <>
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            minHeight: "100px",
            maxWidth: "1130px",
            margin: "0px auto",
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
            }}
          >
            <span style={{ color: "#205edc", fontWeight: "700" }}>
              Оценки&nbsp;
            </span>
            и результаты
          </Typography>
          <Typography
            variant="h6"
            fontFamily="Montserrat, sans-serif"
            textAlign="center"
            fontWeight={400}
            sx={{
              opacity: "0.4",
              paddingBottom: "40px",
            }}
          >
            Более 5000 организаций успешно используют ALFACRM в работе каждый
            день
          </Typography>
          <Grid
            container
            sx={{
              minHeight: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            {sectionItems.map((item) => (
              <Grid
                item
                key={item.id}
                sx={{
                  textAlign: "center",
                  margin: "0px 40px !important",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "40px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      zIndex: "-1",
                      width: "90px",
                      height: "130px",
                      background: "#eff3fc",
                      opacity: ".7",
                      borderRadius: "66% 34% 61% 39% / 82% 82% 18% 18%",
                      position: 'absolute',
                      top: '20px',
                      left: '60px'
                    }}
                  ></div>
                  <Typography
                    sx={{
                      fontSize: "4.6rem",
                      fontWeight: "600",
                      fontFamily: "Montserrat, sans-serif",
                      color: "#205edc",
                      zIndex: "10",
                    }}
                  >
                    {item.count}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      padding: "5px",
                      wordBreak: "break-word",
                      opacity: ".9",
                    }}
                  >
                    {item.sentence}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container sx={{ padding: "20px" }}>
        <Slider {...settings}>
          <div>
            <Box
              sx={{
                padding: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0px 0px 3px -1px #000000",
                transition: "all .3s",
                ":hover": {
                  boxShadow: "0px 0px 10px -2px #000000",
                  transition: "all .3s",
                },
              }}
            >
              <Box>
                <div style={{ display: "flex" }}>
                  <img
                    src={f1}
                    style={{
                      marginRight: "10px",
                      width: "40px",
                      height: "40px",
                      border: "5px solid #205edc",
                      borderRadius: "50%",
                    }}
                    alt="картинка"
                  />
                  <Box>
                    <Typography sx={{ fontSize: ".9rem", fontWeight: "700" }}>
                      Денис Салахиев
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        opacity: "0.4",
                        fontWeight: "500",
                      }}
                    >
                      Центр скорочтения <br /> Москва
                    </Typography>
                  </Box>
                </div>
                <Box
                  sx={{
                    color: "#ffd400",
                    marginTop: "10px",
                    fontSize: "1.6rem",
                  }}
                >
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </Box>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Эстетически приятно работать и отлично выглядит, логически
                  понятна. Поддержка всегда на связи. Пока это лучшая система,
                  что я видел для учебных центров
                </Typography>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                padding: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0px 0px 3px -1px #000000",
                transition: "all .3s",
                ":hover": {
                  boxShadow: "0px 0px 10px -2px #000000",
                  transition: "all .3s",
                },
              }}
            >
              <Box>
                <div style={{ display: "flex" }}>
                  <img
                    src={f2}
                    style={{
                      marginRight: "10px",
                      width: "40px",
                      height: "40px",
                      border: "5px solid #205edc",
                      borderRadius: "50%",
                    }}
                    alt="картинка"
                  />
                  <Box>
                    <Typography sx={{ fontSize: ".9rem", fontWeight: "700" }}>
                      Avenue
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        opacity: "0.4",
                        fontWeight: "500",
                      }}
                    >
                      Курсы программирования <br /> Москва
                    </Typography>
                  </Box>
                </div>
                <Box
                  sx={{
                    color: "#ffd400",
                    marginTop: "10px",
                    fontSize: "1.6rem",
                  }}
                >
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </Box>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Пользуемся ALFACRM уже 2 года на 3х филиалах. Ведем в ней все:
                  оплаты студентов, учет проведенных занятий, зп.
                  преподавателей. Сервис просто супер!
                </Typography>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                padding: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0px 0px 3px -1px #000000",
                transition: "all .3s",
                ":hover": {
                  boxShadow: "0px 0px 10px -2px #000000",
                  transition: "all .3s",
                },
              }}
            >
              <Box>
                <div style={{ display: "flex" }}>
                  <img
                    src={f3}
                    style={{
                      marginRight: "10px",
                      width: "40px",
                      height: "40px",
                      border: "5px solid #205edc",
                      borderRadius: "50%",
                    }}
                    alt="картинка"
                  />
                  <Box>
                    <Typography sx={{ fontSize: ".9rem", fontWeight: "700" }}>
                      Альберт Нагимов
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        opacity: "0.4",
                        fontWeight: "500",
                      }}
                    >
                      ТС Продвижение <br /> Казань
                    </Typography>
                  </Box>
                </div>
                <Box
                  sx={{
                    color: "#ffd400",
                    marginTop: "10px",
                    fontSize: "1.6rem",
                  }}
                >
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </Box>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Одна из лучших CRM систем для учебных центров. Чат
                  техподдержки прямо в системе вдвойне радует. Есть интеграции с
                  телефонией, онлайн кассой, эквайрингом. Дизайн прост, в общем,
                  минимализм.
                </Typography>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                padding: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0px 0px 3px -1px #000000",
                transition: "all .3s",
                ":hover": {
                  boxShadow: "0px 0px 10px -2px #000000",
                  transition: "all .3s",
                },
              }}
            >
              <Box>
                <div style={{ display: "flex" }}>
                  <img
                    src={f4}
                    style={{
                      marginRight: "10px",
                      width: "40px",
                      height: "40px",
                      border: "5px solid #205edc",
                      borderRadius: "50%",
                    }}
                    alt="картинка"
                  />
                  <Box>
                    <Typography sx={{ fontSize: ".9rem", fontWeight: "700" }}>
                      Ольга Ланцева
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        opacity: "0.4",
                        fontWeight: "500",
                      }}
                    >
                      ДРЦ Рукавичка <br /> Караганда
                    </Typography>
                  </Box>
                </div>
                <Box
                  sx={{
                    color: "#ffd400",
                    marginTop: "10px",
                    fontSize: "1.6rem",
                  }}
                >
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </Box>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Широкие возможности кастомизации, очень отзывчивая и быстрая
                  служба поддержки, интуитивно понятный интерфейс, система
                  совершенствуется.
                </Typography>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                padding: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0px 0px 3px -1px #000000",
                transition: "all .3s",
                ":hover": {
                  boxShadow: "0px 0px 10px -2px #000000",
                  transition: "all .3s",
                },
              }}
            >
              <Box>
                <div style={{ display: "flex" }}>
                  <img
                    src={f5}
                    style={{
                      marginRight: "10px",
                      width: "40px",
                      height: "40px",
                      border: "5px solid #205edc",
                      borderRadius: "50%",
                    }}
                    alt="картинка"
                  />
                  <Box>
                    <Typography sx={{ fontSize: ".9rem", fontWeight: "700" }}>
                      Алена Ларина
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        opacity: "0.4",
                        fontWeight: "500",
                      }}
                    >
                      Центр ментальной арифметики <br /> Сургут
                    </Typography>
                  </Box>
                </div>
                <Box
                  sx={{
                    color: "#ffd400",
                    marginTop: "10px",
                    fontSize: "1.6rem",
                  }}
                >
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </Box>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "sans-serif",
                  }}
                >
                  3 года мучились без CRM, обходились таблицами и сторонними
                  сервисами рассылок, тратили уйму денег. Мы приняли верное
                  решение, и перешли на альфу. Сейчас мы просто радуемся)))
                </Typography>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                padding: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0px 0px 3px -1px #000000",
                transition: "all .3s",
                ":hover": {
                  boxShadow: "0px 0px 10px -2px #000000",
                  transition: "all .3s",
                },
              }}
            >
              <Box>
                <div style={{ display: "flex" }}>
                  <img
                    src={f6}
                    style={{
                      marginRight: "10px",
                      width: "40px",
                      height: "40px",
                      border: "5px solid #205edc",
                      borderRadius: "50%",
                    }}
                    alt="картинка"
                  />
                  <Box>
                    <Typography sx={{ fontSize: ".9rem", fontWeight: "700" }}>
                      Яна Снитко
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        opacity: "0.4",
                        fontWeight: "500",
                      }}
                    >
                      Академия дыхания <br /> Владивосток
                    </Typography>
                  </Box>
                </div>
                <Box
                  sx={{
                    color: "#ffd400",
                    marginTop: "10px",
                    fontSize: "1.6rem",
                  }}
                >
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </Box>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Алгоритмы использования продуманы, видно, что дорабатывается
                  исходя из опыта управления клубом. Удобно работать с
                  абонементами и клиентской базой. Общее впечатление отличное.
                </Typography>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                padding: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0px 0px 3px -1px #000000",
                transition: "all .3s",
                ":hover": {
                  boxShadow: "0px 0px 10px -2px #000000",
                  transition: "all .3s",
                },
              }}
            >
              <Box>
                <div style={{ display: "flex" }}>
                  <img
                    src={f7}
                    style={{
                      marginRight: "10px",
                      width: "40px",
                      height: "40px",
                      border: "5px solid #205edc",
                      borderRadius: "50%",
                    }}
                    alt="картинка"
                  />
                  <Box>
                    <Typography sx={{ fontSize: ".9rem", fontWeight: "700" }}>
                      Данил Искандеров
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        opacity: "0.4",
                        fontWeight: "500",
                      }}
                    >
                      ДЦ Uniqum kids <br /> Екатеринбург
                    </Typography>
                  </Box>
                </div>
                <Box
                  sx={{
                    color: "#ffd400",
                    marginTop: "10px",
                    fontSize: "1.6rem",
                  }}
                >
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </Box>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Решение о переходе принято по причинам: 1. Наличие личного
                  кабинета для учеников. 2. Добавление доп опций в любое время.
                  3. Приятно удивило интуитивное меню и функции.
                </Typography>
              </Box>
            </Box>
          </div>
          <div>
            <Box
              sx={{
                padding: "40px",
                margin: "30px",
                display: "flex",
                background: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0px 0px 3px -1px #000000",
                transition: "all .3s",
                ":hover": {
                  boxShadow: "0px 0px 10px -2px #000000",
                  transition: "all .3s",
                },
              }}
            >
              <Box>
                <div style={{ display: "flex" }}>
                  <img
                    src={f8}
                    style={{
                      marginRight: "10px",
                      width: "40px",
                      height: "40px",
                      border: "5px solid #205edc",
                      borderRadius: "50%",
                    }}
                    alt="картинка"
                  />
                  <Box>
                    <Typography sx={{ fontSize: ".9rem", fontWeight: "700" }}>
                      Станислав Волков
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        opacity: "0.4",
                        fontWeight: "500",
                      }}
                    >
                      ESCourses <br /> Липецк
                    </Typography>
                  </Box>
                </div>
                <Box
                  sx={{
                    color: "#ffd400",
                    marginTop: "10px",
                    fontSize: "1.6rem",
                  }}
                >
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </Box>
                <Typography
                  sx={{
                    paddingTop: "25px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Выбирал исходя из совместимости с языковыми школами. При
                  сравнении данная crm система выигрывает по многим показателям.
                </Typography>
              </Box>
            </Box>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default SectionReviews;
