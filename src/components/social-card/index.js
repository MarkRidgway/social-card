import React from 'react';
import { Card, Header, Name, Avatar, Bio, Title } from './styled';

const SocialCard = (props) => {
  return(
    <Card>
      <Header>
        <Avatar><img src={ props.avatar } /></Avatar>
        <Name>{ props.name } </Name>
      </Header>
      <Bio>{ props.bio }</Bio>
      <Title>{ props.title }</Title>
    </Card>
  );
};

export default SocialCard;
