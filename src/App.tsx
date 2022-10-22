import styles from "./styles";

import {Navbar,Hero,Footer,Testmonials,About} from './components'

export const App = () => (
    <div className="w-full overflow-hidden">
      <div >
        <div >
          <Navbar/>
        </div>
      </div>
      <div >
        <div id="home">
          <Hero/>
        </div>
      </div>
      <div id="sobre">
        <About/>
      </div>
    </div>
  )


export default App;