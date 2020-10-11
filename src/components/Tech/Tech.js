import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import ai from '../../images/AI/ai.jpg';
import ml from '../../images/AI/ml.jpg';
import stadia from '../../images/AI/stadia.jpg';
import {
  TechSection,
  TechWrapper,
  TechHeading,
  TechContainer,
  TechCard,
  TechCardInfo,
  TechCardImg,
  TechCardPlan,
  TechCardFeatures,
  TechCardFeature
} from './Tech.elements';

function Tech() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <TechSection>
        <TechWrapper>
          <TechHeading>TECH</TechHeading>

          <TechContainer>

            <TechCard to='/tech'>
              <TechCardInfo>
                <TechCardImg img={ai} />
                <TechCardPlan>Artificial Intelligence</TechCardPlan>
                <TechCardFeatures>
                  <TechCardFeature>Artificial Intelligence (AI) refers to computers systems built to mimic human intelligence and perform tasks such as recognition of images, speech or patterns and decision making. AI can do these tasks faster and more accurately than humans.</TechCardFeature>
                </TechCardFeatures>
                {/* <Button primary>More</Button> */}
              </TechCardInfo>
            </TechCard>

            <TechCard to='/tech'>
              <TechCardInfo>
                <TechCardImg img={ml} />
                <TechCardPlan>Machine Learning</TechCardPlan>
                <TechCardFeatures>
                  <TechCardFeature>Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it learn for themselves.</TechCardFeature>
                </TechCardFeatures>
                {/* <Button primary>More</Button> */}
              </TechCardInfo>
            </TechCard>

            <TechCard to='/tech'>
              <TechCardInfo>
                <TechCardImg img={stadia} />
                <TechCardPlan>Google Stadia</TechCardPlan>
                <TechCardFeatures>
                  <TechCardFeature>Stadia is a cloud gaming service operated by multinational technology company Google. According to Google, it is capable of streaming video games in 4K resolution at 60 frames per second with support for high-dynamic-range, to players via the company's numerous data centers across the globe, provided they are using a sufficiently high-quality Internet connection.</TechCardFeature>
                </TechCardFeatures>
                {/* <Button primary>More</Button> */}
              </TechCardInfo>
            </TechCard>

            </TechContainer>

        </TechWrapper>
      </TechSection>
    </IconContext.Provider>
  );
}
export default Tech;