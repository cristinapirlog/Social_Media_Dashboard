import React from "react";
import BigBox from "./BigBox";
import "./BigBoxGenerate.css";

function BigBoxGenerate() {
  return (
    <div className="BigBoxGenerate">
      <BigBox
        username="nathanf"
        logo="fa fa-facebook-square"
        subscribersCount={1987}
        socialType="Followers"
        difference="12"
        colorTop={{ borderTop: "hsl(208, 92%, 53%) solid 3px" }}
      />
      <BigBox
        username="nathanf"
        logo="fa fa-twitter-square"
        subscribersCount={1044}
        socialType="Followers"
        difference="99"
        colorTop={{ borderTop: "hsl(203, 89%, 53%) solid 3px" }}
      />
      <BigBox
        username="realnathanf"
        logo="fa fa-instagram"
        iconColor={{
          color: "hsl(329, 70%, 58%)",
        }}
        subscribersCount={11012}
        socialType="Followers"
        difference="1099"
        colorTop={{
          borderTop: "hsl(329, 70%, 58%) solid 3px",
        }}
      />
      <BigBox
        username="Nathan F."
        logo="fa fa-youtube-square"
        iconColor={{ color: "hsl(348, 97%, 39%)" }}
        subscribersCount={8239}
        socialType="Followers"
        difference="-144"
        colorTop={{ borderTop: "hsl(348, 97%, 39%) solid 3px" }}
      />
    </div>
  );
}
export default BigBoxGenerate;
