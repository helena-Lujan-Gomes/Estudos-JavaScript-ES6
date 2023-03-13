let ingredientes = [
  'agua',
  'farinha',
  'ovo',
  'corante',
  'sal'
];

ingredientes.push('cebola'); //adiciona item na lista
ingredientes.pop(); //remove o último item do array
ingredientes.shift(); //remove o primeiro item do array

console.log(ingredientes);

console.log(`Total de ingredientes: ${ingredientes.length}`);