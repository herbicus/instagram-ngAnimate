angular.module('instagram', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'instamaticModule']);

angular.module('instagram').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/instamatic');

});

angular.module('instagram').value('clientId', '2122e774bdd44005ba53fb84478e67d6');

angular.module('instagram').run(function ($rootScope) {

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});

//var app = angular.module('instagram', ['ngAnimate']);
//app.animation('.cycleAnimation', function(){
////angular.module('instagram', ['ngAnimate']).animation('.cycleAnimation', function(){
//
//  return {
//    leave: function(element, done){
//      TweenMax.to(element , 0.5, {
//        display: 'none',
//        autoAlpha: 0,
//        //ease: Linear.easeNone
//        ease: Back.easeInOut,
//        onComplete: done
//      });
//    },
//
//    enter: function(){
//      TweenMax.from(element , 0.5, {
//        display: 'none',
//        autoAlpha: 0,
//        //ease: Linear.easeNone
//        ease: Back.easeInOut,
//        onComplete: done
//      });
//
//    }
//  };
//});
// end aniation function



// TWEENNAX

//$('section').on("load", function{
//  setTimeout(function() {
//    // Animation starts
//    TweenMax.to(this , 0.5, {
//      display: "none",
//      autoAlpha: 0,
//      zIndex: -1,
//      //ease: Linear.easeNone
//      ease: Back.easeInOut
//    });
//
//  }, 1000);
//
//});



