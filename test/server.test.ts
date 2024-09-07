test ('deve testar os servidor', async () => {
  const res = await fetch('http://localhost:4200/pensamentos', {
    method: 'POST', 
    body: {
    "conteudo": "conteudoo",
    "autoria": "camila",
    "modelo": "modelo1"
    }
  })

  expect(res.status).toBe(201)
})