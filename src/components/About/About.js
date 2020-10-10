import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import me from '../../images/me.jpg';
import hagia from '../../images/Gallery/1.jpg';
import budapest from '../../images/Gallery/2.jpg';
import tivoli from '../../images/Gallery/3.jpg';
import gamlastan from '../../images/Gallery/4.jpg';
import geirangerfjord from '../../images/Gallery/5.jpg';
import drottningholm from '../../images/Gallery/6.jpg';
import {
  AboutSection,
  AboutWrapper,
  AboutHeading,
  AboutContainer,
  AboutCard,
  AboutCardInfo,
  AboutCardImg,
  AboutCardPlan,
  AboutCardFeatures,
  AboutCardFeature,
  GalleryWrapper,
  GalleryHeading,
  GalleryContainer,
  GalleryCard,
  GalleryCardInfo,
  GalleryCardImg,
  GalleryCardFeatures
} from './About.elements';

function About() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <AboutSection>
        <AboutWrapper>
          <AboutHeading>ABOUT</AboutHeading>
          <AboutContainer>
            <AboutCard to='/about'>
              <AboutCardInfo>
                <AboutCardImg img={me} />
                <AboutCardPlan>Akhmad Thalibar Rifqi</AboutCardPlan>
                <AboutCardFeatures>Student at
                  <AboutCardFeature>Electronics Engineering Polytechnic Institute of Surabaya</AboutCardFeature>
                </AboutCardFeatures>
                <AboutCardFeatures>Study Program
                  <AboutCardFeature>Computer Engineering</AboutCardFeature>
                </AboutCardFeatures>
                <AboutCardFeatures>Department
                  <AboutCardFeature>Infromatics and Computer Engineering</AboutCardFeature>
                </AboutCardFeatures>
              </AboutCardInfo>
            </AboutCard>
            </AboutContainer>
        </AboutWrapper>
        
        <GalleryWrapper>
          <GalleryHeading>GALLERY</GalleryHeading>

          <GalleryContainer>
            <GalleryCard to='/about'>
              <GalleryCardInfo>
                <GalleryCardImg img={hagia} />
                <GalleryCardFeatures>... it was the world's largest building and an engineering marvel of its time.</GalleryCardFeatures>
              </GalleryCardInfo>
            </GalleryCard>
            </GalleryContainer>

            <GalleryContainer>
            <GalleryCard to='/about'>
              <GalleryCardInfo>
                <GalleryCardImg img={budapest} />
                <GalleryCardFeatures>... the ninth-largest city in the European Union by population within city limits.</GalleryCardFeatures>
              </GalleryCardInfo>
            </GalleryCard>
            </GalleryContainer>

            <GalleryContainer>
            <GalleryCard to='/about'>
              <GalleryCardInfo>
                <GalleryCardImg img={tivoli} />
                <GalleryCardFeatures>...the second-most popular seasonal theme park in the world.</GalleryCardFeatures>
              </GalleryCardInfo>
            </GalleryCard>
            </GalleryContainer>

            <GalleryContainer>
            <GalleryCard to='/about'>
              <GalleryCardInfo>
                <GalleryCardImg img={gamlastan} />
                <GalleryCardFeatures>"The Town between the Bridges"</GalleryCardFeatures>
              </GalleryCardInfo>
            </GalleryCard>
            </GalleryContainer>

            <GalleryContainer>
            <GalleryCard to='/about'>
              <GalleryCardInfo>
                <GalleryCardImg img={geirangerfjord} />
                <GalleryCardFeatures>it was listed as a UNESCO World Heritage Site, jointly with the Nærøyfjorden</GalleryCardFeatures>
              </GalleryCardInfo>
            </GalleryCard>
            </GalleryContainer>

            <GalleryContainer>
            <GalleryCard to='/about'>
              <GalleryCardInfo>
                <GalleryCardImg img={drottningholm} />
                <GalleryCardFeatures>"Queen's Islet"</GalleryCardFeatures>
              </GalleryCardInfo>
            </GalleryCard>
            </GalleryContainer>

        </GalleryWrapper>

      </AboutSection>
    </IconContext.Provider>
  );
}
export default About;