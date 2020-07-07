import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

const StyledNav = styled(Flex)`
  background: ${({ theme }) => theme.color.secondary};
  border-radius: 50px;
  padding: 5px;
  width: max-content;
`;

const NavItem = styled.div`
  border-radius: 20px;
  cursor: pointer;
  color: #cacabf;
  padding: 10px 20px;
  ${({ active, theme }) =>
    active &&
    `
    background-color: #e7efdf;
    color: ${theme.color.primary};
    font-weight: 600;
  `};

  :not(:last-child) {
    margin-right: 15px;
  }
`;

export default ({ categories, selectedCategory, onSelectedCategory }) => {
  return (
    <StyledNav>
      {categories.map((category, index) => (
        <NavItem
          key={index}
          active={selectedCategory === category}
          onClick={() => onSelectedCategory(category)}
        >
          {category}
        </NavItem>
      ))}
    </StyledNav>
  );
};
