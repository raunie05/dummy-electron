/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)
  const nav = useNavigate()

  return (
    <ul className="versions">
      <button onClick={() => nav('/')}> back </button>
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
      <li className="v8-version">V8 v{versions.v8}</li>
    </ul>
  )
}

export default Versions
