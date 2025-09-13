//RouterExample.tsx
import { Link } from 'react-router-dom'

export default function RouterExample() {
    return (
        <>
            <h2>3.7 Routers</h2>
            <p>React Router permite crear navegación SPA.</p>
            <pre>{`
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/react" element={<ReactConcepts />} />
</Routes>
<Link to="/">Ir a Home</Link>
      `}</pre>
            <p>Ejemplo en vivo:</p>
            <Link to="/">Ir a Home</Link>
        </>
    )
}