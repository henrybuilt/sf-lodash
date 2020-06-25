import labelForMoment from './label-for-moment';
import moment from 'moment';
import _ from 'lodash';

describe('_.labelForMoment()', () => {
  it('should return in 00:00am format if the moment is in today', () => {
    expect(labelForMoment(moment().subtract(20, 'second'))).to.equal('now');
    expect(labelForMoment(moment().subtract(59, 'second'))).to.equal('now');
  });

  it('should return in m/d 00:00am format if the moment is in this year but not today', () => {
    expect(labelForMoment(moment(`04/26/${moment().year()}`))).to.equal('4/26 12:00 AM')
  });

  it('should return in m/d 00:00am format if the moment is in another year', () => {
    expect(labelForMoment(moment('04/26/1995'))).to.equal('4/26/95 12:00 AM')
  });
});
