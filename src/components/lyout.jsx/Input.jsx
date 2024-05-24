import React, { useId } from 'react'

const Input = React.forwardRef(function Input({ label, type, className = "", ...props }, ref) {

    const id = useId();
    return (
        <div className='input'>
            {label && <label htmlFor={id}>{label}</label>}

            <input type={type} id={id} className={` ${className}`} ref={ref} {...props} />
        </div>

    )
})
export default Input
