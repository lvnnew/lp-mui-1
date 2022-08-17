import React from "react";
import { Grid, Typography, Box, } from "@mui/material";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import { Container } from "@mui/system";

const SectionAdvantages = () => {
  const sectionItems = [
    {
      id: 1,
      icon: (
        <RocketOutlinedIcon
          sx={{ fontSize: 25, color: "#205edc" }}
          color="primary"
        />
      ),
      title: "Рост клиентской базы",
      sentence:
        "Благодаря автоматизации продаж некоторые наши клиенты смогли увеличить приток учеников на 60%.",
    },
    {
      id: 2,
      icon: (
        <FavoriteOutlinedIcon
          sx={{ fontSize: 25, color: "#205edc" }}
          color="primary"
        />
      ),
      title: "Лояльность клиентов",
      sentence:
        "Ваши клиенты будут удовлетворены качественным сервисом, и будут чаще рекомендовать вас друзьям.",
    },
    {
      id: 3,
      icon: (
        <FlashOnOutlinedIcon
          sx={{ fontSize: 25, color: "#205edc" }}
          color="primary"
        />
      ),
      title: "Эффективность в делах",
      sentence:
        "Отслеживание работы педагогов и менеджеров, повышение качества обслуживания и удовлетворенности.",
    },
    {
      id: 4,
      icon: (
        <DataUsageOutlinedIcon
          sx={{ fontSize: 25, color: "#205edc" }}
          color="primary"
        />
      ),
      title: "Анализ и контроль",
      sentence:
        "Возможность реагировать на изменения показателей бизнеса и принимать управленческие решения.",
    },
    {
      id: 5,
      icon: (
        <SignalCellularAltOutlinedIcon
          sx={{ fontSize: 25, color: "#205edc" }}
          color="primary"
        />
      ),
      title: "Увеличение выручки",
      sentence:
        "Автоматические уведомления об уроках и оплатах, работа с должниками позволяют добиваться увеличения выручки.",
    },
  ];
  return (
    <Container
      sx={{
        maxWidth: "100%",
        minHeight: '100%',
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
        Вы&nbsp;
        <span style={{ color: "#205edc", fontWeight: "700" }}>
          получите
        </span>{" "}
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto 35px",
          paddingBottom: "100px",
          minHeight: "500px",
        }}
      >
        {sectionItems.map((item) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxHeight: "128px",
              maxWidth: "336px",
              margin: "80px,",
            }}
          >
            <Grid
              item
              xs={12}
              md={12}
              key={item.id}
              sx={{
                textAlign: "left",
              }}
            >
              <Container>
              <Typography
                sx={{
                  backgroundColor: "#e5edfb",
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  top: "40px",
                  left: "-50px",
                }}
              >
                {item.icon}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  color: "#205edc",
                  fontWeight: 700,
                  padding: "8px 0px",
                }}
              >
                {item.title}
              </Typography>
              <Typography >{item.sentence}</Typography>
              </Container>
            </Grid>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default SectionAdvantages;
