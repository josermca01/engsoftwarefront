import styles from "./styles";

import {Navbar,Hero,Footer,Testmonials,LoginCard} from './components'

export const App = () => (
    <div className="w-full overflow-hidden bg-blue-300">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`${styles.flexStart} bg-blue-300`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
    </div>
  )


export default App;