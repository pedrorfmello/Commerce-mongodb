db.produtos.find(
  { curtidas: { $gt: 10, $lt: 100 } },
  { nome: 1, _id: 0, curtidas: 1 },
);