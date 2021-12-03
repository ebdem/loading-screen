import ReactDOM from 'react-dom'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import range from 'lodash-es/range'
import './styles.css'

const items = range(7)
const loading = ['L', 'O', 'A', 'D', 'I', 'N', 'G']
const interp = (i) => (r) => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function App() {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 2500 },
    reset: true,
  })
  return items.map((i) => (
    <animated.div
      key={i}
      className="script-bf-box"
      style={{
        fontfamily: 'sans-serif',
        fontSize: '0.7rem',
        fontweight: 900,
        transform: radians.interpolate(interp(i)),
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url("/car-1.png")`,
        boxShadow: 'initial',
      }}>
      <h1 style={{ marginBottom: '1px' }}>{loading[i]}</h1>
    </animated.div>
  ))
}

ReactDOM.render(<App />, document.getElementById('root'))
