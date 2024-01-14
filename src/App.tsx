import AuthContainer from './components/AuthContainer';
import './App.css'

function App() {

  return (
    <>
      <div>
      {/* Use AuthContainer with any children */}
      <AuthContainer>
        {/* Your authentication form components go here */}
        <input />
      </AuthContainer>
      </div>
    </>
  )
}

export default App
