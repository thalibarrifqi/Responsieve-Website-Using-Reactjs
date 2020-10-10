import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import {Button} from '../../globalStyles'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavItem, 
    NavMenu, 
    NavLinks,
    NavItemBtn,
    NavBtnLink} from './Navbar.elements'
import {IconContext} from 'react-icons/lib'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
         <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={closeMobileMenu}>
                    <NavIcon />
                    UpperStairs
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/music'>
                            Music
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/film'>
                            Film
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/sport'>
                            Sport
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/tech'>
                            Tech
                        </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/about">
                                <Button primary>
                                    ABOUT
                                </Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to="/about">
                                <Button fontBig primary>
                                    ABOUT
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
         </Nav>
        </IconContext.Provider>           
        </>
    )
}

export default Navbar
