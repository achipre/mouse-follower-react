import { useEffect, useState } from 'react'

function App () {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: -10, y: -10 })
  const isActive = () => {
    setEnable(!enable)
  }
  useEffect(() => {
    const handlerMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enable) {
      window.addEventListener('pointermove', handlerMove)
    }
    return () => {
      window.removeEventListener('pointermove', handlerMove)
    }
  }, [enable])
  return (
    <main>
      <FollowMouse enable={enable} position={position} isActive={isActive}/>
    </main>
  )
}

const FollowMouse = ({ enable, position, isActive }) => {
  return (
    <>
      <span style={{ width: 40, height: 40, backgroundColor: enable ? '#faf1e452' : '', border: enable && '1px solid white', borderRadius: 20, position: 'absolute', top: -20, left: -20, pointerEvents: 'none', transform: `translate(${position.x}px, ${position.y}px)`, transition: 'all .1s ease' }}></span>
      <button onClick={isActive} style={{ backgroundColor: enable && 'white', color: enable && 'black' }}>{enable ? 'Desactivar' : 'Activar'} segumiento</button>
    </>
  )
}

export default App
