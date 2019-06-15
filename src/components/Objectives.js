import React, { Component } from "react";
import { Container,  Content, Card, CardItem, Text, Body } from "native-base";
import Header from './Header';


export default class CardTransparentExample extends Component {
  render() {
    return (
      <Container>
      {/* //  <Header name = "Objectives"/> */}
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text style={{fontSize:20,fontWeight:'700'}}>
                To seek a challenging position in a competitive environment to enhance my knowledge by using my qualification,
                my skills and expertise are well suited to work in companies to multi culture and global environment.
                  </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}