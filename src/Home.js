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
      <Competition/>
      <Job/>
      <MenuBox/>
      <How/>
    </div>
  );
}

export default Home;
