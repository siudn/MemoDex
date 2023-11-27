import Display from './components/Display'
import PlaySound from './components/PlaySound'
import Scoreboard, { Instruction } from './components/Scoreboard'
import { ContextProvider } from './context/ContextProvider'

function App() {
  return (
    <div /*className="h-full flex flex-col justify-center align-middle"*/>
      <PlaySound />
      <ContextProvider>
        <div className='flex flex-col gap-8'>
          <Instruction />
          <Display />
          <Scoreboard />
        </div>
      </ContextProvider>
    </div>
  )
}

export default App
