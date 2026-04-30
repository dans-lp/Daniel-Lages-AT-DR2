
function FotoDoProduto({ url }) {
   return (
      <div style={{
         display: "flex",
         height: "60%",
         width: "100%",
         marginTop: "10px",
         justifyContent: "center"
      }}>
         <img src={url} style={{ border: "solid 3px #F08080", borderRadius: "8px" }} />
      </div>
   );
}

function TextoDoProduto({ nome, desc, preco }) {

   return (
      <div style={{ marginInline: "10px" }}>
         <div style={{
            display: "flex",
            justifyContent: "space-between",
         }}>
            <span>{nome}</span>
            <span>{preco}</span>
         </div>
         <span style={{
            display: "flex",
            marginTop: "30px",
            flexWrap: "wrap",
            fontSize: "10px",
            textAlign: "start",
            lineHeight: "normal"
         }}>
            {desc}
         </span>
      </div>
   );
}


function CartaoProduto({ nome, desc, preco }) {
   return (
      <div style={{ display: "flex", justifyContent: "center" }}>
         <div style={{
            display: "flex",
            border: "solid 2px red",
            borderRadius: "6px",
            flexDirection: "column",
            width: "300px",
            height: "450px"
         }}>
            <FotoDoProduto url={"https://cdn.geekwire.com/wp-content/uploads/2022/09/Kindle-Black-Covers.jpg"} />
            <hr style={{ width: "90%", color: "#f1f1f3", marginBottom: "20px" }} />
            <TextoDoProduto nome={nome} desc={desc} preco={preco} />
         </div>
      </div>
   );
}



function Ex8() {


   return (
      <div>
         <CartaoProduto
            nome={"Kindle 16Gb"}
            desc={"Amazon Kindle devices enable users to browse, buy, download,and read e-books, newspapers, magazines, Audible audiobooks, and other digital media via wireless networking to the Kindle Store."}
            preco={"R$559,00"}
         />
      </div>
   );
}

export default Ex8;