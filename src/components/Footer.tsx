import React from "react";
import { styled } from "styled-components";

const ButtonDivStyled = styled.div`
 display: flex;
 flex-direction: row;
`;
const ButtonStyled = styled.button`
    color: #0065c4;
`;

const ContainerButtonStyled  = styled.div`
 flex: 1;
 padding-left: 4rem;
 margin-bottom: 4rem;
`
const DescripthionButtonStyled = styled.p`
    margin-top: 0rem;
    display: flex;
    padding-left: 1rem;
`
const IStyled = styled.i`
  margin-right: 2rem;
  font-size: 2rem;
  color: #0065c4;
`;
const LogoStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-left: 14rem;
`;
const Footer: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <ContainerButtonStyled>
        <ButtonDivStyled>
          <ButtonStyled>
            About
          </ButtonStyled>
          .
          <ButtonStyled>
            Contact
          </ButtonStyled>
          .
          <ButtonStyled>
            Terms of Use
          </ButtonStyled>
            
          .<ButtonStyled>
            Privacy Policy
          </ButtonStyled>
        </ButtonDivStyled>
        <DescripthionButtonStyled>
          ©YourWebsite 2020.All Rigths Reserved
        </DescripthionButtonStyled>
      </ContainerButtonStyled>
      <LogoStyled>
        <IStyled className="bi bi-facebook"></IStyled>
        <IStyled className="bi bi-twitter"></IStyled>
        <IStyled className="bi bi-instagram"></IStyled>
       
      </LogoStyled>
    </div>
  );
};
export default Footer;
