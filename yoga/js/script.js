window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let tabs = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    let target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tabs.length; i++) {
        if (target == tabs[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  let deadline = '2023-11-25';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());

    let seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));

    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours
    }
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let timeRemaining = getTimeRemaining(endtime);
      hours.textContent = addZero(timeRemaining.hours);
      minutes.textContent = addZero(timeRemaining.minutes);
      seconds.textContent = addZero(timeRemaining.seconds);

      function addZero(num) {
        if (num < 10) {
          return '0' + num;
        } else return num;
      }

      if (timeRemaining.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);

  // Modal

  let buttonsMore = document.getElementsByClassName('description-btn'),
    more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  addListener(more);
  for (let elem of buttonsMore) {
    addListener(elem);
  }

  function addListener(elem) {
    elem.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  }


  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  })

  // Form

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
    formBottom = document.getElementById('form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      let formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');


          request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
              resolve(); 
            } else if (request.readyState === 4 && request.status === 200) {
              resolve();
            } else {
              reject();
            }
          })

          request.send(data);
        })
      } // end postData

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      let obj = {};
      formData.forEach(function(value, key) {
        obj[key] = value;
      });
      let json = JSON.stringify(obj);

      postData(json)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => statusMessage.innerHTML = message.success)
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput)
    });
  }
  sendForm(form);
  sendForm(formBottom);

  // form.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   form.appendChild(statusMessage);

  //   let request = new XMLHttpRequest();
  //   request.open('POST', 'server.php');
  //   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  //   let formData = new FormData(form);
  //   let obj = {};
  //   formData.forEach(function(value, key) {
  //     obj[key] = value;
  //   });
  //   let json = JSON.stringify(obj);
  //   request.send(json);

  //   request.addEventListener('readystatechange', function() {
  //     if (request.readyState < 4) {
  //       statusMessage.innerHTML = message.loading;
  //     } else if (request.readyState === 4 && request.status === 200) {
  //       statusMessage.innerHTML = message.success;
  //     } else {
  //       statusMessage.innerHTML = message.failure;
  //     }
  //   });

  //   for (let i = 0; i < input.length; i++) {
  //     input[i].value = '';
  //   }
  // })
})