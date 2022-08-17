import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";

const Section14DaysFree = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        minHeight: "500px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          bgcolor: "#eaf0fd",
        }}
      >
        {/* Пока только моб вариант */}
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "40px 0px",
          }}
        >
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                paddingBottom: "25px",
                fontSize: "2.5rem",
              }}
            >
              Попробуйте{" "}
              <span style={{ color: "#205edc", fontWeight: "700" }}>
                сейчас
              </span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                paddingBottom: "8px",
              }}
            >
              Оцените удобство и безграничные возможности.
            </Typography>

            <Typography
              sx={{ color: "#205edc", fontWeight: "700", fontSize: "26px" }}
            >
              14 дней бесплатно.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "0px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                margin: '20px 0',
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "#205edc",
                color: "#fff",
                padding: ".6em 2.8em",
                border: 0,
                borderRadius: "0.5em",
                fontSize: "1.3em",
                fontWeight: 600,
                textAlign: "center",
                boxShadow: "0 10px 25px rgb(39 136 251 / 60%)",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#2050d4",
                  boxShadow: "0 10px 25px rgb(39 136 251 / 60%)",
                },
              }}
            >
              Начать бесплатно
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section14DaysFree;
