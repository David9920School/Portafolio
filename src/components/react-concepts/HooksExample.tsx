//HooksExample

import { useEffect } from 'react'

export default function HooksExample() {
    useEffect(() => {
        console.log('Componente montado 🎉')
        return () => console.log('Componente desmontado 🧹')
    }, [])

    return (
        <>
            <h2>3.6 Hooks del ciclo de vida</h2>
            <p><code>useEffect</code> permite ejecutar código al montar o desmontar un componente.</p>
            <pre>{`
useEffect(() => {
  console.log('Componente montado');
  return () => console.log('Componente desmontado');
}, []);
      `}</pre>
            <p>Los logs se ven en la Consola</p>
        </>
    )
}