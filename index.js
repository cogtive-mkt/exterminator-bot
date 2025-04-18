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
