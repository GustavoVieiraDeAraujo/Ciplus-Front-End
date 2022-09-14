import React from 'react';
import { StyleInput } from './styles.jsx'

export const Input = ({...props}) => {
  return (
    <StyleInput 
      placeholder={props.placeholder}
    />
  )
}