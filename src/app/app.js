import angular from 'angular';
import '../style/app.css';
import '../style/loading-bar.css';
import './loading-bar.js';

// intercept
import fetchIntercept from 'fetch-intercept';


// Call fetch to see your interceptors in action.


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor(fetchLoadingBar) {
    this.url = 'https://github.com/preboot/angular-webpack';
    fetchIntercept.register(fetchLoadingBar);
  }
  start() {
    alert('Start! \n\n It invokes some fetch, waits 2 seconds, then invokes some more fetch. Check the log in console to see it too!');

    const f = () => {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START!')
      Promise.all([
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
        fetch('http://localhost:8080/'),
      ])
        .then((html) => {
          console.log('Fetched!');
        });
    }

    f();
    setTimeout(() => {
      f();
    }, 2000);

  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  'angular-loading-bar',
// 'ngAnimate'
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;