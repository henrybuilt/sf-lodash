import _ from 'lodash';
import moment from 'moment';

export default function labelForMoment(date) {
  var momentInstance = moment(date);
  var format = 'M/D/YY HH:mm a'; //standard long form - m/d/y 00:00am
  var timeDifference = _.round(Math.abs(momentInstance.diff(moment()) / 1000), 0);
  var secondsInOneDay = 60 * 60 * 24;

  if (timeDifference < secondsInOneDay) {
    format = 'HH:mm a'; // today - 00:00am
  }
  else if (moment().year() === momentInstance.year()) {
    format = 'M/D HH:mm a'; // this year - m/d 00:00am
  }

  return momentInstance.format(format);
}
