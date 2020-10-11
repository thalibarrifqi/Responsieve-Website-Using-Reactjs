import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import kaka from '../../images/Sport/kaka.jpg';
import messi from '../../images/Sport/messi.jpg';
import salah from '../../images/Sport/salah.jpg';

import {
  SportSection,
  SportWrapper,
  SportHeading,
  SportContainer,
  SportCard,
  SportCardInfo,
  SportCardImg,
  SportCardPlan,
  SportCardFeatures,
  SportCardFeature
} from './Sport.elements';

function Sport() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <SportSection>
        <SportWrapper>
          <SportHeading>SPORT</SportHeading>

          <SportContainer>

            <SportCard to='/sport'>
              <SportCardInfo>
                <SportCardImg img={kaka} />
                <SportCardPlan>Ricardo Kaka</SportCardPlan>
                <SportCardFeatures>
                  <SportCardFeature>Ricardo Izecson dos Santos Leite commonly known as Kaká or Ricardo Kaká, is a Brazilian retired professional footballer who played as an attacking midfielder. Owing to his performances at Milan where he was an elite playmaker, Kaká is widely considered one of the best players of his generation. With success at club and international level, he is one of eight players to have won the FIFA World Cup, the UEFA Champions League and the Ballon d'Or.</SportCardFeature>
                </SportCardFeatures>
                {/* <Button primary>More</Button> */}
              </SportCardInfo>
            </SportCard>

            <SportCard to='/sport'>
              <SportCardInfo>
                <SportCardImg img={messi} />
                <SportCardPlan>Lionel Messi</SportCardPlan>
                <SportCardFeatures>
                  <SportCardFeature>Lionel Andrés Messi is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team. Often considered the best player in the world and regarded by many as the greatest player of all time.</SportCardFeature>
                </SportCardFeatures>
                {/* <Button primary>More</Button> */}
              </SportCardInfo>
            </SportCard>

            <SportCard to='/sport'>
              <SportCardInfo>
                <SportCardImg img={salah} />
                <SportCardPlan>Mohammed Salah</SportCardPlan>
                <SportCardFeatures>
                  <SportCardFeature>Mohamed Salah Hamed Mahrous Ghaly is an Egyptian professional footballer who plays as a forward for Premier League club Liverpool and the Egypt national team. Considered one of the best players in the world, he is known for his finishing, dribbling, and speed.</SportCardFeature>
                </SportCardFeatures>
                {/* <Button primary>More</Button> */}
              </SportCardInfo>
            </SportCard>

            </SportContainer>

        </SportWrapper>
      </SportSection>
    </IconContext.Provider>
  );
}
export default Sport;