/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/theme/core/js/custom/apps/projects/list/list.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/apps/projects/list/list.js ***!
  \**************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTProjectList = function () {\n  var initChart = function initChart() {\n    // init chart\n    var element = document.getElementById(\"kt_project_list_chart\");\n\n    if (!element) {\n      return;\n    }\n\n    var config = {\n      type: 'doughnut',\n      data: {\n        datasets: [{\n          data: [30, 45, 25],\n          backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF']\n        }],\n        labels: ['Active', 'Completed', 'Yet to start']\n      },\n      options: {\n        chart: {\n          fontFamily: 'inherit'\n        },\n        cutout: '75%',\n        cutoutPercentage: 65,\n        responsive: true,\n        maintainAspectRatio: false,\n        title: {\n          display: false\n        },\n        animation: {\n          animateScale: true,\n          animateRotate: true\n        },\n        tooltips: {\n          enabled: true,\n          intersect: false,\n          mode: 'nearest',\n          bodySpacing: 5,\n          yPadding: 10,\n          xPadding: 10,\n          caretPadding: 0,\n          displayColors: false,\n          backgroundColor: '#20D489',\n          titleFontColor: '#ffffff',\n          cornerRadius: 4,\n          footerSpacing: 0,\n          titleSpacing: 0\n        },\n        plugins: {\n          legend: {\n            display: false\n          }\n        }\n      }\n    };\n    var ctx = element.getContext('2d');\n    var myDoughnut = new Chart(ctx, config);\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initChart();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectList.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FwcHMvcHJvamVjdHMvbGlzdC9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGFBQWEsR0FBRyxZQUFZO0FBQzVCLE1BQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVk7QUFDeEI7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix1QkFBeEIsQ0FBZDs7QUFFQSxRQUFJLENBQUNGLE9BQUwsRUFBYztBQUNWO0FBQ0g7O0FBRUQsUUFBSUcsTUFBTSxHQUFHO0FBQ1RDLE1BQUFBLElBQUksRUFBRSxVQURHO0FBRVRDLE1BQUFBLElBQUksRUFBRTtBQUNGQyxRQUFBQSxRQUFRLEVBQUUsQ0FBQztBQUNQRCxVQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FEQztBQUVQRSxVQUFBQSxlQUFlLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QjtBQUZWLFNBQUQsQ0FEUjtBQUtGQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixjQUF4QjtBQUxOLE9BRkc7QUFTVEMsTUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxVQUFVLEVBQUU7QUFEVCxTQURGO0FBSUxDLFFBQUFBLE1BQU0sRUFBRSxLQUpIO0FBS0xDLFFBQUFBLGdCQUFnQixFQUFFLEVBTGI7QUFNTEMsUUFBQUEsVUFBVSxFQUFFLElBTlA7QUFPTEMsUUFBQUEsbUJBQW1CLEVBQUUsS0FQaEI7QUFRTEMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLE9BQU8sRUFBRTtBQUROLFNBUkY7QUFXTEMsUUFBQUEsU0FBUyxFQUFFO0FBQ1BDLFVBQUFBLFlBQVksRUFBRSxJQURQO0FBRVBDLFVBQUFBLGFBQWEsRUFBRTtBQUZSLFNBWE47QUFlTEMsUUFBQUEsUUFBUSxFQUFFO0FBQ05DLFVBQUFBLE9BQU8sRUFBRSxJQURIO0FBRU5DLFVBQUFBLFNBQVMsRUFBRSxLQUZMO0FBR05DLFVBQUFBLElBQUksRUFBRSxTQUhBO0FBSU5DLFVBQUFBLFdBQVcsRUFBRSxDQUpQO0FBS05DLFVBQUFBLFFBQVEsRUFBRSxFQUxKO0FBTU5DLFVBQUFBLFFBQVEsRUFBRSxFQU5KO0FBT05DLFVBQUFBLFlBQVksRUFBRSxDQVBSO0FBUU5DLFVBQUFBLGFBQWEsRUFBRSxLQVJUO0FBU050QixVQUFBQSxlQUFlLEVBQUUsU0FUWDtBQVVOdUIsVUFBQUEsY0FBYyxFQUFFLFNBVlY7QUFXTkMsVUFBQUEsWUFBWSxFQUFFLENBWFI7QUFZTkMsVUFBQUEsYUFBYSxFQUFFLENBWlQ7QUFhTkMsVUFBQUEsWUFBWSxFQUFFO0FBYlIsU0FmTDtBQThCTEMsUUFBQUEsT0FBTyxFQUFFO0FBQ0xDLFVBQUFBLE1BQU0sRUFBRTtBQUNKbEIsWUFBQUEsT0FBTyxFQUFFO0FBREw7QUFESDtBQTlCSjtBQVRBLEtBQWI7QUErQ0EsUUFBSW1CLEdBQUcsR0FBR3BDLE9BQU8sQ0FBQ3FDLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBVjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxJQUFJQyxLQUFKLENBQVVILEdBQVYsRUFBZWpDLE1BQWYsQ0FBakI7QUFDSCxHQXpERCxDQUQ0QixDQTRENUI7OztBQUNBLFNBQU87QUFDSHFDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkekMsTUFBQUEsU0FBUztBQUNaO0FBSEUsR0FBUDtBQUtILENBbEVtQixFQUFwQixDLENBb0VBOzs7QUFDQTBDLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQzVDLEVBQUFBLGFBQWEsQ0FBQzBDLElBQWQ7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy90aGVtZS9jb3JlL2pzL2N1c3RvbS9hcHBzL3Byb2plY3RzL2xpc3QvbGlzdC5qcz85ZWM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RQcm9qZWN0TGlzdCA9IGZ1bmN0aW9uICgpIHsgICAgXHJcbiAgICB2YXIgaW5pdENoYXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGluaXQgY2hhcnRcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfcHJvamVjdF9saXN0X2NoYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0NSwgMjVdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjMDBBM0ZGJywgJyM1MENEODknLCAnI0U0RTZFRiddXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWydBY3RpdmUnLCAnQ29tcGxldGVkJywgJ1lldCB0byBzdGFydCddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3V0b3V0OiAnNzUlJyxcclxuICAgICAgICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDY1LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVTY2FsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlUm90YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ25lYXJlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlTcGFjaW5nOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIHlQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB4UGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZXRQYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDb2xvcnM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMEQ0ODknLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRm9udENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29ybmVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlclNwYWNpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTcGFjaW5nOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY3R4ID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBteURvdWdobnV0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGluaXRDaGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUUHJvamVjdExpc3QuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUUHJvamVjdExpc3QiLCJpbml0Q2hhcnQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpZyIsInR5cGUiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYWJlbHMiLCJvcHRpb25zIiwiY2hhcnQiLCJmb250RmFtaWx5IiwiY3V0b3V0IiwiY3V0b3V0UGVyY2VudGFnZSIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidGl0bGUiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVNjYWxlIiwiYW5pbWF0ZVJvdGF0ZSIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImludGVyc2VjdCIsIm1vZGUiLCJib2R5U3BhY2luZyIsInlQYWRkaW5nIiwieFBhZGRpbmciLCJjYXJldFBhZGRpbmciLCJkaXNwbGF5Q29sb3JzIiwidGl0bGVGb250Q29sb3IiLCJjb3JuZXJSYWRpdXMiLCJmb290ZXJTcGFjaW5nIiwidGl0bGVTcGFjaW5nIiwicGx1Z2lucyIsImxlZ2VuZCIsImN0eCIsImdldENvbnRleHQiLCJteURvdWdobnV0IiwiQ2hhcnQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/apps/projects/list/list.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/apps/projects/list/list.js"]();
/******/ 	
/******/ })()
;