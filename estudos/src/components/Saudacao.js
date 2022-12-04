function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return (
      <div>
        <p>Olá, {algumNome}, tudo bem?</p>
      </div>
    );
  }

  return (
    <>
      {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
  );
}

export default Saudacao;
