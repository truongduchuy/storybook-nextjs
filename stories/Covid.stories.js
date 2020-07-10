import React, { useState } from "react";
import { Button } from "@storybook/react/demo";
import Nav from "../components/nav";
import Post from "../components/post";
import styled, { ThemeProvider } from "styled-components";
import Image1 from "../public/image/image1.svg";
import Image2 from "../public/image/image2.svg";
import Image3 from "../public/image/image3.svg";
import Image4 from "../public/image/image4.svg";

export default {
  title: "Covid",
  component: Button,
};

const theme = {
  color: {
    primary: "#7DA752",
    secondary: "#FFFFFF",
    background: "#F0EBE6",
  },
};

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 380px;

  .posts {
    > div {
      margin: 0 5px 20px;

      :first-child {
        margin-top: 20px;
      }
    }
  }
`;

const posts = [
  {
    image: Image1,
    title: "Wear a facemask",
    body: "You should wear facemask when you are around other people",
    numOfDiscussions: 153,
    category: "Prevention",
  },
  {
    image: Image2,
    title: "Avoid close contact",
    body: "Put distance between yourself and other people",
    numOfDiscussions: 127,
    category: "Prevention",
  },
  {
    image: Image3,
    title: "Stay if you're sick",
    body: "Stay home if you are sick, except to get medical care.",
    numOfDiscussions: 153,
    category: "Prevention",
  },
  {
    image: Image4,
    title: "Clean your hands often",
    body: "Wash hands often with soapand water for at least 20s",
    numOfDiscussions: 324,
    category: "Prevention",
  },
];

const categories = ["Prevention", "Symptoms", "Diagnosis"];

export const Prevention = () => {
  const [selectedCategory, setSelectedCategory] = useState("Prevention");

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Nav
          selectedCategory={selectedCategory}
          onSelectedCategory={category => setSelectedCategory(category)}
          categories={categories}
        />
        <div className="posts">
          {posts
            .filter(post => post.category === selectedCategory)
            .map(post => (
              <Post post={post} />
            ))}
        </div>
      </Container>
    </ThemeProvider>
  );
};
