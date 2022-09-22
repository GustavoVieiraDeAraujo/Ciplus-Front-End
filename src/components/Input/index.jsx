import React from 'react';;
import { StyleInput } from './styles.jsx';

export const Input = ({ ...props }) => {
    return (
        <label>
            <img src={props.link}
            />
            {props.titulo}
            <StyleInput
                width={props.width}
                paddingleft={props.paddingleft}
                mask={props.mask}
                background={props.background}
                height={props.height}
                borderradius={props.borderradius}
                name={props.name}
                type={props.type}
                value={props.value}
                display={props.display}
                onChange={props.onChange}
                placeholder={props.placeholder}
                required
            />
        </label>
    );
};