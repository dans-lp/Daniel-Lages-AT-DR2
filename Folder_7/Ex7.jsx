import { useState } from "react";

function ListandoTarefas() {

   const [inputText, setInputText] = useState('');
   const [tarefa, setTarefa] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (inputText.trim() == '') return;

      setTarefa([...tarefa, inputText]);
      setInputText('');
   };

   const removeTarefa = (idx) => {
      tarefa.splice(idx, 1);
      setTarefa([...tarefa]);
   };


   return (
      <div>
         <form onSubmit={handleSubmit}>
            <button type="submit" style={{ marginRight: "5px" }}>Adicionar</button>
            <input
               type="text"
               value={inputText}
               onChange={(e) => setInputText(e.target.value)}
               placeholder="escreva a tarefa..."
            />
         </form>
         <span>
            <h5>Lista de Tarefas:</h5>
            <ul>
               {tarefa.map((item, index) => (
                  <li key={index} style={{ listStyle: "none" }}>
                     {item}
                     <button
                        style={{
                           marginLeft: "10px",
                           marginBottom: "5px",
                           cursor: "pointer",
                           borderRadius: "3px"
                        }}
                        onClick={() => removeTarefa(index)}
                     >
                        remover
                     </button>
                  </li>
               ))}

            </ul>
         </span>
      </div>
   );
}


function Ex7() {

   return (
      <div>
         <ListandoTarefas />
      </div>
   );
}

export default Ex7;