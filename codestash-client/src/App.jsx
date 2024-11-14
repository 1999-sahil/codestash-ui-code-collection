import './App.css'

import { Outlet } from 'react-router-dom'

import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {

  return (
    <>
      <div className='w-full h-screen bg-white dark:bg-[#0f0f0f] overflow-x-hidden'>
      <Navbar />
      <main className='min-h-screen max-w-screen-2xl mx-auto px-6 py-6 overflow-hidden'>
        <Outlet />
      </main>
      <Footer />
      </div>
    </>
  )
}

export default App
