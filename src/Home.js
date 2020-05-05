import React from 'react';
import Menu from './Menu';
import Winner from './Winner';
import Banner from './Banner';
import MenuBox from './MenuBox';
import How from './How';
import Bar from './Bar';
function Home() {
  return (
    <div className="bg">
      <Menu />
      <Banner/>
      <MenuBox/>
      <Winner/>
      <How/>
      <Bar/>
    </div>
  );
}

export default Home;
