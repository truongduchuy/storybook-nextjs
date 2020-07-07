import React from "react";
import { Flex } from "rebass";
import styled from "styled-components";

const StyledPost = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 20px;
  padding: 10px;

  > div:first-child {
    background-color: ${({ theme }) => theme.color.background};
    border-radius: 10px;
    margin-right: 15px;
    
    img {
        width: 100px;
    height: 100px;
    }
  }

  > div:nth-child(2) {
    flex-direction: column;

    > h4 {
      margin: 0;
    }

    > p {
      margin: 10px 0;
      opacity: 60%;
    }

    > div {
      color: ${({ theme }) => theme.color.primary};
      cursor: pointer;
      align-items: center;
      display: flex;

      span {
        margin-left: 20px;
        background: ${({ theme }) => theme.color.primary};
        width: 15px;
        position: relative;
        height: 2px;
        display: inline-block;

        ::after {
          border-width: 2px 2px 0 0;
          border-style: solid;
          content: "";
          padding: 3px;
          position: absolute;
          right: 1px;
          transform: rotate(45deg);
          transform-origin: right;
        }
      }
    }
  }
`;

export default ({ post }) => {
  const { image, title, body, numOfDiscussions } = post;
  return (
    <StyledPost>
      <div>
        <img src={image} alt="image" />
      </div>
      <Flex>
        <h4>{title}</h4>
        <p>{body}</p>
        <div>
          {numOfDiscussions} Discussions <span />
        </div>
      </Flex>
    </StyledPost>
  );
};
