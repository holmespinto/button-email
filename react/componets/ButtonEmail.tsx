import * as React from 'react'
import { Input } from 'vtex.styleguide'

import style from './style.css'

// funcion que aplica el patron al texto de entrada
const IMask = (value: string) => {
  const result1 = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/.test(value)

  return result1
}

const ButtonEmail = () => {
  // inicializamos la variable de entrada
  const [hasError, setError] = React.useState(true)
  const [value, setValue] = React.useState('')

  // funcion handleChange
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value: eventValue },
  }) => {
    setValue(eventValue)
  }

  React.useEffect(() => {
    // aplicamos la mascara de entrada
    const valida = IMask(value)

    if (value) setError(valida)
  }, [value])

  return (
    <form>
      <div className={hasError ? style.input_email : style.input_email_error}>
        <Input onChange={handleChange} />
      </div>
    </form>
  )
}

export default ButtonEmail
