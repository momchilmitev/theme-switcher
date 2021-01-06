import "./App.scss";
import React, { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import TotalCard from "../TotalCard/TotalCard";
import OverviewCard from "../OverviewCard/OverviewCard";

const socials = [
  {
    icon: "facebook",
    user: "@nathanf",
    total: 1987,
    today: [12, "up"],
    views: 87,
    viewsPercentage: [3, "up"],
    likes: 52,
    likesPercentage: [2, "down"],
  },
  {
    icon: "twitter",
    user: "@nathanf",
    total: 1044,
    today: [88, "up"],
    views: 117,
    viewsPercentage: [303, "up"],
    likes: 507,
    likesPercentage: [553, "up"],
  },
  {
    icon: "instagram",
    user: "@realnathanf",
    total: "11K",
    today: [1099, "up"],
    views: "52K",
    viewsPercentage: [1375, "up"],
    likes: 5462,
    likesPercentage: [2257, "up"],
  },
  {
    icon: "youtube",
    user: "Nathan F.",
    total: 8239,
    today: [144, "down"],
    views: 1407,
    viewsPercentage: [12, "down"],
    likes: 107,
    likesPercentage: [19, "down"],
  },
];

function App() {
  const [mode, toggleMode] = useState(false);
  let className = mode ? "app app--dark" : "app";
  const renderTotalContent = () => {
    return socials.map((media) => (
      <TotalCard key={media.total} media={media} mode={mode} />
    ));
  };

  const renderOverviewContent = () => {
    return socials.map((media) => {
      return (
        <React.Fragment key={media.total}>
          <OverviewCard
            key={media.views}
            icon={media.icon}
            views={media.views}
            likes=""
            percentages={media.viewsPercentage}
            mode={mode}
          />
          <OverviewCard
            key={media.likes}
            icon={media.icon}
            views=""
            likes={media.likes}
            percentages={media.likesPercentage}
            mode={mode}
          />
        </React.Fragment>
      );
    });
  };

  return (
    <div className={className}>
      <div
        className={
          mode ? "background-one background-one--dark" : "background-one"
        }
      ></div>
      <div
        className={
          mode ? "background-two background-two--dark" : "background-two"
        }
      ></div>
      <div className="container">
        <header className="header">
          <div className="title">
            <h1 className="title__text">Social Media Dashboard</h1>
            <p className="title__description">Total Followers: 23,004</p>
          </div>
          <div className="border"></div>
          <ToggleButton mode={mode} toggleMode={toggleMode} />
        </header>
        <main className="main">
          <section className="total">{renderTotalContent()}</section>
          <section className="overview">
            <h2 className="overview__title">Overview - Today</h2>
            {renderOverviewContent()}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
