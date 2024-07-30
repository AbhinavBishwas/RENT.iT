  import React from 'react'
  import Banner from '../components/Banner'
  import AllBooks from './AllBooks'
import ExploreBooks from './ExploreBooks'
import Promotion from './Promotion'

  const Home = () => {
    return (
      <div >
        <Banner></Banner>
        <AllBooks ></AllBooks>
        <ExploreBooks></ExploreBooks>
        <Promotion></Promotion>
      </div>
    )
  }

  export default Home
