import React from 'react'

const Button = ({
    children,
    type = "submit",
    bgColor = "blue",
    textColor = "white",
    className = "",
    ...props
}) => {
    return (
        <button className={`${className}`}{...props} >
            {children}
        </button>
    )
}

export default Button