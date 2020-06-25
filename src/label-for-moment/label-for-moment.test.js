import labelForMoment from './label-for-moment';
import moment from 'moment';
import _ from 'lodash';

describe('_.labelForMoment()', () => {
  it('should return in 00:00am format if the moment is in today', () => {
    var momentInstance = moment().hour(10).minute(0);

    expect(labelForMoment(momentInstance)).to.equal('10:00am');

    momentInstance.add(12, 'hours');

    expect(labelForMoment(momentInstance)).to.equal('10:00pm');
  });

  it('should return in m/d 00:00am format if the moment is in this year but not today', () => {
    var momentInstance = moment(`04/26/${moment().year()}`).hour(9).minute(0);

    expect(labelForMoment(momentInstance)).to.equal('4/26 09:00am');

    momentInstance.add(12, 'hours');

    expect(labelForMoment(momentInstance)).to.equal('4/26 09:00pm');

    momentInstance.add(24, 'hours');

    expect(labelForMoment(momentInstance)).to.equal('4/27 09:00pm');
  });

  it('should return in m/d 00:00am format if the moment is in another year', () => {
    var momentInstance = moment('04/26/1995').hour(9).minute(0);

    expect(labelForMoment(momentInstance)).to.equal('4/26/95 09:00am');
  });
});
