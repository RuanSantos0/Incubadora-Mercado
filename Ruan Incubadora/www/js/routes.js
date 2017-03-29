angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.prateleira', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/prateleira.html',
        controller: 'prateleiraCtrl'
      }
    }
  })

  .state('tabsController.carrinho', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/carrinho.html',
        controller: 'carrinhoCtrl'
      }
    }
  })

  .state('tabsController.finalizarCompras', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/finalizarCompras.html',
        controller: 'finalizarComprasCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});