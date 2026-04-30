function Pessoa({ dados }) {
   if (dados.idade < 18) {
      return <span>Menos de 18</span>
   }

   return (
      <div>
         {Object.keys(dados).map(key => (
            <p key={key}>
               {key}: {dados[key]}
            </p>
         ))}
      </div>
   );
}



function Ex3() {

   const pessoa = {
      nome: 'Daniel',
      idade: 27,
      cidade: 'São Paulo'
   };

   return (
      <div>
         <Pessoa dados={pessoa} />
      </div>
   );
}

export default Ex3;