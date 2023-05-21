import React from 'react';
import { styled, css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: red;
  margin: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: red;
      color: white;
    `};
`;

export default function StyledComponent() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
}
