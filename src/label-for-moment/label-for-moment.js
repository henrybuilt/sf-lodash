import _ from 'lodash';
import moment from 'moment';

export default function labelForMoment(momentInstance) {
  var format = 'M/D/YY LT'; //standard long form - m/d/y 00:00am
  var timeDifference = _.round(Math.abs(momentInstance.diff(moment()) / 1000), 0);
  var secondsInOneDay = 60 * 60 * 24; // number of min in one hour * number of seconds in one min * number of hours in a day

  if (timeDifference < secondsInOneDay) {
    format = 'LT'; // today - 00:00am
  }
  else if (moment().year() === momentInstance.year()) {
    format = 'M/D LT'; // this year - m/d 00:00am
  }

  return momentInstance.format(format);
}
