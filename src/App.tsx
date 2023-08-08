import Banner from "./components/Banner";
import Card from "./components/Card";
import ContainerImg from "./components/ContainerImg";
import ContainerText from "./components/ContainerText";
import Fotter from "./components/Footer";

export default function App() {
  return (
    <>
      <Banner title="Minha Primeira Página com React" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <Card
          image="desktop"
          title="Somente para Desktop"
          text="Vamos aprender como utilizar um framework"
        />
        <Card
          image="componentes"
          title="Criado com Componentes"
          text="Utilizando Styled Components"
        />
        <Card
          image="aproveitamento"
          title="Fácil Aproveitamento"
          text="estamos no caminho"
        />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <ContainerText />
        <ContainerImg image="https://images.unsplash.com/photo-1690648659252-89b7ac282397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <ContainerImg image="https://images.unsplash.com/photo-1690831844977-ff3d027ffe8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" />
        <ContainerText />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <ContainerText />
        <ContainerImg image="https://images.unsplash.com/photo-1690460232677-155f01ad61ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80" />
      </div>
      <Banner title="Contato" />
      <Fotter />
    </>
  );
}
