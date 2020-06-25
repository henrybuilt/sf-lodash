import labelForMoment from './label-for-moment';
import moment from 'moment';
import _ from 'lodash';

describe('_.labelForMoment()', () => {
  it('should return in minute if the difference time is less than 1 hour', () => {
    expect(labelForMoment(moment().add(15, 'minute'))).to.equal('15m');
  });

  it('should return in hour if the difference time is less than 1 day', () => {
    expect(labelForMoment(moment().add(1, 'hour'))).to.equal('1h');
  });

  it('should return in m/d format if the difference time is less than more than 1 day and in the same year', () => {
    var momentLabel = labelForMoment(moment().add(2, 'day'));
    var parsedLabel = _.split(momentLabel, '/');

    expect(parsedLabel.length).to.equal(2);
  });

  it('should return in m/d/yyyy format if the difference time is less than more than 1 day and in the different year', () => {
    var momentLabel = labelForMoment(moment().add(2, 'year'));
    var parsedLabel = _.split(momentLabel, '/');

    expect(parsedLabel.length).to.equal(3);
  });
});
