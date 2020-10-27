import React from "react";
import SmallBox from "./SmallBox";
import "./SmallBoxGenerate.css";
import "./SmallBox.css";

function SmallBoxGenerate() {
  return (
    <div className="SmallBoxGenerate">
      <SmallBox
        type="Page Views"
        logo="fa fa-facebook-square"
        subscribersCount={87}
        difference="3"
      />
      <SmallBox
        type="Likes"
        logo="fa fa-facebook-square"
        subscribersCount={52}
        difference="-2"
      />
      <SmallBox
        type="Likes"
        logo="fa fa-instagram"
        subscribersCount={5462}
        iconColor={{
          color: "hsl(329, 70%, 58%)",
        }}
        difference="2257"
      />
      <SmallBox
        type="Profile Views"
        logo="fa fa-instagram"
        subscribersCount={52000}
        iconColor={{
          color: "hsl(329, 70%, 58%)",
        }}
        difference="1375"
      />
      <SmallBox
        type="Retweets"
        logo="fa fa-twitter-square"
        subscribersCount={117}
        difference="303"
      />
      <SmallBox
        type="Likes"
        logo="fa fa-twitter-square"
        subscribersCount={507}
        difference="553"
      />
      <SmallBox
        type="Likes"
        logo="fa fa-youtube-square"
        subscribersCount={107}
        iconColor={{ color: "hsl(348, 97%, 39%)" }}
        difference="-19"
      />
      <SmallBox
        type="Total Views"
        logo="fa fa-youtube-square"
        subscribersCount={1407}
        iconColor={{ color: "hsl(348, 97%, 39%)" }}
        difference="-12"
      />
    </div>
  );
}
export default SmallBoxGenerate;
