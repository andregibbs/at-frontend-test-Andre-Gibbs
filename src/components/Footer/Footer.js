import React from "react";
import styled from 'styled-components';

export const FooterWrap = styled.div`
    text-align: center;
    border-top: 2px dashed #7897e9;
`
    
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    background: #eff6ff;
    color: black;
`
   
export const FooterText = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: bold;
`;
  
const Footer = () => {
  return (
    <FooterWrap>
    <Container>
      <FooterText>©2023 ACME Ltd</FooterText>
    </Container>
    </FooterWrap>
  );
};
export default Footer;