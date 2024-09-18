import { ButtonContainer } from "./styles";

export default function Button({ onCLick }) {
    return (
        <ButtonContainer onClick={onCLick}>
            Buscar
        </ButtonContainer>
    );
}