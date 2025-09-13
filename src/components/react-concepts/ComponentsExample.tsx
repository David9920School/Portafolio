import ConceptSection from '../ConceptSection';

function MiComponente() {
    return <h3>Hola desde un Componente!</h3>
}

export default function ComponentsExample() {
    return (
        <ConceptSection
            title="3.2 Componentes"
            description="Un componente es una función que devuelve JSX:"
        >
            <pre>{`
function MiComponente() {
  return <h3>Hola desde un Componente!</h3>
}
      `}</pre>
            <p>Ejemplo en vivo:</p>
            <MiComponente />
        </ConceptSection>
    );
}