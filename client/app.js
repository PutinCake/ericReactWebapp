import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import {AppContainer} from 'react-hot-loader'
import App from './views/App.jsx'


// ReactDOM.hydrate(<App />, document.getElementById('root'))

const root = document.getElementById('root')
const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
    
            <BrowserRouter>
                <Component />
            </BrowserRouter>
  
        </AppContainer>,
        root

    )
}

render(App)

if (module.hot) {
    module.hot.accept('./views/App', ()=>{
        const NextApp = require('./views/App').default
        // ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
        render(NextApp)
    })
}