import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    LeftSide,
    RightSide,
    Heading,
    SmallHeading,
    Text,
    Row,
    TextLeft,
    Quote,
    ImageRight,
    Placeholder,
    Button,
    List,
    ListItem,
    BigLetter,
    ButtonWrapper,
    HeaderLine
} from "./LayoutStyles"


const Layout = () => {
    return (
        <Container>
            <Row>
                <LeftSide>
                    <Heading>An interesting article</Heading>
                    <SmallHeading><BigLetter>L</BigLetter>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed est magna. Aliquam erat volutpat. Aliquam facilisis mollis nunc ac pharetra. Sed vel luctus orci. Suspendisse ex eros, efficitur in vulputate nec, porta ac eros. Sed venenatis posuere aliquet.</SmallHeading>
                    <HeaderLine>HOW DO WE DO IT</HeaderLine>
                    <Row>
                        <TextLeft>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum orci nulla, ac euismod neque fermentum nec. Morbi at neque lectus. Pellentesque purus felis, efficitur a velit et, auctor hendrerit lectus. Proin porttitor non felis sagittis ultrices. Ut id fringilla diam, vel mattis tortor. Fusce libero lacus, mattis nec ullamcorper quis, sodales non metus. Nunc purus libero, aliquam at maximus ac, blandit eu diam. Donec et iaculis risus. Maecenas quis diam vel tellus porttitor iaculis.</Text>
                            <Text>One person said:</Text>
                            <Quote>"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Donec sed est magna. Aliquam erat volutpat."</Quote>
                        </TextLeft>
                        <ImageRight>
                            <Placeholder src="https://placehold.co/300x150"></Placeholder>
                        </ImageRight>
                    </Row>
                </LeftSide>
                <RightSide>
                    <Heading>More like this</Heading>
                    <List>
                        <ListItem><Link to="#">Another interesting article</Link></ListItem>
                        <ListItem><Link to="#">And Another interesting article</Link></ListItem>
                        <ListItem><Link to="#">Not that interesting article</Link></ListItem>
                        <ListItem><Link to="#">Kinda interesting article</Link></ListItem>
                        <ListItem><Link to="#">Might be interesting article</Link></ListItem>
                        <ListItem><Link to="#">Not interesting article</Link></ListItem>
                    </List>
                    <ButtonWrapper>
                        <Link to="#">
                        <Button> ☆ Sign up to our newsletter ☆</Button>
                        </Link>
                    </ButtonWrapper>
                </RightSide>
            </Row>
        </Container>

    );
};
export default Layout;