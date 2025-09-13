//EventsExample.tsx

import { useState } from 'react'

export default function EventsExample() {
    const [contador, setContador] = useState(0)

    return (
        <>
            <h2>3.5 Eventos</h2>
            <p>Los eventos permiten responder a acciones del usuario:</p>
            <pre>{`
<button onClick={() => setContador(contador + 1)}>
  Incrementar
</button>
<p>Contador: {contador}</p>
      `}</pre>
            <p>Ejemplo en vivo:</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <p>Contador: {contador}</p>
        </>
    )
}