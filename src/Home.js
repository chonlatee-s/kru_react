import React from 'react';
import Banner from './Banner';
import MenuBox from './MenuBox';
import How from './How';
function Home() {
  return (
    <div>
      <Banner/>
      <MenuBox/>
      {/* <Competition/> */}
      <How/>
    </div>
  );
}

export default Home;
