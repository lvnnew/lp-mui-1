import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Binotel from "../images/partners/Binotel.png";
import СМС from "../images/partners/СМС-Визитка.png";
import Mango from "../images/partners/Mango_Office.png";
import myCool from "../images/partners/myCool.png";
import Pbx from "../images/partners/Pbx.png";
import rostelecom from "../images/partners/rostelecom.png";
import Wazzup from "../images/partners/Wazzup.png";
import Zadarma from "../images/partners/Zadarma.png";
import "../styles/animateMarquee.css";
import { Container } from "@mui/system";

const SectionPartners = () => {
  return (
    <Container>
      <Box
        sx={{
          minHeight: "500px",
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
            Быстрая и простая&nbsp;
          </span>
          интеграция
        </Typography>
        <Grid
          sx={{
            minHeight: "500px",
            paddingTop: "20px",
          }}
        >
          <Grid>
            <Box>
              <Box className="marquee">
                <div>
                  <img
                    src={Binotel}
                    alt="логотип"
                    style={{ marginRight: "80px", cursor: "pointer" }}
                  />

                  <img
                    src={СМС}
                    alt="логотип"
                    style={{ marginRight: "80px", cursor: "pointer" }}
                  />

                  <img
                    src={Mango}
                    alt="логотип"
                    style={{ marginRight: "80px", cursor: "pointer" }}
                  />

                  <img
                    src={myCool}
                    alt="логотип"
                    style={{ marginRight: "80px", cursor: "pointer" }}
                  />

                  <img
                    src={Pbx}
                    alt="логотип"
                    style={{ marginRight: "80px", cursor: "pointer" }}
                  />

                  <img
                    src={rostelecom}
                    alt="логотип"
                    style={{ marginRight: "80px", cursor: "pointer" }}
                  />

                  <img
                    src={Wazzup}
                    alt="логотип"
                    style={{ marginRight: "80px", cursor: "pointer" }}
                  />

                  <img
                    src={Zadarma}
                    alt="логотип"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SectionPartners;
