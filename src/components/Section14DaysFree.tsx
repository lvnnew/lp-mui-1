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
                minWidth: "240px !important",
                fontSize: "18px",
                fontWeight: "700",
                background: "#205edc",
                textTransform: "none",
                borderRadius: "10px",
                padding: "14px",
                marginTop: "50px",
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
