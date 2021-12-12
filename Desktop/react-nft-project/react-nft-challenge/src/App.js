import React from 'react'
import Header from '../CollectionCard/Header'
import CollectionCard from '../components/CollectionCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Main from '../components/Main'

//yarn add axios

const App = () => {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.openseas.io/assets?asset_contract_address=0x20a0da316ef184679F51336604c8cE989CeD6Da6')
      console.log(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div>
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} />
            <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )}
    </div>
  )
}

export default App

