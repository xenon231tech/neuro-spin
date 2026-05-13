import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="app">
      <h1>NEURO SPIN</h1>

      <p className="subtitle">
        Cyberpunk NFT Spin Platform
      </p>

      <div className="cards">

        <div className="card">
          <h2>🎡 Spin Wheel</h2>
          <p>Spin for rare rewards</p>
        </div>

        <div className="card">
          <h2>🏆 Leaderboard</h2>
          <p>Top players ranking</p>
        </div>

        <div className="card">
          <h2>🛒 Marketplace</h2>
          <p>Buy & sell NFTs</p>
        </div>

      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
