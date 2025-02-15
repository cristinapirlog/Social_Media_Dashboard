import React from "react";
import "./SmallBox.css";

function SmallBox(props) {
  return (
    <div className="SmallBox">
      <p className="SmallBoxType">{props.type}</p>
      <p>
        <span className="SmallBoxLogo" style={props.iconColor}>
          <i className={props.logo}></i>
        </span>
      </p>
      <p className="SmallBoxSubscribers">{props.subscribersCount}</p>

      <p
        className={`SmallBoxDifference ${
          props.difference > 0 ? "SmallBoxPositive" : "SmallBoxNegative"
        }`}
      >
        <i
          className={`${
            props.difference > 0 ? "fa fa-caret-up" : "fa fa-caret-down"
          }`}
        ></i>
        {props.difference}%
      </p>
    </div>
  );
}
// const data = {
//   platforms: [
//     { facebook: { name: "nathanf", followers: 1987, difference: 12 } },
//     { twitter: { name: "nathanf", followers: 1044, difference: 99 } },
//     { instagram: { name: "realnathanf", followers: 11012, difference: 1099 } },
//     { youtube: { name: "Nathan F.", followers: 8239, difference: -144 } },
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

// const SmallBox = (props) => {
//   return data.events.map((item) => (
//     <div>
//       <p>{item.type}</p>
//       <img src={props.imgSmallBoxSrc} alt="icon"></img>
//       <p>{item.amount}</p>
//       <p>{item.modifier}</p>
//     </div>
//   ));
// };
export default SmallBox;
