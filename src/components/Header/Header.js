import React, { Component } from "react";

import PopcornTvLogo from "../../images/react-movie-logo.svg";

import { Wrapper, Content, PopcornTvImg } from "./Header.style";
import { GlobalStyle } from "../../GlobalStyles";

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <PopcornTvImg src={PopcornTvLogo} alt="PopcornTvImg-Logo" />
          <GlobalStyle />
        </Content>
      </Wrapper>
    );
  }
}

export default Header;
