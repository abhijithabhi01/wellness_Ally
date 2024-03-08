import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Header from "../Components/Header";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { useNavigate } from "react-router-dom";

export default function HealthIssue() {
  const navigate = useNavigate();

  const currentUrl = window.location.href;
  const url = currentUrl;
  const parts = url.split("/");
  const id = parts[parts.length - 1];
  console.log("hsfhs", id);

  const handleCardClick = (cardType) => {
    console.log(`Clicked on ${cardType} card`);
    if (cardType === "Symptom") {
      navigate(`/health-issue/Symptoms/?id=${id}`);
    } else if (cardType === "Exercise") {
      navigate(`/health-issue/Exercise/?id=${id}`);
    } else if (cardType === "Diet") {
      navigate(`/health-issue/Diet/?id=${id}`);
    } else if (cardType === "Products") {
      navigate(`/health-issue/Products/?id=${id}`);
    }
  };

  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <Card sx={{ maxWidth: 345 }} onClick={() => handleCardClick("Symptom")}>
          <CardHeader title="Symptom" />
          <CardMedia component="img" height="194" image={img1} alt="Image 1" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Description of the symptom and relevant information.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ maxWidth: 345 }}
          onClick={() => handleCardClick("Exercise")}
        >
          <CardHeader title="Exercise" />
          <CardMedia component="img" height="194" image={img2} alt="Image 2" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Information about exercise recommendations and tips.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }} onClick={() => handleCardClick("Diet")}>
          <CardHeader title="Diet" />
          <CardMedia component="img" height="194" image={img3} alt="Image 3" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Details about dietary considerations and suggestions.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ maxWidth: 345 }}
          onClick={() => handleCardClick("Products")}
        >
          <CardHeader title="Products" />
          <CardMedia component="img" height="194" image={img4} alt="Image 4" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Featured products or relevant information about products.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
