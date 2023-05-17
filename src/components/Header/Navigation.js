import React, { useState } from "react";
import LogoImg from "../../assets/logo.jpg";
import {
    NavWrapper,
    NavInnerWrapper,
    LeftWrapper,
    RightWrapper,
    Logo,
    NavLinkWrapper,
    NavLink,
    Hamburger,
    MobNavWrapper,
    MobNavLink,
} from "./NavStyles"

function Navbar() {
    const [openMobNav, setMobNav] = useState(false);

    return (
        <NavWrapper openMobNav={openMobNav}>
            <NavInnerWrapper>
                <LeftWrapper>
                    <Logo src={LogoImg}></Logo>
                </LeftWrapper>
                <RightWrapper>

                    <NavLinkWrapper>
                        <NavLink to="/"> Home</NavLink>
                        <NavLink to="#"> About</NavLink>
                        <NavLink to="#"> Contact</NavLink>
                        <NavLink to="#"> Pricing</NavLink>
                        <NavLink to="#"> Support</NavLink>
                        <Hamburger
                            onClick={() => {setMobNav((curr) => !curr);}}>
                            {openMobNav ? <>&#10005;</> : <> &#8801;</>}
                        </Hamburger>
                    </NavLinkWrapper>
                </RightWrapper>
            </NavInnerWrapper>

            {openMobNav && (
                <MobNavWrapper>
                    <MobNavLink to="/"> Home</MobNavLink>
                    <MobNavLink to="#"> About</MobNavLink>
                    <MobNavLink to="#"> Contact</MobNavLink>
                    <MobNavLink to="#"> Pricing</MobNavLink>
                    <MobNavLink to="#"> Support</MobNavLink>
                </MobNavWrapper>
            )}
        </NavWrapper>
    );
}

export default Navbar;
