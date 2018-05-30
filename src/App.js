import React, { Component } from 'react';
import styled from 'styled-components';

import SocialCard from './components/social-card';

import tesla from './assets/images/tesla.jpg';
import cat from './assets/images/cat.jpg';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 30px;
  background: #eee;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <SocialCard
          name='Nikola Tesla'
          avatar={ tesla }
          bio='Nikola Tesla (July 10, 1856 to January 7, 1943) was an engineer known
          for designing the alternating-current (AC) electric system, which is
          still the predominant electrical system used across the world today. He
          also created the "Tesla coil," which is still used in radio technology.
          Born in what is now Croatia, Tesla came to the United States in 1884
          and briefly worked with Thomas Edison before the two parted ways. He
          sold several patent rights, including those to his AC machinery, to
          George Westinghouse.'
          title='Electrical Engineer &amp; Inventor' />
        <SocialCard
          name='Colonel Sprinkles'
          avatar={ cat }
          bio='Colonel Sprinkles was in the 12th infantry during the great
          feline wars of 2042. He led many good cats into battle and died a
          great hero earning him the Medal of Meownor. He was survived by Mrs.
          Sprinkles.'
          title='Colonel of New Got' />
      </Wrapper>
    );
  }
}

export default App;
