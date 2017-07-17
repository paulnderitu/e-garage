import Ember from 'ember';
export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },
    saveProduct1() {
      var params = {
        title: this.get('title'),
        make: this.get('make'),
        model: this.get('model'),
        image: this.get('image'),
        price: this.get('price'),
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct2', params);
    }
  }
});
