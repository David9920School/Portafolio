import ConceptSection from '../components/ConceptSection';
import { useState, useEffect } from 'react';

export default function ReactConcepts() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("Componente montado");
        return () => console.log("Componente desmontado");
    }, []);

    return (
        <div>
            <h1>Conceptos de React</h1>
            <ConceptSection title="3.1 Estructura de un proyecto" description="React usa componentes y un árbol de JSX." />
            <ConceptSection title="3.2 Componentes" description="Funciones que retornan JSX." />
            <ConceptSection title="3.3 Props" description="Comunicación de datos entre componentes." />
            <ConceptSection title="3.4 PropTypes" description="Validación de props en componentes." />
            <ConceptSection title="3.5 Eventos" description="onClick, onChange para manejar interacciones." />
            <ConceptSection title="3.6 Hooks" description="useState, useEffect, etc." />
            <ConceptSection title="3.7 Router" description="react-router-dom para manejar rutas." />

            <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>
        </div>
    );
}