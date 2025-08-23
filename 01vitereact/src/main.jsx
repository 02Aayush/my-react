import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit google</a>
)

const anotherUser = "Chai aur code..."

// this is how React.createElement works
const reactElement = React.createElement(
    'a', // tag type
    {href:"https://google.com", target:"_blank"}, // object of properties
    'Click me to visit google....', // children
    anotherUser // you can also pass JS variables here
)

// THis is similar to ReactDOM.createRoot().render()
createRoot(document.getElementById('root')).render(
    // <App />,
    // <MyApp />,
    reactElement
    // anotherUser
)
