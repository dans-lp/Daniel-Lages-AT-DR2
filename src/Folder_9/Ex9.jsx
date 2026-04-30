import { useState } from "react";


function ListagemDeTarefas({ items: arr }) {
   const [checkedStates, setCheckedStates] = useState(
      new Array(arr.length).fill(false)
   );

   const handleCheck = (index) => {
      const newCheckedStates = [...checkedStates];
      newCheckedStates[index] = !newCheckedStates[index];
      setCheckedStates(newCheckedStates);
   };

   return (
      <div>
         <h5>Tarefas Checklist</h5>
         <ul>
            {arr.map((item, idx) =>
               <li key={idx}>
                  {checkedStates[idx] ? <del>{item}</del> : item}
                  <input
                     type="checkbox"
                     checked={checkedStates[idx]}
                     onChange={() => handleCheck(idx)}
                  />
               </li>
            )}
         </ul>
      </div>
   );
}

function Ex9() {

   const arrTarefas = [
      "Tarefa 1",
      "Tarefa 2",
      "Tarefa 3",
      "Tarefa 4",
      "Tarefa 5"
   ];

   return (
      <div>
         <ListagemDeTarefas items={arrTarefas} />
      </div>
   );
}

export default Ex9;