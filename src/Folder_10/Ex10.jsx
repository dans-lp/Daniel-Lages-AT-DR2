import { useState } from "react";

function Ex10() {
   const [users, setUsers] = useState([]);

   const fetchUsers = () => {
      fetch("/data.json")
         .then((res) => {
            return res.json();
         })
         .then((data) => {
            setUsers(data.users);
         })
         .catch((error) => {
            console.error(error);
         });

      console.log(users);
   };

   const templateStringsUsers = users.map((usr, idx) =>
      `<li id="${idx}">
            ${usr.name} - ${usr.lastName} - ${usr.email}
         </li>`
   ).join("");


   return (
      <div>
         <button onClick={fetchUsers}>Exibir usuários</button>
         <ul dangerouslySetInnerHTML={{ __html: templateStringsUsers }} />
      </div>
   );
}

export default Ex10;