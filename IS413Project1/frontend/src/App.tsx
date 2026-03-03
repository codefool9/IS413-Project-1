import './App.css'

const bandNames = [
    {
      name: 'Hello, world', 
      members: "Bob, Mark, Phil", 
      formed: 1977
    },
    {
      name: 'The Rock', 
      members: "Jake, Bruce, Lotus", 
      formed: 1982
    },
    {
      name: 'Devil went down to georgia', 
      members: "Refikki, Leroy, John", 
      formed: 1975
    },
    {
      name: 'Rosetta Stone', 
      members: "Mobamba, Steve, Jordan", 
      formed: 1989
    },
  ];

function Welcome() {
  return <h1>Criminally Underatted Bands</h1>;
}

function Band({name, members, formed}: {name: string; members: string; formed: number}) {

  return (
    <>
      <h2>{name}</h2>
      <h3>Original Members: {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function BandList() {

  return (
    <>
      {
        bandNames.map((singleBand) => (
          <Band {...singleBand} />
        ))
      }

    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <BandList />
      <BandList />
    </>
  );
}

export default App
