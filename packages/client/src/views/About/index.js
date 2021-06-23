import React from 'react';

import JobReview from 'src/components/JobReview';
import AboutText from './AboutText';
import JobAgency from 'src/components/JobAgency';
import TeamExpert from './TeamExpert';
import AboutSlider from './AboutSlider';
import CoreValue from './CoreValue';

const About = () => {
  return (
    <>
      <AboutSlider />
      <AboutText />
      <CoreValue />
      <JobAgency />
      <TeamExpert />
      <JobReview />
    </>
  );
};

export default About;
