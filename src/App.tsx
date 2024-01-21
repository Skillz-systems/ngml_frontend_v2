
import ContentContainer from './Components/ContentContainer/ContentContainer';

function App() {
  return (
    <div className="App">
      <ContentContainer type="translucent" radius={10} width="50%" height="200px">
        {/* Your content goes here */}
        <p>Hello, I'm inside the card!</p>
      </ContentContainer>
    </div>
  );
}
export default App