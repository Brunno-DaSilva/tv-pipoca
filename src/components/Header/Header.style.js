import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
`;

export const PopcornTvImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  } ;
`;
