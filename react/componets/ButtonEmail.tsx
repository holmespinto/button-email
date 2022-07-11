import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
const CSS_HANDLES = ['input_email']
const ButtonEmail = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
      <div  className={handles.input_email}>
       Ingrese aqui el email
      </div>
    )
}

export default ButtonEmail
