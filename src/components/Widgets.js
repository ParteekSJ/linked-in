import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Germany’s New Government Is Bringing Crypto Front and Center",
        "Top News - 42,854 Readers"
      )}
      {newsArticle(
        "Decentraland Virtual Land Plot Sells for Record $2.43 Million",
        "Top News - 78,201 Readers"
      )}
      {newsArticle(
        "Shiba Inu Up 18% Amid 1 Million SHIB Holders Milestone",
        "Top News - 3,700 Readers"
      )}
      {newsArticle(
        "How Ethereum NFT Project Nouns Is Building Open-Source IP",
        "Top News - 12,001 Readers"
      )}
    </div>
  );
}

export default Widgets;
