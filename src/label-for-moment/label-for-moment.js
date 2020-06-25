import _ from 'lodash';

export default function labelForMoment(date) {
  var date = new Date(date);
  var now = new Date();
  var timeLabel = '';
  var timeDifference = _.round(Math.abs((now - date)) / 1000, 0); // returns the difference in milliseconds
  var maxSecondsInOneHour = 60 * 59; // unit * min in one hour * number of seconds in one min
  var secondsInOneMinute = 60; // unit * number of seconds in one min
  var secondsInOneDay = 60 * 60 * 24; // unit * min in one hour * number of seconds in one min * number of hours in a day
  var secondsInOneHour = 60 * 60; // unit * min in one hour * number of seconds in one min

  if (timeDifference < secondsInOneHour) {
    timeLabel = _.toString(timeDifference / secondsInOneMinute) + 'm'; // < 60 min
  }
  else if (timeDifference < secondsInOneDay && timeDifference >= secondsInOneHour) {
    timeLabel = _.toString(_.round(timeDifference / secondsInOneHour, 0)) + 'h'; // < 24 hour
  }
  else if (timeDifference >= secondsInOneDay && date.getFullYear() === now.getFullYear()) {
    timeLabel = date.getMonth() + '/' + date.getDay(); // > 24 hour and same year
  }
  else {
    timeLabel = date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear(); // > 24 hour and different year
  }

  return timeLabel;
}
