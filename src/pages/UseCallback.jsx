import { useState, useCallback, memo } from "react";

const Botao = memo(({ onClick }) => {
  console.log("Botão renderizou");
  return <button onClick={onClick}>Clique</button>;
});

export default function App() {
  const [contador, setContador] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicou no botão");
  }, []);

  return (
    <div>
      <p>Contador: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar contador
      </button>

      <Botao onClick={handleClick} />
    </div>
  );
}
