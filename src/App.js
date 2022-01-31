import React from 'react'
import RoutesApp from './routes';
import Header from './components/HeaderHome/index'
import MainHome from './components/MainHome/index'
function App() {
	return (
      <div>
        <Header/>
        <MainHome/>
        < RoutesApp />
      </div>
	)
}

export default App
