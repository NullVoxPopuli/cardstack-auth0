import Ember from 'ember';
import layout from '../templates/components/auth0-change-password';

export default Ember.Component.extend({
  layout,
  tagName: '',
  auth0: Ember.inject.service(),
})
