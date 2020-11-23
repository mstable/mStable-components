import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: blue;
`;

const TestComponent: React.FC<{}> = () => <H1>Hello, world</H1>;

export default TestComponent;
