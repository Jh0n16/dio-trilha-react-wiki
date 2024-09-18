import React from "react";

import { ItemContainer } from "./styles";

function ItemRepo({ repositorio }) {
    return (
        <ItemContainer>
            <h3>{repositorio.name}</h3>
            <p>{repositorio.full_name}</p>
            <a href={repositorio.html_url} target='blank' className="ver-repositorio">Ver repositório</a>
            <a href=" " className="remover">Remover</a>
            <hr />
        </ItemContainer>
    );
}

export default ItemRepo;