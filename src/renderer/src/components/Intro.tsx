/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { useNavigate } from 'react-router-dom'

function Intro(): JSX.Element {
  const nav = useNavigate()

  return (
    <ul className="versions">
      This is main app
      <button onClick={() => nav('/versions')}>Skadossh</button>
    </ul>
  )
}

export default Intro
