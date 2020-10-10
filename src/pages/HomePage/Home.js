import React from 'react'
import {InfoSection} from '../../components'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo, homeObjFive, homeObjSix} from './Data'
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />            
            <InfoSection {...homeObjTwo} />            
            <InfoSection {...homeObjThree} />       
            <InfoSection {...homeObjFour} />            
            <InfoSection {...homeObjFive} />            
            <InfoSection {...homeObjSix} />            
        </>
    )
}

export default Home
