import Versions from './components/Versions'
import { Route, Routes } from 'react-router-dom'
import Intro from './components/Intro'

function App(): JSX.Element {
  console.log(window.api)
  return (
    <>
      <Routes>
        <Route element={<Intro />} path="/" />
        <Route element={<Versions />} path="/versions" />
      </Routes>
    </>
  )
}

export default App
