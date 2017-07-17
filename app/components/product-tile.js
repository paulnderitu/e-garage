import Ember from 'ember';
export default Ember.Component.extend({
  actions: {
    update(product, params) {
      this.sendAction('update', product, params);
    },
    delete(rental) {
      if(confirm('Are you sure you want to delete this product?')) {
        this.sendAction('destroyProduct', product);
      }
    }
  }
});
