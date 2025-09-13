// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
//import TypescriptConcepts from './pages/TypescriptConcepts';
import ReactConcepts from './pages/ReactConcepts';
import Experience from './pages/Experience';
import Home from './pages/Home';

import ReactConceptsExamples from './pages/ReactConceptsExamples';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/typescript" element={<TypescriptConcepts />} /> */}
          {<Route path="/react" element={<ReactConcepts />} />}
          {<Route path="/ReactConceptsExamples" element={<ReactConceptsExamples />} />}
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;