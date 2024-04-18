import Movie from './Movie';
import Cart from './Cart';

const movie1 = new Movie(1, 'http://#img', 'Мстители', 'The Avengers', 'http://#img', 2012, 'США', 'Avengers Assemle', 'фантастика', 137, 2000);
const movie2 = new Movie(2, 'http://#img', 'Зеленая миля', 'The Green Mile', 'http://#img', 1999, 'США', 'Green Mile', 'драма', 137, 1000);

const cart = new Cart();
cart.add(movie1);
cart.add(movie2);

console.log(cart.getTotalPrice());
console.log(cart.getDiscountTotalPrice(10));

cart.deleteItem(1);
console.log(cart);