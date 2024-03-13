import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Header from "../Components/Header";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { useNavigate } from "react-router-dom";

const CardsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '50px',
  flexWrap: 'wrap',
});

const CustomCard = styled(Card)({
  maxWidth: 345,
  marginBottom: '20px',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.3)',
  },
});

export default function HealthIssue() {
  const navigate = useNavigate();

  const currentUrl = window.location.href;
  const parts = currentUrl.split("/");
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
      <div className="text-center mb-4">
        <h2>Preventions</h2>
      </div>

      <CardsContainer>
        <CustomCard onClick={() => handleCardClick("Symptom")}>
          <CardHeader title="Symptom" />
          <CardMedia component="img" height="194" image={img1} alt="Image 1" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Description of the symptom and relevant information.
            </Typography>
          </CardContent>
        </CustomCard>

        <CustomCard onClick={() => handleCardClick("Exercise")}>
          <CardHeader title="Exercise" />
          <CardMedia component="img" height="194" image={img2} alt="Image 2" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Information about exercise recommendations and tips.
            </Typography>
          </CardContent>
        </CustomCard>

        <CustomCard onClick={() => handleCardClick("Diet")}>
          <CardHeader title="Diet" />
          <CardMedia component="img" height="194" image={img3} alt="Image 3" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Details about dietary considerations and suggestions.
            </Typography>
          </CardContent>
        </CustomCard>

        <CustomCard onClick={() => handleCardClick("Products")}>
          <CardHeader title="Products" />
          <CardMedia component="img" height="194" image={img4} alt="Image 4" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Featured products or relevant information about products.
            </Typography>
          </CardContent>
        </CustomCard>
      </CardsContainer>
    </>
  );
}
