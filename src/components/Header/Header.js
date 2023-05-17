import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"

const HeaderWrap = styled.div`
     border-bottom: 2px solid #7897e9;
`

const Header = () => (
    <HeaderWrap>
       <Navigation/>
    </HeaderWrap>
)

export default Header