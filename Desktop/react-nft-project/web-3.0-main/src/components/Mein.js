import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import check from "../assets/owner/check.png";
import "./Main.css";

function Mein({ selectedHero, heroListData }) {
  const [activeHero, setActivHero] = useState(heroListData[1]);

  useEffect(() => {
    setActivHero(heroListData[selectedHero]);
  }, [heroListData, selectedHero]);
  console.log(activeHero.owner.profile_img_url);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="heroHighlight">
          <div className="heroContainer">
            <img
              className="selectedHero"
              src={activeHero?.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className="heroDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activeHero.name}
            <span className="itemNumber"> #{activeHero.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activeHero.owner.profile_img_url} />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activeHero.owner.address}</div>
                <div className="ownerHandle">
                  @AleksRG <img src={check} height="13px" />
                </div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mein;
