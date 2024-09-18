import React from "react";

import { InputContainer } from './styles';

export default function Input({ placeholder, value, onChange }) {
    return (
        <InputContainer>
            <input placeholder={placeholder} value={value} onChange={onChange}/>
        </InputContainer>
    );
}