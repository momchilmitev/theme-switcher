import "./TotalCard.scss";
import facebook from "../../assets/icons/icon-facebook.svg";
import upArrow from "../../assets/icons/icon-up.svg";

const TotalCard = () => {
  return (
    <article className="total-card total-card--dark">
      <div className="total-card__user">
        <img src={facebook} alt="social media icon" />
        <span>@nathanf</span>
      </div>
      <div className="total-card__total-followers">
        <p className="total-card__total-followers--count">1987</p>
        <p className="total-card__total-followers--text">followers</p>
      </div>
      <div className="total-card__todays-followers">
        <img src={upArrow} alt="arrow icon" />
        <span>12 Today</span>
      </div>
    </article>
  );
};

export default TotalCard;
