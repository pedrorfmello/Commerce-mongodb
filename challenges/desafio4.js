db.produtos.find(
  { vendidos: { $gt: 50, $lt: 100 } },
  { _id: 0, vendidos: 1, nome: 1 },
).sort({ vendidos: 1 });