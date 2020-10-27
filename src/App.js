import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BigBoxGenerate from "./BigBoxGenerate";

import SmallBoxGenerate from "./SmallBoxGenerate";

function App() {
  return (
    <div className="App">
      <BigBoxGenerate />
      <div className="header-line4">Overview - Today</div>
      <SmallBoxGenerate />
    </div>
  );
}
// const data = {
//   platforms: [
//     {
//       facebook: {
//         imgSrc: "social-mediaImagesicon-facebook.svg",
//         name: "nathanf",
//         followers: 1987,
//         difference: 12,
//       },
//     },
//     {
//       twitter: {
//         imgSrc: "social-mediaImagesicon-twitter.svg",
//         name: "nathanf",
//         followers: 1044,
//         difference: 99,
//       },
//     },
//     {
//       instagram: {
//         imgSrc: "social-mediaImagesicon-instagram.svg",
//         name: "realnathanf",
//         followers: 11012,
//         difference: 1099,
//       },
//     },
//     {
//       youtube: {
//         youtube: "social-mediaImagesicon-youtube.svg",
//         name: "Nathan F.",
//         followers: 8239,
//         difference: -144,
//       },
//     },
//   ],
//   events: [
//     { platform: "facebook", type: "Page views", amount: 87, modifier: 3 },
//     { platform: "facebook", type: "Likes", amount: 52, modifier: -2 },
//     { platform: "instagram", type: "Likes", amount: 5462, modifier: 2257 },
//     {
//       platform: "instagram",
//       type: "Profile Views",
//       amount: 52150,
//       modifier: 1375,
//     },
//     { platform: "twitter", type: "Retweets", amount: 117, modifier: 303 },
//     { platform: "twitter", type: "Likes", amoount: 507, modifier: 553 },
//     { platform: "youtube", type: "Likes", amount: 107, modifier: -19 },
//     { platform: "youtube", type: "Total Views", amount: 1407, modifier: -12 },
//   ],
// };

// function App() {
//   return (
//     <div className="App">
//       <BigBox
//         imgSrc={data.platforms.imgSrc}
//         name={data.platforms.name}
//         followers={data.platforms.followers}
//         difference={data.platforms.difference}
//       ></BigBox>
//       <SmallBox
//         type={data.events.type}
//         amount={data.events.amount}
//         modifier={data.events.modifier}
//       ></SmallBox>
//     </div>
//   );
// }

export default App;
