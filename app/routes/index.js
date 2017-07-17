import Ember from 'ember';
var products = [{
  title: "Toyota prius right-back tail light",
  make: "2013",
  model: "XW30",
  image: "https://i.ebayimg.com/thumbs/images/g/ZrYAAOSwc-tY8ZwG/s-l225.jpg",
  price: 10000
}, {
  title: "Toyota prado front-right headlight",
  make: "2011",
  model: "XW70",
  image: "https://i.ebayimg.com/00/s/MTI4MFg5NjA=/z/gEkAAOSw~gRV59gM/$_58.JPG",
  price: 24000
}, {
  title: "Subaru forester right side mirror",
  make: "2010",
  model: "XT",
  image: "https://i.ebayimg.com/thumbs/images/g/G9gAAOSwHHFY-T1V/s-l225.jpg",
  price: 6000
}];
export default Ember.Route.extend({
  model() {
    return this.store.findAll('products');
  },
});
