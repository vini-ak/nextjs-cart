import { Button } from "./styles";
import React from "react";
import { DefaultButtonProps } from "./types";

export const DefaultButton = (props: DefaultButtonProps) => {
    let { style, onClick, title } = props;

    return <Button 
        backgroundColor={style?.backgroundColor} 
        size={style?.size} 
        onClick={onClick}
        title={title}
    />
}