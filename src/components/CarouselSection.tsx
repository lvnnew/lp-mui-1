import React from "react";
import { Grid, Typography } from "@mui/material";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import ToysOutlinedIcon from "@mui/icons-material/ToysOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CarouselSection = () => {
  return (
    <>
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
        <span style={{ color: "#205edc", fontWeight: "700" }}>Идеально</span>{" "}
        для
      </Typography>
      <p style={{ textAlign: "center", color: "red" }}>
        {" "}
        Анимация карусели еще не реализованна ;(
      </p>
      <Grid
        xs={6}
        md={8}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          paddingBottom: "150px",
        }}
      >
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <TranslateOutlinedIcon sx={{ fontSize: 100, color: "#000000" }} />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Языковые школы
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px !important",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <ToysOutlinedIcon sx={{ fontSize: 100, color: "#000000" }} />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Центры детского развития
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px !important",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <MusicNoteOutlinedIcon sx={{ fontSize: 100, color: "#000000" }} />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Музыкальные школы
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px !important",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <SmartToyOutlinedIcon sx={{ fontSize: 100, color: "#000000" }} />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Робототехника
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px !important",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <SchoolOutlinedIcon sx={{ fontSize: 100, color: "#000000" }} />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Подготовка к экзаменам
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px !important",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <FitnessCenterOutlinedIcon
              sx={{ fontSize: 100, color: "#000000" }}
            />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Спортивные / Фитнес центры
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px !important",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <CodeOutlinedIcon sx={{ fontSize: 100, color: "#000000" }} />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Программирование
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px !important",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <CalculateOutlinedIcon sx={{ fontSize: 100, color: "#000000" }} />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Ментальная арифметика
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px !important",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <InsertPhotoOutlinedIcon sx={{ fontSize: 100, color: "#000000" }} />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Школы искусства
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px !important",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <InsertEmoticonOutlinedIcon
              sx={{ fontSize: 100, color: "#000000" }}
            />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Бьюти образование
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 163,
            maxHeight: 188,
            maxWidth: 163,
            border: ".1px solid",
            borderRadius: "10px",
            margin: "8px !important",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <SportsSoccerOutlinedIcon
              sx={{ fontSize: 100, color: "#000000" }}
            />
            <Typography
              sx={{
                fontSize: ".9rem",
                paddingTop: "20px",
              }}
            >
              Футбольные клубы
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default CarouselSection;
