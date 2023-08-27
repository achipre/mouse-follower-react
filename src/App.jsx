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
  console.log(enable)
  console.log(position)
  return (
    <main>
      <FollowMouse enable={enable} position={position} isActive={isActive}/>
    </main>
  )
}

const FollowMouse = ({ enable, position, isActive }) => {
  return (
    <><h1>Mouse Follower</h1>
      <span style={{ width: 20, height: 20, backgroundColor: enable ? '#faf1e452' : '', borderRadius: 10, position: 'absolute', top: -10, left: -10, pointerEvents: 'none', transform: `translate(${position.x}px, ${position.y}px)`, transition: 'all .1s ease' }}></span>
      <button onClick={isActive}>{enable ? 'Desactivar' : 'Activar'} segumiento</button>
    </>
  )
}

export default App
