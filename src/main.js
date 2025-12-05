import './style.scss';
import * as bootstrap from 'bootstrap';
import { DateTime } from 'luxon';

document.addEventListener('DOMContentLoaded', () => {
  const modalElement = document.getElementById('timeModal');
  const myModal = new bootstrap.Modal(modalElement);
  
  const btn = document.getElementById('showTimeBtn');
  const output = document.getElementById('luxonOutput');

  btn.addEventListener('click', () => {
    myModal.show();
  });

  modalElement.addEventListener('show.bs.modal', () => {
    const now = DateTime.now()
      .setLocale('ru')
      .toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    output.innerText = now;
  });
});