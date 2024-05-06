import express, { json } from 'express';
import cors from 'cors';
import { MercadoPagoConfig, Preference } from "mercadopago";


const client = new MercadoPagoConfig({
    accessToken: 'APP_USR-7923538825201342-042818-b28e3f01181ccdefaead25a23eefd7d2-452437943',
})

const app = express();
const port = 3000;

const cuadernilloUrls = {
    "Manejo de la ansiedad": "https://6637f09f2788c428fa1f40e7--gleaming-selkie-69958e.netlify.app/",
    "Autoestima": "https://6637f0ba2e909522a49f9699--leafy-baklava-fca14b.netlify.app/",
    "Manejo del panico": "https://6637f0cf822f9426d81cb1b3--superb-bonbon-c88320.netlify.app/",
};

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Soy el server")
})

app.post("/create_preference", async (req, res) => {
  try{
    const { title } = req.body;
    const body = {
        items: [
            {
                title: req.body.title,
                quantity: Number(req.body.quantity),
                unit_price: Number(req.body.price),
                currency_id: 'ARS',
            },
        ],
        back_urls: {
            success: cuadernilloUrls[title],
            failure:"",
            pending: "",
        },
        auto_return: "approved",
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });


    res.json({
        id: result.id, 
    })

  } catch (error) {
     console.log(error);
     res.status(500),json({
        error: "Error al crear la preferencia ;(",
     })
  }
});


app.listen(port, ()=> {
    console.log(`El servidor esta corriendo por ${port}`)
})

