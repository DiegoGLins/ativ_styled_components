import React from "react";
import { styled } from "styled-components";
import "./container.css";

interface ContainerProps {
  image: string;
}

const DivImgStyled = styled.div`
  width: 50%;
  height: 30rem;
`;

const ContainerImg: React.FC<ContainerProps> = ({image}) => {
  return (
    <>
        <DivImgStyled>
          <img className="imgStyle" src={image} />
        </DivImgStyled>
    </>
  );
};

export default ContainerImg;
