import './App.css'
import { ComponentRxjs1 } from './components/RsJS/ComponentRxjs1'
import { ComponentRxjs2 } from './components/RsJS/ComponentRxjs2'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ComponentRedux1 from './components/Redux/ComponentRedux1'
import ComponentRedux2 from './pages/Home/components/ComponentRedux2'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>RXJS</h2>  
        <ComponentRxjs1 />
        <ComponentRxjs2 />
        <h2>CONTEXT</h2>  
        <Home />
        <h2>REDUX</h2>  
        <ComponentRedux1 />
        <ComponentRedux2 />
      </div>
    </Provider>
  )
}

export default App
