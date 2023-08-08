import { styled } from "styled-components";

interface CardProps {
  image: "desktop" | "componentes" | "aproveitamento";
  title: string;
  text: string;
}

const IStyled = styled.i`
  font-size: 5rem;
  color: #0065c4;
`;

const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

`;

const H2Styled = styled.h2`
  margin-top: -4%;
  margin-bottom: -4%;
`;

export default function Card(props: CardProps) {
  function getIconClass() {
    if (props.image === "desktop") return "bi bi-display";
    if (props.image === "componentes") return "bi bi-layers";
    if (props.image === "aproveitamento") return "bi bi-check-circle";
  }

  return (
    <CardStyled>
      <IStyled className={getIconClass()} />
      <H2Styled>{props.title}</H2Styled>
      <p>{props.text}</p>
    </CardStyled>
  );
}
