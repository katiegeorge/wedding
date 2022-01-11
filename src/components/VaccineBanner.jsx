/** @jsx jsx */

import { jsx } from "theme-ui";

const VaccineBanner = () => {
  return (
    <div
        sx={{
            p: 3,
            backgroundColor: "yellow-light",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: ["65px", "0"],
            height: ["100px", "75px"],
            width: "100vw",
        }}
    >
        <strong sx={{ color: "blue-dark", fontWeight: "600" }}>
            For everyone's safety and peace of mind, we are requiring that all guests be vaccinated to attend the wedding.
        </strong>
    </div>
  );
};

export default VaccineBanner;
