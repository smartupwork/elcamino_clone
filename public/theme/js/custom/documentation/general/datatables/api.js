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

/***/ "./resources/assets/theme/core/js/custom/documentation/general/datatables/api.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/documentation/general/datatables/api.js ***!
  \***************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTDatatablesApi = function () {\n  // Private functions\n  var _initExample1 = function _initExample1() {\n    var t = $(\"#kt_datatable_example_1\").DataTable();\n    var counter = 1;\n    $(\"#kt_datatable_example_1_addrow\").on(\"click\", function () {\n      t.row.add([counter + \".1\", counter + \".2\", counter + \".3\", counter + \".4\", counter + \".5\"]).draw(false);\n      counter++;\n    }); // Automatically add a first row of data\n\n    $(\"#kt_datatable_example_1_addrow\").click();\n  };\n\n  var _initExample2 = function _initExample2() {\n    var table = $(\"#kt_datatable_example_2\").DataTable({\n      columnDefs: [{\n        orderable: false,\n        targets: [1, 2, 3]\n      }]\n    });\n    $(\"#kt_datatable_example_2_submit\").click(function () {\n      var data = table.$(\"input, select\").serialize();\n      alert(\"The following data would have been submitted to the server: \\n\\n\" + data.substr(0, 120) + \"...\");\n      return false;\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      _initExample1();\n\n      _initExample2();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDatatablesApi.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kYXRhdGFibGVzL2FwaS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxlQUFlLEdBQUcsWUFBWTtBQUM5QjtBQUVBLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVztBQUMzQixRQUFJQyxDQUFDLEdBQUdDLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCQyxTQUE3QixFQUFSO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFFQUYsSUFBQUEsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NHLEVBQXBDLENBQXdDLE9BQXhDLEVBQWlELFlBQVk7QUFDekRKLE1BQUFBLENBQUMsQ0FBQ0ssR0FBRixDQUFNQyxHQUFOLENBQVcsQ0FDUEgsT0FBTyxHQUFFLElBREYsRUFFUEEsT0FBTyxHQUFFLElBRkYsRUFHUEEsT0FBTyxHQUFFLElBSEYsRUFJUEEsT0FBTyxHQUFFLElBSkYsRUFLUEEsT0FBTyxHQUFFLElBTEYsQ0FBWCxFQU1JSSxJQU5KLENBTVUsS0FOVjtBQVFBSixNQUFBQSxPQUFPO0FBQ1YsS0FWRCxFQUoyQixDQWdCM0I7O0FBQ0FGLElBQUFBLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DTyxLQUFwQztBQUNILEdBbEJEOztBQW9CQSxNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVc7QUFDM0IsUUFBSUMsS0FBSyxHQUFHVCxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsU0FBN0IsQ0FBdUM7QUFDL0NTLE1BQUFBLFVBQVUsRUFBRSxDQUFDO0FBQ1RDLFFBQUFBLFNBQVMsRUFBRSxLQURGO0FBRVRDLFFBQUFBLE9BQU8sRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTDtBQUZBLE9BQUQ7QUFEbUMsS0FBdkMsQ0FBWjtBQU9BWixJQUFBQSxDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ08sS0FBcEMsQ0FBMkMsWUFBVztBQUNsRCxVQUFJTSxJQUFJLEdBQUdKLEtBQUssQ0FBQ1QsQ0FBTixDQUFRLGVBQVIsRUFBeUJjLFNBQXpCLEVBQVg7QUFDQUMsTUFBQUEsS0FBSyxDQUNELHFFQUNBRixJQUFJLENBQUNHLE1BQUwsQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLENBREEsR0FDc0IsS0FGckIsQ0FBTDtBQUlBLGFBQU8sS0FBUDtBQUNILEtBUEQ7QUFRSCxHQWhCRCxDQXZCOEIsQ0F5QzlCOzs7QUFDQSxTQUFPO0FBQ0hDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkbkIsTUFBQUEsYUFBYTs7QUFDYlUsTUFBQUEsYUFBYTtBQUNoQjtBQUpFLEdBQVA7QUFNSCxDQWhEcUIsRUFBdEIsQyxDQWtEQTs7O0FBQ0FVLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ3RCLEVBQUFBLGVBQWUsQ0FBQ29CLElBQWhCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdGhlbWUvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2RhdGF0YWJsZXMvYXBpLmpzP2JkMjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVERhdGF0YWJsZXNBcGkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG5cclxuICAgIHZhciBfaW5pdEV4YW1wbGUxID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHQgPSAkKFwiI2t0X2RhdGF0YWJsZV9leGFtcGxlXzFcIikuRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAxO1xyXG4gICAgXHJcbiAgICAgICAgJChcIiNrdF9kYXRhdGFibGVfZXhhbXBsZV8xX2FkZHJvd1wiKS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHQucm93LmFkZCggW1xyXG4gICAgICAgICAgICAgICAgY291bnRlciArXCIuMVwiLFxyXG4gICAgICAgICAgICAgICAgY291bnRlciArXCIuMlwiLFxyXG4gICAgICAgICAgICAgICAgY291bnRlciArXCIuM1wiLFxyXG4gICAgICAgICAgICAgICAgY291bnRlciArXCIuNFwiLFxyXG4gICAgICAgICAgICAgICAgY291bnRlciArXCIuNVwiLFxyXG4gICAgICAgICAgICBdICkuZHJhdyggZmFsc2UgKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgfSApO1xyXG4gICAgXHJcbiAgICAgICAgLy8gQXV0b21hdGljYWxseSBhZGQgYSBmaXJzdCByb3cgb2YgZGF0YVxyXG4gICAgICAgICQoXCIja3RfZGF0YXRhYmxlX2V4YW1wbGVfMV9hZGRyb3dcIikuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2luaXRFeGFtcGxlMiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0YWJsZSA9ICQoXCIja3RfZGF0YXRhYmxlX2V4YW1wbGVfMlwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiBbe1xyXG4gICAgICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IFsxLDIsM11cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgICBcclxuICAgICAgICAkKFwiI2t0X2RhdGF0YWJsZV9leGFtcGxlXzJfc3VibWl0XCIpLmNsaWNrKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB0YWJsZS4kKFwiaW5wdXQsIHNlbGVjdFwiKS5zZXJpYWxpemUoKTtcclxuICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICBcIlRoZSBmb2xsb3dpbmcgZGF0YSB3b3VsZCBoYXZlIGJlZW4gc3VibWl0dGVkIHRvIHRoZSBzZXJ2ZXI6IFxcblxcblwiK1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zdWJzdHIoIDAsIDEyMCApK1wiLi4uXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX2luaXRFeGFtcGxlMSgpO1xyXG4gICAgICAgICAgICBfaW5pdEV4YW1wbGUyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1REYXRhdGFibGVzQXBpLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVERhdGF0YWJsZXNBcGkiLCJfaW5pdEV4YW1wbGUxIiwidCIsIiQiLCJEYXRhVGFibGUiLCJjb3VudGVyIiwib24iLCJyb3ciLCJhZGQiLCJkcmF3IiwiY2xpY2siLCJfaW5pdEV4YW1wbGUyIiwidGFibGUiLCJjb2x1bW5EZWZzIiwib3JkZXJhYmxlIiwidGFyZ2V0cyIsImRhdGEiLCJzZXJpYWxpemUiLCJhbGVydCIsInN1YnN0ciIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/documentation/general/datatables/api.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/documentation/general/datatables/api.js"]();
/******/ 	
/******/ })()
;