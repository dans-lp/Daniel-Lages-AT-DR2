import { useState } from "react";

function Ex11() {

   const [inputText, setInputText] = useState('');
   const [tarefa, setTarefa] = useState([]);
   const [checkedStates, setCheckedStates] = useState([]);
   const [filtro, setFiltro] = useState('todos');

   const adicionaTarefa = (e) => {
      e.preventDefault();

      if (inputText.trim() === '') return;

      setTarefa([...tarefa, inputText]);
      setInputText('');
   };

   const handleCheck = (index) => {
      const newCheckedStates = [...checkedStates];
      newCheckedStates[index] = !newCheckedStates[index];
      setCheckedStates(newCheckedStates);
   };

   const Filtragem = () => {
      switch (filtro) {
         case 'concluidos':
            return tarefa.filter((_, index) => checkedStates[index] === true);
         case 'pendentes':
            return tarefa.filter((_, index) => checkedStates[index] != true);
         default:
            return tarefa;
      }
   };

   const ListaTarefas = ({ lista: tarefas }) => {

      if (tarefas.length === 0) {
         return <p>Lista vazia</p>;
      }

      return (
         <ul>
            {tarefas.map((item, idx) => {
               const originalIndex = tarefa.indexOf(item);
               return (

                  <li key={originalIndex}>
                     {checkedStates[originalIndex] ? <del>{item}</del> : item}
                     <input
                        type="checkbox"
                        checked={checkedStates[originalIndex] || false}
                        onChange={() => handleCheck(originalIndex)}
                     />
                  </li>
               );
            })}
         </ul>
      );

   };


   return (
      <div>
         <form onSubmit={adicionaTarefa}>
            <button type="submit" style={{ marginRight: "5px" }}>Adicionar</button>
            <input
               type="text"
               value={inputText}
               onChange={(e) => setInputText(e.target.value)}
               placeholder="escreva a tarefa..."
            />
         </form>
         <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginTop: "5px"
         }}>
            <button onClick={() => setFiltro('todos')}>Mostrar toda as tarefas</button>
            <button onClick={() => setFiltro('pendentes')}>Mostrar somente pendentes</button>
            <button onClick={() => setFiltro('concluidos')}>Mostrar somente concluídas</button>
         </div>
         <div>
            <h5>Lista de Tarefas:</h5>
            <ListaTarefas lista={Filtragem()} />
         </div>
      </div>
   );
}

export default Ex11;