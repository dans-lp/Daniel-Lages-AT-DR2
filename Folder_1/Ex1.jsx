function LoginForm() {

   return (
      <form action="">
         <label htmlFor="nome">Nome de usuário
         </label>
         <input type="text" name="" id="" /><br />

         <label htmlFor="senha">Senha</label>
         <input type="text" />
      </form>
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