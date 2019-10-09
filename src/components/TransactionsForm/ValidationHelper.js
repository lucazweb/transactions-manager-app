export const descriptionValidation = description => {
  let pattern = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
  if(description && pattern.test(description)){
      return true
  } else {
    throw new Error('Check Description Field, only words.');
  }
};

export const categoryValidation = category => {
  if(category.includes('Credit') || category.includes('Debit') ){
      return true;
  }
  throw new Error('Category injection error.');
}

export const valueValidation = value => {
  if(typeof(value) == 'number' && value > 0){
    return true;
  }
  throw new Error('Check Value Field. Only positive numbers');
}
