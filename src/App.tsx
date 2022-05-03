import reactLogo from './react-logo.png'
import typescriptLogo from './typescript.svg'

const App = () => {
  console.log(process.env.NODE_ENV)
  console.log(process.env.name)
  //
  //

  return (
    <div>
      <h1> React TypeScript Webpack Starter Template</h1>
      <img src={reactLogo} alt="react logo" />
      <img src={typescriptLogo} alt="typescript logo" />
    </div>
  )
}

export default App
