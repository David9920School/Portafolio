// //ReactConceptsExamples.tsx
// import ProjectStructure from '../components/react-concepts/ProjectStructure'
// import ComponentsExample from '../components/react-concepts/ComponentsExample'
// import PropsExample from '../components/react-concepts/PropsExample'
// import PropTypesExample from '../components/react-concepts/PropTypesExample'
// import EventsExample from '../components/react-concepts/EventsExample'
// import HooksExample from '../components/react-concepts/HooksExample'
// import RouterExample from '../components/react-concepts/RouterExample'
// //import HooksDeepDive from '../components/react-concepts/HooksDeepDive'

// export default function ReactConcepts() {
//     return (
//         <div style={{ maxWidth: 800, margin: '0 auto', lineHeight: 1.6 }}>
//             <h1>Conceptos de React</h1>
//             <p>Esta página explica los conceptos clave de React usando ejemplos reales.</p>
//             <hr />
//             <ProjectStructure />
//             <ComponentsExample />
//             <PropsExample />
//             <PropTypesExample />
//             <EventsExample />
//             <HooksExample />
//             <RouterExample />
//             {/* <HooksDeepDive /> */}
//         </div>
//     )
// }

import ConceptSection from '../components/ConceptSection';
import ProjectStructure from '../components/react-concepts/ProjectStructure';
import ComponentsExample from '../components/react-concepts/ComponentsExample';
import PropsExample from '../components/react-concepts/PropsExample';
import PropTypesExample from '../components/react-concepts/PropTypesExample';
import EventsExample from '../components/react-concepts/EventsExample';
import HooksExample from '../components/react-concepts/HooksExample';
import RouterExample from '../components/react-concepts/RouterExample';

export default function ReactConcepts() {
    return (
        <div style={{ maxWidth: 800, margin: '0 auto', lineHeight: 1.6 }}>
            <h1>Conceptos de React</h1>
            <p>Esta página explica los conceptos clave de React usando ejemplos reales.</p>
            <hr />

            <ConceptSection
                title="3.1 Estructura de un proyecto"
                description="React usa componentes y un árbol de JSX para organizar la aplicación."
            >
                <ProjectStructure />
            </ConceptSection>

            <ConceptSection
                title="3.2 Componentes"
                description="Los componentes son funciones que retornan JSX y representan partes reutilizables de la UI."
            >
                <ComponentsExample />
            </ConceptSection>

            <ConceptSection
                title="3.3 Props"
                description="Las props permiten pasar datos desde un componente padre a uno hijo."
            >
                <PropsExample />
            </ConceptSection>

            <ConceptSection
                title="3.4 PropTypes"
                description="PropTypes se usan para validar los tipos de props que recibe un componente."
            >
                <PropTypesExample />
            </ConceptSection>

            <ConceptSection
                title="3.5 Eventos"
                description="React maneja eventos como onClick y onChange para capturar interacciones del usuario."
            >
                <EventsExample />
            </ConceptSection>

            <ConceptSection
                title="3.6 Hooks"
                description="Los hooks como useState y useEffect permiten manejar estado y efectos secundarios en componentes funcionales."
            >
                <HooksExample />
            </ConceptSection>

            <ConceptSection
                title="3.7 Router"
                description="React Router permite definir rutas y navegación entre vistas en una SPA."
            >
                <RouterExample />
            </ConceptSection>
        </div>
    );
}
