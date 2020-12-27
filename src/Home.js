import React from 'react';
import Competition from './Competition';
import Banner from './Banner';
import MenuBox from './MenuBox';
import How from './How';
import Job from './Job';

function Home() {
  return (
    <div>
      <Banner/>
      <Job/>
      <Competition/>
      <MenuBox/>
      <How/>
    </div>
  );
}

export default Home;
