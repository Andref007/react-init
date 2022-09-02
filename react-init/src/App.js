import { Book } from "./Components/Book"
import FormBook from "./Pages/FormBook";


function App(props) {

  const livros = [
    {id: 1, title: "O senhor dos anéis"},
    {id: 2, title: "O poderoso chefão"},
    {id: 3, title: "Carrie, a estranha"},
    {id: 4, title: "Platoon"},
    {id: 5, title: "Alien, o oitavo passageiro"}
  ] 


  return (
    <div>

      <FormBook />

      
      <h1>Livros</h1>

      <div>
        {livros.map(i => <Book key={i.id} id={i.id} title={i.title} />)}
      {/* <Book title="O senhor dos anéis" />
      <Book title="O Poderoso Chefão" />
      <Book title="Carrie, a estranha" />
      <Book title="Platoon" />
      <Book title="Alien, o oitavo passageiro" /> */}

      </div>

      <div>
        {/* <ul>
          <li>Memórias de uma Gueixa</li>
          <li>O Príncipe</li>
          <li>Simarilion</li>
        </ul> */}
      </div>
    </div>
  );
}

export default App;
