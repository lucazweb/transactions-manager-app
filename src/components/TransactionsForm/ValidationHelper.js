export const descriptionValidation = description => {
  let pattern = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
  if(description && pattern.test(description)){
      return true
  } else {
    throw new Error('Campo descrição só deve ter palavras.');
  }
};

export const categoryValidation = category => {
  if(category.includes('Credit') || category.includes('Debit') ){
      return true;
  }
  throw new Error('Selecione uma categoria existente');
}

export const valueValidation = value => {
  if(typeof(value) == 'number' && value > 0){
    return true;
  }
  throw new Error('Os valores só podem ser positivos.');
}
