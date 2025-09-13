//ProjectStructure


export default function ProjectStructure() {
    return (
        <>
            <h2>3.1 Estructura de un proyecto React</h2>
            <p>Un proyecto típico con Vite tiene esta estructura:</p>
            <pre>{`
my-app/
├─ index.html
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ components/
│  └─ pages/
└─ package.json
`}</pre>
        </>
    )
}