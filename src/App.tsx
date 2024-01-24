
import ContentContainer from './Components/Contentcontainer/ContentContainer';

function App() {
  return (
    <div className="App">
      <ContentContainer type="translucent" borderRadius={10} width="50%" height="200px" >
        {/* Your content goes here */}
        <p>Hello, I'm inside the card!</p>
      </ContentContainer>
    </div>
  );
}
export default App