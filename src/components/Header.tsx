// import { Link } from 'react-router-dom';

// export default function Header() {
//     return (
//         <header className="header">
//             <nav>
//                 <ul className="nav-list">
//                     <li><Link to="/">Inicio</Link></li>
//                     {/* <li><Link to="/typescript">TypeScript</Link></li> */}
//                     {<li><Link to="/react">React</Link></li>}
//                     <li><Link to="/experience">Experiencia</Link></li>
//                     {<li><Link to="/ReactConceptsExamples">Ejemplos React</Link></li>}
//                 </ul>
//             </nav>
//         </header>
//     );
// }

////////////////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header
            style={{
                background: "#1d273c",
                color: "white",
                padding: "30px",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <h1>Portafolio de David Torres </h1>
            <nav style={{ display: "flex", gap: "15px", background: "rgba(255, 255, 255, 0.1)", padding: "4px 8px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                <Link to="/" style={{ color: "white" }}>Inicio</Link>
                <Link to="/experience" style={{ color: "white" }}>Experiencia</Link>
                <Link to="/react" style={{ color: "white" }}>React</Link>
                <Link to="/ReactConceptsExamples" style={{ color: "white" }}>React Concepts Examples</Link>
                {/* <Link to="/typescript" style={{ color: "white" }}>Type Script</Link>
        <Link to="/react" style={{ color: "white" }}>React</Link> */}
                <Link to="/contact" style={{ color: "white" }}>Contacto</Link>
            </nav>
        </header>
    );
}
