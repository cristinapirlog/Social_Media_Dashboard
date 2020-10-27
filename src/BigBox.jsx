import React from "react";
import "./BigBox.css";

function BigBox(props) {
  return (
    <div className="BigBox" style={props.colorTop}>
      <p>
        <span className="BigBoxLogo" style={props.iconColor}>
          <i className={props.logo}></i>
        </span>
        <span className="BigBoxUsername">{props.username}</span>
      </p>
      <p className="BigBoxSubscribers">{props.subscribersCount}</p>
      <p className="BigBoxSocialType">{props.socialType}</p>
      <p
        className={`BigBoxDifference ${
          props.difference > 0 ? "BigBoxPositive" : "BigBoxNegative"
        }`}
      >
        <i
          className={`${
            props.difference > 0 ? "fa fa-caret-up" : "fa fa-caret-down"
          }`}
        ></i>
        {props.difference} Today
      </p>
    </div>
  );
}

// const data = {
//   platforms: [
//     {
//       facebook: {
//         imgSrc:
//           "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png",
//         name: "nathanf",
//         followers: 1987,
//         difference: 12,
//       },
//     },
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

// const BigBox = (props) => {
//   return data.platforms.map((item) => (
//     <div className="BigBox">
//       {console.log(item[Object.keys(item)[0]])}
//       <img src={item[Object.keys(item)[0]].imgSrc} alt="icon"></img>
//       <p>{item.name}</p>
//       <p>{item.followers}</p>
//       <p>F O L L O W E R S</p>
//       <p>{item.difference} Today</p>
//     </div>
//   ));
// };

export default BigBox;
