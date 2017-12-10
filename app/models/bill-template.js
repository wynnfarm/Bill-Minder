import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr(),
    billName: DS.attr(),
    account: DS.attr(),
    billAmount: DS.attr(),
    startDate: DS.attr(),
    endDate: DS.attr(),
    frequency: DS.attr()
});
