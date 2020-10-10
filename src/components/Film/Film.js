import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import bond from '../../images/Bond/Bond.png';
import little from '../../images/Little/ai.jpg';
import potter from '../../images/Potter/granger.png';
import {
  FilmSection,
  FilmWrapper,
  FilmHeading,
  FilmContainer,
  FilmCard,
  FilmCardInfo,
  FilmCardImg,
  FilmCardPlan,
  FilmCardFeatures,
  FilmCardFeature
} from './Film.elements';

function Film() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <FilmSection>
        <FilmWrapper>
          <FilmHeading>FILM</FilmHeading>

          <FilmContainer>

            <FilmCard to='/film'>
              <FilmCardInfo>
                <FilmCardImg img={bond} />
                <FilmCardPlan>James Bond</FilmCardPlan>
                <FilmCardFeatures>
                  <FilmCardFeature>The James Bond series focuses on a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. The character also known by the code number 007.</FilmCardFeature>
                </FilmCardFeatures>
                <Button primary>More</Button>
              </FilmCardInfo>
            </FilmCard>

            <FilmCard to='/film'>
              <FilmCardInfo>
                <FilmCardImg img={little} />
                <FilmCardPlan>Little Forest</FilmCardPlan>
                <FilmCardFeatures>
                  <FilmCardFeature>Little Forest is a Japanese slice of life manga series written and illustrated by Daisuke Igarashi. It was adapted into a two-part Japanese live action film. Part 1 film is "Little Forest: Summer/Autumn" and the part 2 film is "Little Forest: Winter/Spring".</FilmCardFeature>
                </FilmCardFeatures>
                <Button primary>More</Button>
              </FilmCardInfo>
            </FilmCard>

            <FilmCard to='/film'>
              <FilmCardInfo>
                <FilmCardImg img={potter} />
                <FilmCardPlan>Harry Potter</FilmCardPlan>
                <FilmCardFeatures>
                  <FilmCardFeature>Always...</FilmCardFeature>
                </FilmCardFeatures>
                <Button primary>More</Button>
              </FilmCardInfo>
            </FilmCard>

            </FilmContainer>

        </FilmWrapper>
      </FilmSection>
    </IconContext.Provider>
  );
}
export default Film;