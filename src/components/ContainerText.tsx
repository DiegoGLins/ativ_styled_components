import React from "react";
import { styled } from "styled-components";
import "./container.css";


const DivTextStyled = styled.div`
  width: 50%;
  height: 30rem;
`;


const ContainerText: React.FC= () => {
  return (
    <>
        <DivTextStyled>
          <h1 className="Description position">Lorem ipsum</h1>
          <p className="Description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            fuga quae quod enim quidem a natus laboriosam voluptatem debitis,
            repellendus eaque pariatur minima reprehenderit. Deserunt totam
            libero magnam quaerat minus. lorem Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Nam repudiandae, fugiat ut dicta amet
            reiciendis corporis quod doloremque tempore, laboriosam, id dolores
            repellendus beatae blanditiis iusto explicabo nobis itaque eius.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            natus, nulla, ex earum nesciunt, neque esse aperiam ad provident
            iure explicabo reprehenderit inventore deleniti aliquid minus?
            Itaque dignissimos quibusdam ullam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet possimus delectus ea ratione
            esse nihil quibusdam nobis ab tempora eum, tenetur quasi,
            necessitatibus quaerat? Ipsa fugit distinctio iusto eos
            voluptatibus.
          </p>
        </DivTextStyled>
    </>
  );
};

export default ContainerText;
