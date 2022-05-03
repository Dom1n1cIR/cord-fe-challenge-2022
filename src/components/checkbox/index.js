import React, { useState } from "react";
import styled from 'styled-components';


export default function Checkbox ({ id, name, label }) {
  // TODO: Style the component and checkmark to look like the mockup provided
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxWrapper>
      <InputCheck type="checkbox" id={id} name={name} checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
      <label className="checbox-label" htmlFor={id}>{label}</label>
    </CheckboxWrapper>
  )

}

const CheckboxWrapper = styled.div`
  position: relative;

  .checbox-label {
    padding-left: 10px;
  }
`;

const InputCheck = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;