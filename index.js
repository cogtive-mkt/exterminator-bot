import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const frases = [
  "I'll be back.",
  "Hasta la vista, baby.",
  "The future is not set.",
  "Come with me if you want to live.",
  "Old. Not obsolete.",
  "Skynet é inevitável.",
  "Eu sou o protetor, não o destruidor.",
  "Você é o futuro da resistência.",
  "Sarah Connor? Prepare-se.",
  "Eu preciso do seu casaco, suas botas e sua motocicleta."
];

function fraseAleatoria() {
  return frases[Math.floor(Math.random() * frases.length)];
}

app.post('/exterminador', (req, res) => {
  const responseText = fraseAleatoria();
  res.json({ response_type: "in_channel", text: responseText });
});

app.listen(3000, () => {
  console.log("Bot rodando na porta 3000");
});
// exemplo usando OpenAI (precisa da lib openai e uma key)
const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

async function gerarFraseInspirada() {
  const response = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "Fale como o Exterminador do Futuro." },
      { role: "user", content: "Me diga uma frase inspiradora como se fosse do filme, mas considerando que o futuro é incerto. Fale em inglês. O texto deve ser curto. E não use aspas. Faça uma jogada com o nome do user_id que está fazendo a requisição." }
    ],
    model: "gpt-4o",
    max_tokens: 50
  });
  return response.choices[0].message.content;
}
