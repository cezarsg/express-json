
exports.post = (req, res, next) => {
    var person = req.body;    
    console.log(`Nome: ${person.nome}`);
    console.log(`Idade: ${person.idade}`);
    console.log(`Cidade: ${person.cidade.nome}`);
    res.status(201).send('POST Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`PUT Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`DELETE Requisição recebida com sucesso! ${id}`);
};
exports.get = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`GET Requisição recebida com sucesso!`);
};


