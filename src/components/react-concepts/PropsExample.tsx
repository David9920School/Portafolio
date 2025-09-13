//PropsExample
interface SaludoProps {
    nombre: string
}

function Saludo({ nombre }: SaludoProps) {
    return <h4>Hola, {nombre}!</h4>
}

export default function PropsExample() {
    return (
        <>
            <h2>3.3 Comunicación entre componentes (Props)</h2>
            <p>Las props permiten pasar datos a los componentes.</p>
            <pre>{`
interface SaludoProps {
  nombre: string
}
function Saludo({ nombre }: SaludoProps) {
  return <h4>Hola, {nombre}!</h4>
}
<Saludo nombre="Carlos" />
      `}</pre>
            <p>Ejemplo en vivo:</p>
            <Saludo nombre="Martin" />
        </>
    )
}