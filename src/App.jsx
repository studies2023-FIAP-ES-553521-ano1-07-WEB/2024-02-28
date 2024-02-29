import {} from 'react';

function App() {
  //DECLARANDO UMA VARIÁVEL
  const nome = 'fiap';
  const novoNome = nome.toUpperCase();

  function soma(w, f) {
    return w + f;
  }

  const soma1 = (a, b) => a * b;

  return (
    <>
      <h1>Qual o seu nome?</h1>
      <h2>{nome}</h2>
      <p>{novoNome}</p>
      <h2>A soma é: {soma(8, 10)}</h2>
      <h2>A soma2 é: {soma1(20, 5)}</h2>
    </>
  )
}

export default App
