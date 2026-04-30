
function Lista({ listaItems }) {

   return (
      <ul>
         {listaItems.map((item, index) => (
            <li
               key={index}
               style={{ backgroundColor: "lightgray" }}
            >
               {item}
            </li>
         ))}
      </ul>
   );
}


function App({ exibirLista }) {
   const items = ['árvore', 'água', 'bicicleta', 'garrafa', 'flor'];

   if (exibirLista == true) {
      return (
         <Lista listaItems={items} />
      );
   }

   return (
      <p>Lista oculta</p>
   );

}


function Ex5() {

   return (
      <div>
         <App exibirLista={true} />
      </div>
   );
}

export default Ex5;