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

/***/ "./resources/assets/theme/core/js/custom/documentation/forms/daterangepicker.js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/documentation/forms/daterangepicker.js ***!
  \**************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsDaterangepickerDemos = function () {\n  // Private functions\n  var example1 = function example1(element) {\n    $(\"#kt_daterangepicker_1\").daterangepicker();\n  };\n\n  var example2 = function example2(element) {\n    $(\"#kt_daterangepicker_2\").daterangepicker({\n      timePicker: true,\n      startDate: moment().startOf(\"hour\"),\n      endDate: moment().startOf(\"hour\").add(32, \"hour\"),\n      locale: {\n        format: \"M/DD hh:mm A\"\n      }\n    });\n  };\n\n  var example3 = function example3(element) {\n    $(\"#kt_daterangepicker_3\").daterangepicker({\n      singleDatePicker: true,\n      showDropdowns: true,\n      minYear: 1901,\n      maxYear: parseInt(moment().format(\"YYYY\"), 10)\n    }, function (start, end, label) {\n      var years = moment().diff(start, \"years\");\n      alert(\"You are \" + years + \" years old!\");\n    });\n  };\n\n  var example4 = function example4(element) {\n    var start = moment().subtract(29, \"days\");\n    var end = moment();\n\n    function cb(start, end) {\n      $(\"#kt_daterangepicker_4\").html(start.format(\"MMMM D, YYYY\") + \" - \" + end.format(\"MMMM D, YYYY\"));\n    }\n\n    $(\"#kt_daterangepicker_4\").daterangepicker({\n      startDate: start,\n      endDate: end,\n      ranges: {\n        \"Today\": [moment(), moment()],\n        \"Yesterday\": [moment().subtract(1, \"days\"), moment().subtract(1, \"days\")],\n        \"Last 7 Days\": [moment().subtract(6, \"days\"), moment()],\n        \"Last 30 Days\": [moment().subtract(29, \"days\"), moment()],\n        \"This Month\": [moment().startOf(\"month\"), moment().endOf(\"month\")],\n        \"Last Month\": [moment().subtract(1, \"month\").startOf(\"month\"), moment().subtract(1, \"month\").endOf(\"month\")]\n      }\n    }, cb);\n    cb(start, end);\n  };\n\n  var example5 = function example5(element) {\n    $(\"#kt_daterangepicker_5\").daterangepicker();\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      example1();\n      example2();\n      example3();\n      example4();\n      example5();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsDaterangepickerDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvZGF0ZXJhbmdlcGlja2VyLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLDJCQUEyQixHQUFHLFlBQVc7QUFDekM7QUFDQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTQyxPQUFULEVBQWtCO0FBQzdCQyxJQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkMsZUFBM0I7QUFDSCxHQUZEOztBQUlBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNILE9BQVQsRUFBa0I7QUFDN0JDLElBQUFBLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCQyxlQUEzQixDQUEyQztBQUN2Q0UsTUFBQUEsVUFBVSxFQUFFLElBRDJCO0FBRXZDQyxNQUFBQSxTQUFTLEVBQUVDLE1BQU0sR0FBR0MsT0FBVCxDQUFpQixNQUFqQixDQUY0QjtBQUd2Q0MsTUFBQUEsT0FBTyxFQUFFRixNQUFNLEdBQUdDLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUJFLEdBQXpCLENBQTZCLEVBQTdCLEVBQWlDLE1BQWpDLENBSDhCO0FBSXZDQyxNQUFBQSxNQUFNLEVBQUU7QUFDSkMsUUFBQUEsTUFBTSxFQUFFO0FBREo7QUFKK0IsS0FBM0M7QUFRSCxHQVREOztBQVdBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNaLE9BQVQsRUFBa0I7QUFDN0JDLElBQUFBLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCQyxlQUEzQixDQUEyQztBQUNuQ1csTUFBQUEsZ0JBQWdCLEVBQUUsSUFEaUI7QUFFbkNDLE1BQUFBLGFBQWEsRUFBRSxJQUZvQjtBQUduQ0MsTUFBQUEsT0FBTyxFQUFFLElBSDBCO0FBSW5DQyxNQUFBQSxPQUFPLEVBQUVDLFFBQVEsQ0FBQ1gsTUFBTSxHQUFHSyxNQUFULENBQWdCLE1BQWhCLENBQUQsRUFBeUIsRUFBekI7QUFKa0IsS0FB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Y3VtZW50YXRpb24vZm9ybXMvZGF0ZXJhbmdlcGlja2VyLmpzPzI2ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZvcm1zRGF0ZXJhbmdlcGlja2VyRGVtb3MgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZTEgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgJChcIiNrdF9kYXRlcmFuZ2VwaWNrZXJfMVwiKS5kYXRlcmFuZ2VwaWNrZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZXhhbXBsZTIgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgJChcIiNrdF9kYXRlcmFuZ2VwaWNrZXJfMlwiKS5kYXRlcmFuZ2VwaWNrZXIoe1xyXG4gICAgICAgICAgICB0aW1lUGlja2VyOiB0cnVlLFxyXG4gICAgICAgICAgICBzdGFydERhdGU6IG1vbWVudCgpLnN0YXJ0T2YoXCJob3VyXCIpLFxyXG4gICAgICAgICAgICBlbmREYXRlOiBtb21lbnQoKS5zdGFydE9mKFwiaG91clwiKS5hZGQoMzIsIFwiaG91clwiKSxcclxuICAgICAgICAgICAgbG9jYWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiTS9ERCBoaDptbSBBXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBleGFtcGxlMyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAkKFwiI2t0X2RhdGVyYW5nZXBpY2tlcl8zXCIpLmRhdGVyYW5nZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVEYXRlUGlja2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1pblllYXI6IDE5MDEsXHJcbiAgICAgICAgICAgICAgICBtYXhZZWFyOiBwYXJzZUludChtb21lbnQoKS5mb3JtYXQoXCJZWVlZXCIpLDEwKVxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihzdGFydCwgZW5kLCBsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHllYXJzID0gbW9tZW50KCkuZGlmZihzdGFydCwgXCJ5ZWFyc1wiKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IGFyZSBcIiArIHllYXJzICsgXCIgeWVhcnMgb2xkIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGV4YW1wbGU0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDI5LCBcImRheXNcIik7XHJcbiAgICAgICAgdmFyIGVuZCA9IG1vbWVudCgpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjYihzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgICAgICQoXCIja3RfZGF0ZXJhbmdlcGlja2VyXzRcIikuaHRtbChzdGFydC5mb3JtYXQoXCJNTU1NIEQsIFlZWVlcIikgKyBcIiAtIFwiICsgZW5kLmZvcm1hdChcIk1NTU0gRCwgWVlZWVwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKFwiI2t0X2RhdGVyYW5nZXBpY2tlcl80XCIpLmRhdGVyYW5nZXBpY2tlcih7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3RhcnQsXHJcbiAgICAgICAgICAgIGVuZERhdGU6IGVuZCxcclxuICAgICAgICAgICAgcmFuZ2VzOiB7XHJcbiAgICAgICAgICAgIFwiVG9kYXlcIjogW21vbWVudCgpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgIFwiWWVzdGVyZGF5XCI6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCBcImRheXNcIiksIG1vbWVudCgpLnN1YnRyYWN0KDEsIFwiZGF5c1wiKV0sXHJcbiAgICAgICAgICAgIFwiTGFzdCA3IERheXNcIjogW21vbWVudCgpLnN1YnRyYWN0KDYsIFwiZGF5c1wiKSwgbW9tZW50KCldLFxyXG4gICAgICAgICAgICBcIkxhc3QgMzAgRGF5c1wiOiBbbW9tZW50KCkuc3VidHJhY3QoMjksIFwiZGF5c1wiKSwgbW9tZW50KCldLFxyXG4gICAgICAgICAgICBcIlRoaXMgTW9udGhcIjogW21vbWVudCgpLnN0YXJ0T2YoXCJtb250aFwiKSwgbW9tZW50KCkuZW5kT2YoXCJtb250aFwiKV0sXHJcbiAgICAgICAgICAgIFwiTGFzdCBNb250aFwiOiBbbW9tZW50KCkuc3VidHJhY3QoMSwgXCJtb250aFwiKS5zdGFydE9mKFwibW9udGhcIiksIG1vbWVudCgpLnN1YnRyYWN0KDEsIFwibW9udGhcIikuZW5kT2YoXCJtb250aFwiKV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGNiKTtcclxuXHJcbiAgICAgICAgY2Ioc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGV4YW1wbGU1ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICQoXCIja3RfZGF0ZXJhbmdlcGlja2VyXzVcIikuZGF0ZXJhbmdlcGlja2VyKCk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXhhbXBsZTEoKTtcclxuICAgICAgICAgICAgZXhhbXBsZTIoKTtcclxuICAgICAgICAgICAgZXhhbXBsZTMoKTtcclxuICAgICAgICAgICAgZXhhbXBsZTQoKTtcclxuICAgICAgICAgICAgZXhhbXBsZTUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RGb3Jtc0RhdGVyYW5nZXBpY2tlckRlbW9zLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZvcm1zRGF0ZXJhbmdlcGlja2VyRGVtb3MiLCJleGFtcGxlMSIsImVsZW1lbnQiLCIkIiwiZGF0ZXJhbmdlcGlja2VyIiwiZXhhbXBsZTIiLCJ0aW1lUGlja2VyIiwic3RhcnREYXRlIiwibW9tZW50Iiwic3RhcnRPZiIsImVuZERhdGUiLCJhZGQiLCJsb2NhbGUiLCJmb3JtYXQiLCJleGFtcGxlMyIsInNpbmdsZURhdGVQaWNrZXIiLCJzaG93RHJvcGRvd25zIiwibWluWWVhciIsIm1heFllYXIiLCJwYXJzZUludCIsInN0YXJ0IiwiZW5kIiwibGFiZWwiLCJ5ZWFycyIsImRpZmYiLCJhbGVydCIsImV4YW1wbGU0Iiwic3VidHJhY3QiLCJjYiIsImh0bWwiLCJyYW5nZXMiLCJlbmRPZiIsImV4YW1wbGU1IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/documentation/forms/daterangepicker.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/documentation/forms/daterangepicker.js"]();
/******/ 	
/******/ })()
;