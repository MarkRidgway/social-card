import styled from 'styled-components';

export const Card = styled.div`
  max-width: 620px;
  margin: 0 auto 30px auto;
  color: #353535;
  background-color: #FAE16C;
`;

export const Header = styled.header`
  display: flex;
  padding: 40px 40px 20px 40px;
  justify-content: flex-start;
  align-items: baseline;
`;

export const Name = styled.h1`
  flex: 1 0 auto;
  margin: 0;
  color: #353535;
  font-size: 48px;
  font-family: RobotoCondensed-Bold;
`;

export const Avatar = styled.div`
  flex: 0 0 75px;
  width: 75px;
  margin-right: 12px;

  img{
    max-width: 100%;
  }
`;

export const Bio = styled.p`
  margin: 0 0 18px 0;
  padding: 0 40px;
  color: #353535;
  font-size: 16px;
  font-family: Cabin-Regular;
  line-height: 1.6;
`;

export const Title = styled.h2`
  padding: 20px 40px;
  font-size: 36px;
  font-family: Cabin-Regular;
  color: #FAE16C;
  background-color: #353535;
`;
