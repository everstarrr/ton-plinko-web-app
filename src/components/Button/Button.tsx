import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = (props: ButtonProps) => {
    return (
        <button {...props} className={'button' + props.className}/>
    )
}

export default Button