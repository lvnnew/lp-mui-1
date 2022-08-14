import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Binotel from "../images/Binotel.png";
import СМС from "../images/СМС-Визитка.png";
import Mango from "../images/Mango_Office.png";
import myCool from "../images/myCool.png";
import Pbx from "../images/Pbx.png";
import rostelecom from "../images/rostelecom.png";
import Wazzup from "../images/Wazzup.png";
import Zadarma from "../images/Zadarma.png";
import "../styles/animateMarquee.css";

const SectionPartners = () => {
  return (
    <Box
      sx={{
        minHeight: "500px",
        maxWidth: "100%",
        paddingTop: '50px'
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
        sx={{
          minHeight: "500px",
          paddingTop: "20px",
          paddingBottom: "100px",
          overflow: "hidden",
        }}
      >
        <Grid>
          <Box>
            <Box className="marquee">
              <div>
                <img
                  src={Binotel}
                  alt="логотип"
                  style={{ marginRight: "80px", cursor: "pointer"}}
                />

                <img
                  src={СМС}
                  alt="логотип"
                  style={{ marginRight: "80px", cursor: "pointer"}}
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
  );
};

export default SectionPartners;
