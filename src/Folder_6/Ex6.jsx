

/*
const getFakePerson = async () => {
   try {
      let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
      let { results } = res.json();
      console.log(results);
   } catch (error) {
      console.error(error);
   }
};

getFakePerson();
*/

import { useState } from "react";

function Ex6() {
   const [users, setUsers] = useState([]);

   const fetchUsr = async () => {
      try {
         const res = await fetch("https://jsonplaceholder.typicode.com/users");
         const data = await res.json();
         setUsers(data);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div>
         <button onClick={fetchUsr}>Exibir usuários</button>
         <ul>
            {users.map((usr) => (
               <li style={{ listStyle: "none" }} key={usr.id}>
                  {usr.name}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Ex6;