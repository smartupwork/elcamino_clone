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

/***/ "./resources/assets/theme/core/js/custom/documentation/general/jkanban/color.js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/documentation/general/jkanban/color.js ***!
  \**************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTJKanbanDemoColor = function () {\n  // Private functions\n  var exampleColor = function exampleColor() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_color',\n      gutter: '0',\n      widthBoard: '250px',\n      boards: [{\n        'id': '_inprocess',\n        'title': 'In Process',\n        'class': 'primary',\n        'item': [{\n          'title': '<span class=\"fw-bold\">You can drag me too</span>',\n          'class': 'light-primary'\n        }, {\n          'title': '<span class=\"fw-bold\">Buy Milk</span>',\n          'class': 'light-primary'\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'class': 'success',\n        'item': [{\n          'title': '<span class=\"fw-bold\">Do Something!</span>',\n          'class': 'light-success'\n        }, {\n          'title': '<span class=\"fw-bold\">Run?</span>',\n          'class': 'light-success'\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'class': 'danger',\n        'item': [{\n          'title': '<span class=\"fw-bold\">All right</span>',\n          'class': 'light-danger'\n        }, {\n          'title': '<span class=\"fw-bold\">Ok!</span>',\n          'class': 'light-danger'\n        }]\n      }]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleColor();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoColor.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2NvbG9yLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGtCQUFrQixHQUFHLFlBQVc7QUFDaEM7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFXO0FBQzFCLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxPQUFKLENBQVk7QUFDckJDLE1BQUFBLE9BQU8sRUFBRSx3QkFEWTtBQUVyQkMsTUFBQUEsTUFBTSxFQUFFLEdBRmE7QUFHckJDLE1BQUFBLFVBQVUsRUFBRSxPQUhTO0FBSXJCQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNELGNBQU0sWUFETDtBQUVELGlCQUFTLFlBRlI7QUFHRCxpQkFBUyxTQUhSO0FBSUQsZ0JBQVEsQ0FBQztBQUNELG1CQUFTLGtEQURSO0FBRUQsbUJBQVM7QUFGUixTQUFELEVBSUo7QUFDSSxtQkFBUyx1Q0FEYjtBQUVJLG1CQUFTO0FBRmIsU0FKSTtBQUpQLE9BQUQsRUFhRDtBQUNDLGNBQU0sVUFEUDtBQUVDLGlCQUFTLFNBRlY7QUFHQyxpQkFBUyxTQUhWO0FBSUMsZ0JBQVEsQ0FBQztBQUNELG1CQUFTLDRDQURSO0FBRUQsbUJBQVM7QUFGUixTQUFELEVBSUo7QUFDSSxtQkFBUyxtQ0FEYjtBQUVJLG1CQUFTO0FBRmIsU0FKSTtBQUpULE9BYkMsRUEwQkQ7QUFDQyxjQUFNLE9BRFA7QUFFQyxpQkFBUyxNQUZWO0FBR0MsaUJBQVMsUUFIVjtBQUlDLGdCQUFRLENBQUM7QUFDRCxtQkFBUyx3Q0FEUjtBQUVELG1CQUFTO0FBRlIsU0FBRCxFQUlKO0FBQ0ksbUJBQVMsa0NBRGI7QUFFSSxtQkFBUztBQUZiLFNBSkk7QUFKVCxPQTFCQztBQUphLEtBQVosQ0FBYjtBQThDSCxHQS9DRDs7QUFpREEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiUCxNQUFBQSxZQUFZO0FBQ2Y7QUFKRSxHQUFQO0FBTUgsQ0F6RHdCLEVBQXpCLEMsQ0EyREE7OztBQUNBUSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNWLEVBQUFBLGtCQUFrQixDQUFDUSxJQUFuQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL2NvbG9yLmpzPzIwM2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEpLYW5iYW5EZW1vQ29sb3IgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUNvbG9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGthbmJhbiA9IG5ldyBqS2FuYmFuKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJyNrdF9kb2NzX2prYW5iYW5fY29sb3InLFxyXG4gICAgICAgICAgICBndXR0ZXI6ICcwJyxcclxuICAgICAgICAgICAgd2lkdGhCb2FyZDogJzI1MHB4JyxcclxuICAgICAgICAgICAgYm9hcmRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfaW5wcm9jZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnSW4gUHJvY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5Zb3UgY2FuIGRyYWcgbWUgdG9vPC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5CdXkgTWlsazwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfd29ya2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1dvcmtpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RG8gU29tZXRoaW5nITwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+UnVuPzwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfZG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5BbGwgcmlnaHQ8L3NwYW4+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1kYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+T2shPC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQ29sb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RKS2FuYmFuRGVtb0NvbG9yLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEpLYW5iYW5EZW1vQ29sb3IiLCJleGFtcGxlQ29sb3IiLCJrYW5iYW4iLCJqS2FuYmFuIiwiZWxlbWVudCIsImd1dHRlciIsIndpZHRoQm9hcmQiLCJib2FyZHMiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/documentation/general/jkanban/color.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/documentation/general/jkanban/color.js"]();
/******/ 	
/******/ })()
;