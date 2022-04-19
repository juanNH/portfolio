import React from "react";
import { UpperTextContainer, Text, StoryContainer } from "./UpperTextStyles";

const UpperText = () => {
  return (
    <UpperTextContainer>
      <StoryContainer>
        <h2>Mi Historia</h2>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          consequuntur numquam ipsa facilis quisquam eos libero ducimus aut id
          officia quasi voluptatibus excepturi ab nisi officiis rem, tenetur
          voluptatum distinctio.<br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          consequuntur numquam ipsa facilis quisquam eos libero ducimus aut id
          officia quasi voluptatibus excepturi ab nisi officiis rem, tenetur
          voluptatum distinctio.<br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          consequuntur numquam ipsa facilis quisquam eos libero ducimus aut id
          officia quasi voluptatibus excepturi ab nisi officiis rem, tenetur
          voluptatum distinctio.
        </Text>
      </StoryContainer>
    </UpperTextContainer>
  );
};

export default UpperText;
