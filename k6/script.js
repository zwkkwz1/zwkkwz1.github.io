import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://pyqtf.enbrands.com/h5/ticket-land/index.html');
  sleep(1);
}
