import React from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../../pop-ups/MainHeader";
import { images  } from "../../../Constants/constants";
const Card = () => {
  const { data } = useParams();
  let text = data.split("-");
  const userImage = {
    Skew: images[0],
    Robert: images[1],
    jonathan: images[2],
    Saliva: images[3],
    Newton: images[4],
    Fredrick: images[5],
    Elli: images[6],
  };

  return (
    <div className="dashboard">
      <MainHeader title={text[0]}>{text[1]} </MainHeader>
      <div className="image">
        {
          userImage.map((data, index) => {
            return (
              <img key={index} src={data} alt={data} height={50} />
            );
          })
        }
      </div>
    </div>
  );
};

export default Card;
