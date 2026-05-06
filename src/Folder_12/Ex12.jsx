import { useState } from "react";


function DataList({ data }) {
   return (
      <div>
         <table style={{
            borderCollapse: "collapse",
            width: "100%",
            marginBottom: "10px"
         }}>
            <thead style={{
               border: "1px solid #dddddd",
               textAlign: "left",
               backgroundColor: "#f2f2f2"
            }}>
               <tr>
                  <th>Id</th>
                  <th>Nome</th>
               </tr>
            </thead>
            <tbody>
               {data.map((item) => (
                  <tr key={item.id}>
                     <td style={{
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        padding: "8px"
                     }}>{item.id}</td>
                     <td style={{
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        padding: "8px"
                     }}>{item.name}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}


function ListItem({ nomeSubmetido, lista }) {

   const listaFiltrada = lista.filter(item => item.name === nomeSubmetido);

   return (
      <div>
         {nomeSubmetido !== '' && listaFiltrada.length === 0 && (
            <p>Nenhum nome encontrado.</p>
         )}

         <ul className="centerList">
            {listaFiltrada.map(itemFiltrado => (
               <li key={itemFiltrado.id}>
                  {itemFiltrado.name} - Id:{itemFiltrado.id}
               </li>
            ))}
         </ul>
      </div>
   );
}

function Ex12() {

   const items = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "Alice" },
      { id: 5, name: "Jane" },
      { id: 6, name: "Michael" },
      { id: 9, name: "Sarah" },
   ];

   const [inputText, setInputText] = useState('');
   const [nomeEscolhido, setNomeEscolhido] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      if (inputText.trim() == '') return;

      setNomeEscolhido(inputText);
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
               placeholder="escreva um nome..."
            />
         </form>
         <div>
            <h5>Resposta:</h5>
            <ListItem nomeSubmetido={nomeEscolhido} lista={items} />
         </div>
      </div>

   );
}

export default Ex12;