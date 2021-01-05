import "./App.scss";
import ToggleButton from "../ToggleButton/ToggleButton";
import TotalCard from "../TotalCard/TotalCard";
import OverviewCard from "../OverviewCard/OverviewCard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="title">
            <h1 className="title__text">Social Media Dashboard</h1>
            <p className="title__description">Total Followers: 23,004</p>
          </div>
          <ToggleButton />
        </header>
        <main className="main">
          <section className="total">
            <TotalCard />
            <TotalCard />
          </section>
          <section className="overview">
            <h2 className="overview__title">Overview - Today</h2>
            <OverviewCard />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
