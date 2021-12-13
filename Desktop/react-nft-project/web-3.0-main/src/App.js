import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import HeroList from "./components/HeroList";
import Mein from "./components/Mein";

function App() {
  const [heroListData, setheroListData] = useState([]);
  const [selectedHero, setSelectedHero] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x387E7187Ac91638AF402F5aE08cbb375e97f752E&order_direction=asc"
      );
      /*  console.log(openseaData.data.assets); */
      setheroListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {heroListData.length > 0 && (
        <>
          <Mein heroListData={heroListData} selectedHero={selectedHero} />
          <HeroList
            heroListData={heroListData}
            setSelectedHero={setSelectedHero}
          />
        </>
      )}
    </div>
  );
}

export default App;
