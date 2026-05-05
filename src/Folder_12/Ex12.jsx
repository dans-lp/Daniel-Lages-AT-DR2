import { useState } from "react";

function DataList({ data }) {
   return (
      <div>
         <ul>
            {data.map((item) =>
               <li key={item.id}>
                  {item.name}
               </li>
            )}
         </ul>
      </div>
   );
}


function ListItem({ nomeSubmetido, lista }) {

   return (
      <>
      </>
   );
}



function Ex12() {

   const items = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "Jane" },
      { id: 5, name: "Michael" },
      { id: 6, name: "Sarah" },
   ];

   const [inputText, setInputText] = useState('');
   const [nameSubmit, setNameSubmit] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      if (inputText.trim() == '') return;

      setNameSubmit(e);
      console.log(e);

      setInputText('');
   };



   return (
      <div>
         <h5>Lista de nomes:</h5>
         <DataList data={items} />
         <form onSubmit={handleSubmit}>
            <button type="submit" style={{ marginRight: "5px" }}>Filtrar</button>
            <input
               type="text"
               value={inputText}
               onChange={(e) => setInputText(e.target.value)}
               placeholder="escreva o nome..."
            />
         </form>
      </div>
   );
}

export default Ex12;