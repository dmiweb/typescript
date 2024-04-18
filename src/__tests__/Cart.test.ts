import Cart from '../Cart'
import Movie from '../Movie'

test('testing function add()', () => {
  const movie1 = new Movie(1, 'http://#img', 'Мстители', 'The Avengers', 'http://#img', 2012, 'США', 'Avengers Assemle', 'фантастика', 137, 2000);

  const cart = new Cart();
  cart.add(movie1);

  expect(cart.items.length).toBe(1);
});

test('testing function getTotalPrice()', () => {
  const movie1 = new Movie(1, 'http://#img', 'Мстители', 'The Avengers', 'http://#img', 2012, 'США', 'Avengers Assemle', 'фантастика', 137, 2000);
  const movie2 = new Movie(2, 'http://#img', 'Зеленая миля', 'The Green Mile', 'http://#img', 1999, 'США', 'Green Mile', 'драма', 137, 1000);

  const cart = new Cart();
  cart.add(movie1);
  cart.add(movie2);

  const result = cart.getTotalPrice()

  expect(result).toBe(3000);
});

test('testing function getDiscountTotalPrice()', () => {
  const movie1 = new Movie(1, 'http://#img', 'Мстители', 'The Avengers', 'http://#img', 2012, 'США', 'Avengers Assemle', 'фантастика', 137, 2000);

  const cart = new Cart();
  cart.add(movie1);

  const result = cart.getDiscountTotalPrice(10)

  expect(result).toBe(1800);
});

test('testing function deleteItem()', () => {
  const movie1 = new Movie(1, 'http://#img', 'Мстители', 'The Avengers', 'http://#img', 2012, 'США', 'Avengers Assemle', 'фантастика', 137, 2000);
  const movie2 = new Movie(2, 'http://#img', 'Зеленая миля', 'The Green Mile', 'http://#img', 1999, 'США', 'Green Mile', 'драма', 137, 1000);

  const cart = new Cart();
  cart.add(movie1);
  cart.add(movie2);

  cart.deleteItem(1);

  expect(cart.items.length).toBe(1);
});

