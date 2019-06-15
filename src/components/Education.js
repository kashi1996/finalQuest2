import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class Education extends Component {
  render() {
    return (
      <Container>
      
        <Content>

          <Separator bordered>
            <Text style={{fontSize:25,fontWeight:'600'}}>Bachelor in Computer Science</Text>
          </Separator>
          <ListItem>
            <Text>Mohammad Ali Jinnah University</Text>
          </ListItem>
          
          
          <Separator bordered>
            <Text style={{fontSize:25,fontWeight:'600'}}>Intermediate</Text>
          </Separator>
          <ListItem>
            <Text>Board of Intermediate Education Karachi</Text>
            <Text>Inter 2012</Text>
          </ListItem>
          
          
          <Separator bordered>
            <Text style={{fontSize:25,fontWeight:'600'}}>Matric</Text>
          </Separator>
          <ListItem>
            <Text>Board of Secondary Education Karachi</Text>
            <Text>Matric 2012</Text>
          </ListItem>
          
        </Content>
      </Container>
    );
  }
}