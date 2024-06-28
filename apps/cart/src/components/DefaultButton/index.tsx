import { Button } from "./styles";
import React from "react";
import { DefaultButtonProps } from "./types";

export const DefaultButton = (props: DefaultButtonProps) => {
    let { styleProps, onClick, title } = props;

    return <Button 
        title={title}
        onClick={onClick}
        $size={styleProps?.$size} 
        $bgColor={styleProps?.$bgColor} 
    />
}