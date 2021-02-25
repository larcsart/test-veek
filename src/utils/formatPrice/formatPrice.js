const formatPrice = (amount) => amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

export default formatPrice;
