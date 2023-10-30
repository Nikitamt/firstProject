window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let tabs = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for(let i = a; i < tabContent.length; i++) {
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

  info.addEventListener('click', function(event) {
    let target = event.target;

    if(target && target.classList.contains('info-header-tab')) {
      for(let i = 0; i < tabs.length; i++) {
        if (target == tabs[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer

  let deadline = '2023-10-31';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());

    let seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000 * 60 * 60)));

    return {
      'total' : t,
      'seconds' : seconds,
      'minutes' : minutes,
      'hours' : hours
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
  
})