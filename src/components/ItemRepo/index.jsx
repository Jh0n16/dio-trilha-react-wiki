import React from "react";

import { ItemContainer } from "./styles";

function ItemRepo() {
    return (
        <ItemContainer>
            <h3>Teste</h3>
            <p>Lorem ipsum</p>
            <a href=" " className="ver-repositorio">Ver repositório</a>
            <a href=" " className="remover">Remover</a>
            <hr />
        </ItemContainer>
    );
}

export default ItemRepo;