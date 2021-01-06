import "./OverviewCard.scss";
import facebook from "../../assets/icons/icon-facebook.svg";
import upArrow from "../../assets/icons/icon-up.svg";

const OverviewCard = () => {
  return (
    <article className="overview-card overview-card--dark">
      <div className="media-title">
        <span className="media-title__text">Page Views</span>
        <img src={facebook} alt="facebook icon" className="media-title__icon" />
      </div>
      <div className="media-stats">
        <span className="media-stats__count">87</span>
        <span className="media-stats__percentage">
          <img src={upArrow} alt="up-arrow icon" />
          3%
        </span>
      </div>
    </article>
  );
};

export default OverviewCard;
