// BEGIN-SNIPPET pie-chart-route
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7],
    ];
  },

});
// END-SNIPPET
