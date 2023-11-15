import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'

import './App.css'

function App() {
  return (
    <div className="font-custom">
      <div className="text-base min-h-screen w-full flex flex-col justify-between">
        < Header />
        < Main />
        < Footer />
      </div>
    </div>
  )
}

export default App