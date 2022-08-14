import React from "react";
import { Box, Grid, Typography } from "@mui/material";
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

const SectionCarousel = () => {
  const sectionItems = [
    {
      id: 1,
      icon: <TranslateOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px", }} />,
      sentence: "Языковые школы",
    },
    {
      id: 2,
      icon: <ToysOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px" }} />,
      sentence: "Центры детского развития",
    },
    {
      id: 3,
      icon: <MusicNoteOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px" }} />,
      sentence: "Музыкальные школы",
    },
    {
      id: 4,
      icon: <SmartToyOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px" }} />,
      sentence: "Робототехника",
    },
    {
      id: 5,
      icon: <SchoolOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px" }} />,
      sentence: "Подготовка к экзаменам",
    },
    {
      id: 6,
      icon: <FitnessCenterOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px" }} />,
      sentence: "Спортивные / Фитнес центры",
    },
    {
      id: 7,
      icon: <CodeOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px" }} />,
      sentence: "Программирование",
    },
    {
      id: 8,
      icon: <CalculateOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px" }} />,
      sentence: "Ментальная арифметика",
    },
    {
      id: 9,
      icon: <InsertPhotoOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px" }} />,
      sentence: "Школы искусства",
    },
    {
      id: 10,
      icon: <InsertEmoticonOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px" }} />,
      sentence: "Бьюти образование",
    },
    {
      id: 11,
      icon: <SportsSoccerOutlinedIcon sx={{ fontSize: 85, color: "#3c3c3c", padding: "20px 0px" }} />,
      sentence: "Футбольные клубы",
    },
  ];
  return (
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
          Идеально&nbsp;
        </span>
        для
      </Typography>
      <Grid
        container
        sx={{
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: '20px',
          paddingBottom: '100px',
        }}
      >
        {sectionItems.map((item) => (
          <Grid
            item
            key={item.id}
            sx={{
              textAlign: "center",
              margin: "8px !important",
            }}
          >
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                minWidth: 132,
                maxHeight: 205,
                maxWidth: 132,
                minHeight: 205,
                border: ".1px solid",
                borderRadius: "10px",
                borderColor: "#3c3c3c",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.icon}
              </Typography>
              <Typography
                sx={{
                  fontSize: ".9rem",
                  fontWeight: "700",
                  padding: '5px',
                  wordBreak: 'break-word'
                }}
              >
                {item.sentence}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SectionCarousel;
