import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [cepJson, setCepJson] = useState([]);
  function enviar(e) {
    e.preventDefault();
    viaCep();
  }

  async function viaCep() {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setCepJson(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>aula 4</h1>
      <form action="" onSubmit={enviar}>
        <label htmlFor="nome">CEP</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite o seu CEP: "
          onChange={(e) => {
            setCep(e.target.value);
            console.log(cep);
          }}
        />
        <button>Enviar</button>
      </form>
      <p>{name}</p>
      {cepJson && (
        <div>
          <p>{cepJson.cep}</p>
          <p>{cepJson.logradouro}</p>
          <p>{cepJson.bairro}</p>
          <p>{cepJson.localidade}</p>
          <p>{cepJson.uf}</p>
          <p>{cepJson.regiao}</p>
        </div>
      )}
    </>
  );
}

export default App;
