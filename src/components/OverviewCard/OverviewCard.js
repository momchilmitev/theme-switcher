import "./OverviewCard.scss";
import facebook from "../../assets/icons/icon-facebook.svg";
import instagram from "../../assets/icons/icon-instagram.svg";
import twitter from "../../assets/icons/icon-twitter.svg";
import youtube from "../../assets/icons/icon-youtube.svg";
import upArrow from "../../assets/icons/icon-up.svg";
import downArrow from "../../assets/icons/icon-down.svg";

const icons = {
  facebook: facebook,
  twitter: twitter,
  instagram: instagram,
  youtube: youtube,
  up: upArrow,
  down: downArrow,
};

const OverviewCard = ({ icon, views, likes, percentages }) => {
  let text;

  switch (icon) {
    case "facebook":
      text = "Page Views";
      break;
    case "twitter":
      text = "Retweets";
      break;
    case "instagram":
      text = "Profile Views";
      break;
    case "youtube":
      text = "Total Views";
      break;
    default:
      text = "Unknown";
  }

  return (
    <article className="overview-card overview-card--dark">
      <div className="media-title">
        <span className="media-title__text">{views ? text : "Likes"}</span>
        <img
          src={icons[icon]}
          alt="facebook icon"
          className="media-title__icon"
        />
      </div>
      <div className="media-stats">
        <span className="media-stats__count">{views ? views : likes}</span>
        <span className="media-stats__percentage">
          <img src={icons[percentages[1]]} alt="up-arrow icon" />
          {percentages[0]}%
        </span>
      </div>
    </article>
  );
};

export default OverviewCard;
