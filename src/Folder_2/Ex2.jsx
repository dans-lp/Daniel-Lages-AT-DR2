function ExibindoNomes({ listaNomes }) {

   return (
      <>
         <ul>
            {listaNomes.map((nome, index) =>
               <li key={index}>
                  {nome}
               </li>
            )}
         </ul>
      </>
   );
}

function Ex2() {
   const nomes = [
      'Carla',
      'Mario',
      'Mohammed',
      'Pedro',
      'Thiago'
   ];

   return (
      <div>
         <ExibindoNomes listaNomes={nomes} key={nomes.id} />
      </div>
   );
}

export default Ex2;