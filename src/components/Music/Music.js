import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import beatles from '../../images/Beatles/beatles2.jpg';
import u2 from '../../images/U2/u22.jpg';
import cranberries from '../../images/Cranberries/cranberries.jpg';
import paramore from '../../images/Paramore/paramore.jpg';
import dewa from '../../images/Dewa/dewa19.jpg';
import barasuara from '../../images/Barasuara/barasuara1.jpg';
import queen from '../../images/Queen/queen.jpg';
import taeyeon from '../../images/Taeyeon/taeyeon.jpg';
import taylor from '../../images/Taylor/taylor.jpg';
import {
  MusicSection,
  MusicWrapper,
  MusicHeading,
  MusicContainer,
  MusicCard,
  MusicCardInfo,
  MusicCardImg,
  MusicCardPlan,
  MusicCardFeatures,
  MusicCardFeature
} from './Music.elements';

function Music() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <MusicSection>
        <MusicWrapper>
          <MusicHeading>MUSIC</MusicHeading>

          <MusicContainer>

            <MusicCard to='/music'>
              <MusicCardInfo>
                <MusicCardImg img={beatles} />
                <MusicCardPlan>The Beatles</MusicCardPlan>
                <MusicCardFeatures>
                  <MusicCardFeature>The Beatles were an English rock band formed in Liverpool in 1960. The line-up of John Lennon, Paul McCartney, George Harrison and Ringo Starr led the band to be regarded as the foremost and most influential in history.</MusicCardFeature>
                </MusicCardFeatures>
                {/* <Button primary>More</Button> */}
              </MusicCardInfo>
            </MusicCard>

            <MusicCard to='/music'>
              <MusicCardInfo>
                <MusicCardImg img={u2} />
                <MusicCardPlan>U2</MusicCardPlan>
                <MusicCardFeatures>
                  <MusicCardFeature>U2 are an Irish rock band from Dublin, formed in 1976. The group consists of Bono (vocals), the Edge (guitar and backing vocals), Adam Clayton (bass guitar), and Larry Mullen Jr. (drums and percussion).</MusicCardFeature>
                </MusicCardFeatures>
                {/* <Button primary>More</Button> */}
              </MusicCardInfo>
            </MusicCard>

            <MusicCard to='/music'>
              <MusicCardInfo>
                <MusicCardImg img={cranberries} />
                <MusicCardPlan>The Cranberries</MusicCardPlan>
                <MusicCardFeatures>
                  <MusicCardFeature>The Cranberries were an Irish rock band formed in Limerick, Ireland in 1989 by lead singer Niall Quinn, guitarist Noel Hogan, bassist Mike Hogan, and drummer Fergal Lawler. Quinn was replaced as lead singer by Dolores O'Riordan in 1990.</MusicCardFeature>
                </MusicCardFeatures>
                {/* <Button primary>More</Button> */}
              </MusicCardInfo>
            </MusicCard>

            </MusicContainer>

            <MusicContainer>

            <MusicCard to='/music'>
              <MusicCardInfo>
                <MusicCardImg img={paramore} />
                <MusicCardPlan>Paramore</MusicCardPlan>
                <MusicCardFeatures>
                  <MusicCardFeature>Paramore is an American rock band from Franklin, Tennessee, formed in 2004. The band currently consists of lead vocalist Hayley Williams, guitarist Taylor York and drummer Zac Farro.</MusicCardFeature>
                </MusicCardFeatures>
                {/* <Button primary>More</Button> */}
              </MusicCardInfo>
            </MusicCard>

            <MusicCard to='/music'>
              <MusicCardInfo>
                <MusicCardImg img={dewa} />
                <MusicCardPlan>Dewa19</MusicCardPlan>
                <MusicCardFeatures>
                  <MusicCardFeature>Dewa 19 (Pronounced in Indonesian Dewa sembilan belas), often referred to as Dewa, were an Indonesian rock band originating from Surabaya, East Java. The band was formed in 1986 there have been a number of changes to the lineup and finally they were disbanded in 2011. Their last members lineup were: Ahmad Dhani, Andra, Agung Yudha, Yuke, & Once.</MusicCardFeature>
                </MusicCardFeatures>
                {/* <Button primary>More</Button> */}
              </MusicCardInfo>
            </MusicCard>

            <MusicCard to='/music'>
              <MusicCardInfo>
                <MusicCardImg img={barasuara} />
                <MusicCardPlan>Barasuara</MusicCardPlan>
                <MusicCardFeatures>
                  <MusicCardFeature>Barasuara is an Indonesian Alternative Rock band consists of Iga Massardi (Vocal / Guitar), Gerald Situmorang (Bass), TJ Kusuma (Guitar), Asteriska (Vocal), Puti Chitara (Vocal) and Marco Steffiano (Drum).</MusicCardFeature>
                </MusicCardFeatures>
                {/* <Button primary>More</Button> */}
              </MusicCardInfo>
            </MusicCard>
          
          </MusicContainer>

          <MusicContainer>

            <MusicCard to='/music'>
              <MusicCardInfo>
                <MusicCardImg img={taeyeon} />
                <MusicCardPlan>Taeyeon</MusicCardPlan>
                <MusicCardFeatures>
                  <MusicCardFeature>Kim Tae-yeon, known mononymously as Taeyeon, is a South Korean singer. She has been a member of SM Entertainment's girl group Girls' Generation since 2007,She released her debut album I in 2015.</MusicCardFeature>
                </MusicCardFeatures>
                {/* <Button primary>More</Button> */}
              </MusicCardInfo>
            </MusicCard>

            <MusicCard to='/music'>
              <MusicCardInfo>
                <MusicCardImg img={taylor} />
                <MusicCardPlan>Taylor Swift</MusicCardPlan>
                <MusicCardFeatures>
                  <MusicCardFeature>Taylor Alison Swift is an American singer-songwriter. Her narrative songwriting, which often centers around her personal life, has received widespread critical plaudits and media coverage. Her 2006 eponymous debut studio album was the longest-charting album of the 2000s on the Billboard 200.</MusicCardFeature>
                </MusicCardFeatures>
                {/* <Button primary>More</Button> */}
              </MusicCardInfo>
            </MusicCard>

            <MusicCard to='/music'>
              <MusicCardInfo>
                <MusicCardImg img={queen} />
                <MusicCardPlan>Queen</MusicCardPlan>
                <MusicCardFeatures>
                  <MusicCardFeature>Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass).</MusicCardFeature>
                </MusicCardFeatures>
                {/* <Button primary>More</Button> */}
              </MusicCardInfo>
            </MusicCard>

            </MusicContainer>

        </MusicWrapper>
      </MusicSection>
    </IconContext.Provider>
  );
}
export default Music;