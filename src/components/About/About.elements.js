import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AboutSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const AboutCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 450px;
  height: 700px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const AboutCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 650px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const AboutCardPlan = styled.h3`
  margin-bottom: 5px;
  margin-top: 60px;
  font-size: 24px;
`;

export const AboutCardFeatures = styled.ul`
  margin: 16px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const AboutCardFeature = styled.li`
  margin-bottom: 10px;
  color: #ffaa
`;

export const AboutCardImg = styled.div`
  background-image: url(${props => props.img});
  width: 100%;
  height: 100%;
`;

//////////////

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GalleryHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
  margin-top: 300px;
`;

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const GalleryCard = styled(Link)`
margin-top: 100px;
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 720px;
  height: 480px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const GalleryCardInfo = styled.div`
  flex-direction: column;
  height: 480px;
  padding: 12px;
  align-items: center;
  color: #fff;
`;

export const GalleryCardFeatures = styled.ul`
  margin: 16px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
`;

export const GalleryCardImg = styled.div`
  background-image: url(${props => props.img});
  width: 100%;
  height: 100%;
`;