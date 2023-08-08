interface BannerProps {
  title: string;
}

import { styled } from "styled-components";

const BannerStyled = styled.div`
  background-image: url("https://images.unsplash.com/photo-1445112098124-3e76dd67983c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsbSUyMG9jZWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
`;

const H1Styled = styled.h1`
  display: block;
  color: white;
  margin-bottom: 100px;
  font-size: 2rem;
`;

export default function Banner(props: BannerProps) {
  return (
    <>
      <BannerStyled>
        <H1Styled>{props.title}</H1Styled>
      </BannerStyled>
    </>
  );
}
