import { useState } from "react";


function Ex4() {

   const [clique, setClique] = useState(0);

   if (clique == 1) {
      alert("Você clicou");
   }

   const Clicavel = () => {
      return (
         <button onClick={() => setClique(1)}>
            Clique aqui
         </button>
      );
   };

   return (
      <div>
         <Clicavel />
      </div>
   );
}

export default Ex4;