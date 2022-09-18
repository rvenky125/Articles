import moment from 'moment';
import {Linking} from 'react-native';
import {checkMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';

export function getDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
}

export async function doesLocationPermissionsBlocked() {
  const locationPermissionStatuses = await checkMultiple([
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
  ]);

  const oneLocationBlocked =
    locationPermissionStatuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] ===
      RESULTS.BLOCKED ||
    locationPermissionStatuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] ===
      RESULTS.BLOCKED;

  console.log(
    'Location permission status',
    locationPermissionStatuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
    locationPermissionStatuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION],
    oneLocationBlocked,
  );

  return oneLocationBlocked;
}

export function getTimestampFromString(date_string) {
  return moment(date_string, 'DD-MM-YYYY HH:mm:ss').toDate().getTime();
}

export function getFormattedTimestampFromTimestamp(timestamp) {
  return moment(getFormattedDateFromTimestamp(timestamp), 'YYYY-MM-DD HH:mm:ss')
    .toDate()
    .getTime();
}

export function getFormattedDateToShowFromString(date_string) {
  if (!date_string) {
    return '';
  }
  try {
    return moment(date_string, 'YYYY-MM-DD HH:mm:ss').format(
      'DD-MM-YYYY HH:mm:ss',
    );
  } catch (e) {
    console.log('failed to solve date', e);
    return '';
  }
}

export function getFormattedDate(
  date,
  extraHoursToAdd = 0,
  extraMinutesToAdd = 0,
) {
  const milliSecondsToAdd =
    extraHoursToAdd * (60 * 60 * 1000) + extraMinutesToAdd * (60 * 1000);
  const tempDate = new Date(date.getTime() + milliSecondsToAdd);
  const dd = tempDate.getDate().toString().padStart(2, '0');
  const MM = (tempDate.getMonth() + 1).toString().padStart(2, '0'); //January is 0!
  const yyyy = tempDate.getFullYear();

  const hh = tempDate.getHours().toString().padStart(2, '0');
  const mm = tempDate.getMinutes().toString().padStart(2, '0');
  let ss = tempDate.getSeconds().toString().padStart(2, '0');

  if (ss == '00') {
    ss = new Date().getSeconds().toString().padStart(2, '0');
  }

  return yyyy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
}

export function getFormattedDateFromTimestamp(timestamp) {
  const tempDate = new Date(timestamp);
  const dd = tempDate.getDate().toString().padStart(2, '0');
  const MM = (tempDate.getMonth() + 1).toString().padStart(2, '0'); //January is 0!
  const yyyy = tempDate.getFullYear();

  const hh = tempDate.getHours().toString().padStart(2, '0');
  const mm = tempDate.getMinutes().toString().padStart(2, '0');
  let ss = tempDate.getSeconds().toString().padStart(2, '0');

  return yyyy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
}

export function groupByMultiple(array, f) {
  let groups = {};
  array.forEach(function (o) {
    var group = JSON.stringify(f(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.keys(groups).map(function (group) {
    return groups[group];
  });
}
