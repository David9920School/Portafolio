//PropTypesExample.tsx
interface PersonaProps {
    nombre: string
    edad: number
}

function Persona({ nombre, edad }: PersonaProps) {
    return <p>{nombre} tiene {edad} años.</p>
}

export default function PropTypesExample() {
    return (
        <>
            <h2>3.4 PropTypes</h2>
            <p>Con TypeScript usamos interfaces para validar props:</p>
            <pre>{`
interface PersonaProps {
  nombre: string
  edad: number
}
function Persona({ nombre, edad }: PersonaProps) {
  return <p>{nombre} tiene {edad} años.</p>
}
<Persona nombre="Ana" edad={25} />
      `}</pre>
            <p>Ejemplo en vivo:</p>
            <Persona nombre="Alex" edad={29} />
        </>
    )
}