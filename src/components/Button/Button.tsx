import React from "react"
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = (props: ButtonProps) => {
    return (
        <button {...props} className={'button' + props.className}/>
    )
}

export default Button