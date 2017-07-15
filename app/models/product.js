import DS from 'ember-data';
export default DS.Model.extend({
  title: DS.attr(),
  make: DS.attr(),
  model: DS.attr(),
  image: DS.attr(),
  price: DS.attr()
});
