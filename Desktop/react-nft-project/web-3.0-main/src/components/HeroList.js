import React from "react";
import CollectionCard from "./CollectionCard";
import "./HeroList.css";
import soon from "../assets/header/logo.png";

function HeroList({ heroListData, setSelectedHero }) {
  return (
    <div className="heroList">
      {heroListData.map((hero) => (
        <div onClick={() => setSelectedHero(hero.token_id)}>
          <CollectionCard
            key={hero.token_id}
            id={hero.token_id}
            name={hero.name}
            traits={hero.traits}
            image={hero.image_original_url || soon}
          />
        </div>
      ))}
    </div>
  );
}

export default HeroList;
