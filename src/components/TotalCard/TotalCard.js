import "./TotalCard.scss";
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

const borderColors = {
  facebook: { backgroundColor: "#178FF5" },
  twitter: { backgroundColor: "#1DA1F2" },
  instagram: {
    background:
      "linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%)",
  },
  youtube: { backgroundColor: "#C4032B" },
};

const TotalCard = ({ media, mode }) => {
  let className = mode ? "total-card total-card--dark" : "total-card";

  return (
    <article className={className}>
      <div className="border-top" style={borderColors[media.icon]}></div>
      <div className="total-card__user">
        <img src={icons[media.icon]} alt="social media icon" />
        <span>{media.user}</span>
      </div>
      <div className="total-card__total-followers">
        <p className="total-card__total-followers--count">{media.total}</p>
        <p className="total-card__total-followers--text">
          {media.icon === "youtube" ? "subscribers" : "followers"}
        </p>
      </div>
      <div className="total-card__todays-followers">
        <img src={icons[media.today[1]]} alt="arrow icon" />
        <span>{media.today[0]} Today</span>
      </div>
    </article>
  );
};

export default TotalCard;
