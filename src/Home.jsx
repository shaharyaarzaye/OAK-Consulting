import React from 'react';
import WhoweAre from './components/WhoweAre';
import OurRoots from './components/OurRoots';
import OurTeam from './components/OurTeam';
import WhatweDo from './components/WhatweDo';
import WhyOAK from './components/WhyOAK';
import OurReach from './components/OurReach';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Recognition from './components/Recognition';
import Contact from './components/Contact';

function Home() {
  return (
    <div>
        <div className='h-screen bg-zinc-900 '>
            <h1 className='text-center'>Space For Video</h1>
        </div>
      <WhoweAre />
      <OurRoots />
      <OurTeam />
      <WhatweDo />
      <WhyOAK />
      <OurReach />
      <Clients />
      <Testimonials />
      <Recognition />
      <Contact />
    </div>
  );
}

export default Home;
