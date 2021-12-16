const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productos = [
  {
    id: 1,
    nombre: "Salsa de Tomate",
    precio: "5.50",
    descripcion: "Tablet de escritorio",
    categoria: "Salsas",  
    imagen:
      "https://res.cloudinary.com/riqra/image/upload/w_906,h_906,c_limit,q_auto,f_auto/v1622042192/sellers/molitalia-jq/products/j7fvv0qq3ccngbnyoodp.jpg",
  },
  {
    id: 2,
    nombre: '"Ajinomen" para todos los gustos',
    precio: "1.50",
    descripcion: "Empaquetado de Ajinomen facil y rapido de preparar",
    categoria: "Empaquetados",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBKlOi8JnRFCfa7T2LQ1rPo5QevLpEqspAg&usqp=CAU",
  },
  {
    id: 3,
    nombre: "Bebidas energeticas",
    precio: "5.50",
    descripcion: "4 bebidas energeticas para que disfrutes en este calor",
    categoria: "Refrescos",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSe_0kIhxpIuWEpPIOBu9a2uNZU97i8aEeQ&usqp=CAU",
  },
  {
    id: 1,
    nombre: "Huancaina de Alacena",
    precio: "120.50",
    descripcion: "Huancaina hecha en casa x24 unidades",
    categoria: "Salsas",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9WW1UCiQkIF5nDRCeeUPDbgUFeaIEt_XSg&usqp=CAU",
  },
];

const categorias = [
  {
    id: 1,
    nombre: "Salsas",
  },
    id: 1,
    nombre: "Salsas",
  {
    id: 2,
    nombre: "Empaquetados",
  },
  {
    id: 3,
    nombre: "Refrescos",
  },
];  

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/products", (req, res) => {
  res.status("200").json({
    ok: true,
    message: "Lista de productos",
    products: productos,
  });
});
app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (email === "pedro@gmail.com" && password === "123456") {
    return res.status(201).json({
      ok: true,
      message: "Autenticado correctamente",
    });
  }
  return res.status(401).json({
    ok: false,
    message: "Credenciales incorrectas",
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
