import DateCardList from './Components/DateCardComponent/DateCardList';




function App() {
  return (
    <>
      <div className="">
        <p className="">Vite and React</p>
      </div>

      <div style={{ backgroundColor: '#F9FBFD', height: 'screen', width: 'screen', }}>
        <DateCardList startDate={12} endDate={18} cardType="primary" />
      </div>
    </>
  );
}
export default App