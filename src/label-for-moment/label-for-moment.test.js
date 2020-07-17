import labelForMoment from './label-for-moment';
import moment from 'moment';
import _ from 'lodash';

describe('_.labelForMoment()', () => {
  it('should return the time in the right format', () => {
    var momentInstance = moment().hour(1).minute(0);

    expect(labelForMoment(momentInstance)).to.equal('1:00am');

    momentInstance.add(12, 'hours');

    expect(labelForMoment(momentInstance)).to.equal('1:00pm');

    momentInstance.add(10, 'hours');

    expect(labelForMoment(momentInstance)).to.equal('11:00pm');
  });

  it('should return in 00:00am format (only time) if the moment is in today', () => {
    var momentInstance = moment().hour(10).minute(0);

    expect(labelForMoment(momentInstance)).to.equal('10:00am');

    momentInstance.add(12, 'hours');

    expect(labelForMoment(momentInstance)).to.equal('10:00pm');
  });

  it('should return in m/d 00:00am format if the moment is in this year but not today', () => {
    var momentInstance = moment(new Date(`04/26/${moment().year()}`)).hour(9).minute(0);

    expect(labelForMoment(momentInstance)).to.equal('4/26 9:00am');

    momentInstance.add(12, 'hours');

    expect(labelForMoment(momentInstance)).to.equal('4/26 9:00pm');

    momentInstance.add(24, 'hours');

    expect(labelForMoment(momentInstance)).to.equal('4/27 9:00pm');
  });

  it('should return in m/d/yy 00:00am format if the moment is in another year', () => {
    var momentInstance = moment(new Date('04/26/1995')).hour(9).minute(0);

    expect(labelForMoment(momentInstance)).to.equal('4/26/95 9:00am');
  });
});
