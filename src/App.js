
// function App() {

//   const greeting = 'Hi, ababa';
//   const dom = <h1 className="foo">{greeting}</h1>

//   return (
//     // jsx -> javascript xml template言語のひとつ
//     dom
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Mya!</div>
}

export default App;
