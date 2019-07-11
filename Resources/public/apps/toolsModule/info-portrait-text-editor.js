angular.module('toolsModule').directive('infoPortraitTextEditor', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    templateUrl: '/bundles/bibsdbinfoportrait/apps/toolsModule/info-portrait-text-editor.html'
  };
});