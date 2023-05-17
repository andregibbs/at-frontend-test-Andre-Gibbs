import styled from 'styled-components';

export const Container = styled.div`
    color: black;
    box-sizing: box;
`

export const Row = styled.div`
    display: flex;
    @media (max-width: 768px) {
        display: block;
      }

`
export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    border-right: 2px solid #7897e9;
    padding: 35px;
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        border-right: none;
        width: 100%
      }
`
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 35px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 100%;
        border-top: 2px solid #7897e9;
      }
`

export const TextLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;

    box-sizing: border-box;
    
    @media (max-width: 768px) {
        border-right: none;
        width: 100%
      }
`
export const ImageRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 100%;
      }
`

export const Placeholder = styled.img`
  padding: 0 25px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 25px 0;
  }

`;

export const List = styled.ul`
    padding-left: 25px;
    color: #194bd7;

`
export const ListItem = styled.li`
    margin-bottom: 15px;

    a {
        color: #194bd7;
    }
    
`
export const Heading = styled.h1`
  font-size: 3vh;
  margin-bottom: 15px;
`;

export const SmallHeading = styled.h2`
  font-size: 1.5vh;
  margin-bottom: 15px;

`;

export const HeaderLine = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0;
    font-weight: bold;;
`;

export const BigLetter = styled.span`
  font-size: 2.5vh;
  margin-bottom: 15px;

`;

export const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
`;

export const Quote = styled.span`
   padding: 10px;
   background: #eff6ff;
`;

export const ButtonWrapper = styled.div`
      margin-top: auto;
`;

export const Button = styled.button`
  font-size: 1rem;
  background: #3B64D5;
  background: linear-gradient(180deg, #3B64D5, #FFFFFF);
  box-shadow: 0 0 5px 3px #194bd7;
  color: white;
  border-radius: 7px;
  border: 2px solid white;
  padding: 3px;
  font-weight: bold;
  width: 260px;
  max-width: 100%;
  cursor: pointer;
`;