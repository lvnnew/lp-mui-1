import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import { Stack } from "@mui/system";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        minHeight: "500px",
      }}
    >
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        marginTop={10}
        sx={{
          maxWidth: "1300px",
          padding: "60px",
        }}
      >
        <Grid container xs={12} md={8} alignItems='center' justifyContent='center'>
          <Typography
            variant="h6"
            fontFamily="Montserrat, sans-serif"
            textAlign="center"
            fontWeight={400}
            sx={{
              opacity: "0.4",
              paddingBottom: "10px",
            }}
          >
            CRM для образования
          </Typography>
          <Typography
            variant="h3"
            fontFamily="Montserrat, sans-serif"
            textAlign="center"
            lineHeight={1.2}
            fontWeight={600}
            fontSize="2.6rem"
            sx={{
              paddingTop: "20px",
              paddingBottom: "15px",
              color: '#231F20'
            }}
          >
            Развивайте ваш{" "}
            <span style={{ color: "#205edc", fontWeight: "700" }}>
              учебный центр
            </span>{" "}
            уже сегодня
          </Typography>
          <Stack
            mt={8}
            justifyContent="center"
            alignItems="center"
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Button
              variant="contained"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                bgcolor: "#205edc",
                width: "250px",
                padding: "16px",
                textTransform: "none",
                borderRadius: '10px',
                fontWeight: "600",
                "&:hover": {
                  bgcolor: "#2050d4",
                }
              }}
            >
              Начать бесплатно
            </Button>
            <Button
              variant="text"
              color="primary"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                width: "250px",
                padding: "16px",
                textTransform: "none",
                fontWeight: "400",
                "&:hover": {
                  textDecoration: 'underline',
                }
              }}
            >
              Посмотреть демо
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
