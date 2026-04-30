import { useState } from "react";

function BoasVindas({ nome, senha }) {
   if (nome == 'daniel' && senha == '123') {
      return <p>Bem-vindo, {nome}!</p>
   }

   return <p>Por favor, faça login.</p>;
}

function LoginForm() {
   const [nome, setNome] = useState('');
   const [senha, setSenha] = useState('');
   const [autenticado, setAutenticado] = useState(false)

   const handleSubmit = (event) => {
      event.preventDefault();
      setAutenticado(true);
   }


   return (
      <>
         {autenticado ? <BoasVindas nome={nome} senha={senha} /> : null}
         <form onSubmit={handleSubmit}>
            <label>Nome de usuário</label>
            <input
               type="text"
               value={nome}
               onChange={(e) => setNome(e.target.value)}
            />

            <label>Senha</label>
            <input
               type="text"
               value={senha}
               onChange={(e) => setSenha(e.target.value)}
            />
            <br />
            <button type="submit">login</button>
         </form>
      </>
   );
}



function Ex1() {

   return (
      <div>
         <LoginForm />
      </div>
   );
}

export default Ex1;