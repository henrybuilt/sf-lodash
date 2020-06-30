import _ from 'lodash';

export default function labelForMoment(momentInstance) {
  var now = new Date();
  var format = 'M/D/YY h:mma'; //standard long form - m/d/y 00:00am
  var timeDifference = _.round(Math.abs(momentInstance.diff(now) / 1000), 0);
  var secondsInOneDay = 60 * 60 * 24;

  if (timeDifference < secondsInOneDay) {
    format = 'h:mma'; // today - 00:00am
  }
  else if (now.getFullYear() === momentInstance.year()) {
    format = 'M/D h:mma'; // this year - m/d 00:00am
  }

  return momentInstance.format(format);
}
