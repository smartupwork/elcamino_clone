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

/***/ "./resources/assets/theme/core/js/custom/documentation/charts/flotcharts/axis.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/documentation/charts/flotcharts/axis.js ***!
  \***************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFlotDemoAxis = function () {\n  // Private functions\n  var exampleAxis = function exampleAxis() {\n    function randValue() {\n      return Math.floor(Math.random() * (1 + 40 - 20)) + 20;\n    }\n\n    var pageviews = [[1, randValue()], [2, randValue()], [3, 2 + randValue()], [4, 3 + randValue()], [5, 5 + randValue()], [6, 10 + randValue()], [7, 15 + randValue()], [8, 20 + randValue()], [9, 25 + randValue()], [10, 30 + randValue()], [11, 35 + randValue()], [12, 25 + randValue()], [13, 15 + randValue()], [14, 20 + randValue()], [15, 45 + randValue()], [16, 50 + randValue()], [17, 65 + randValue()], [18, 70 + randValue()], [19, 85 + randValue()], [20, 80 + randValue()], [21, 75 + randValue()], [22, 80 + randValue()], [23, 75 + randValue()], [24, 70 + randValue()], [25, 65 + randValue()], [26, 75 + randValue()], [27, 80 + randValue()], [28, 85 + randValue()], [29, 90 + randValue()], [30, 95 + randValue()]];\n    var visitors = [[1, randValue() - 5], [2, randValue() - 5], [3, randValue() - 5], [4, 6 + randValue()], [5, 5 + randValue()], [6, 20 + randValue()], [7, 25 + randValue()], [8, 36 + randValue()], [9, 26 + randValue()], [10, 38 + randValue()], [11, 39 + randValue()], [12, 50 + randValue()], [13, 51 + randValue()], [14, 12 + randValue()], [15, 13 + randValue()], [16, 14 + randValue()], [17, 15 + randValue()], [18, 15 + randValue()], [19, 16 + randValue()], [20, 17 + randValue()], [21, 18 + randValue()], [22, 19 + randValue()], [23, 20 + randValue()], [24, 21 + randValue()], [25, 14 + randValue()], [26, 24 + randValue()], [27, 25 + randValue()], [28, 26 + randValue()], [29, 27 + randValue()], [30, 31 + randValue()]];\n    var plot = $.plot($(\"#kt_docs_flot_axis\"), [{\n      data: pageviews,\n      label: \"Unique Visits\",\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }, {\n      data: visitors,\n      label: \"Page Views\",\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }], {\n      series: {\n        lines: {\n          show: true,\n          lineWidth: 2,\n          fill: true,\n          fillColor: {\n            colors: [{\n              opacity: 0.05\n            }, {\n              opacity: 0.01\n            }]\n          }\n        },\n        points: {\n          show: true,\n          radius: 3,\n          lineWidth: 1\n        },\n        shadowSize: 2\n      },\n      grid: {\n        hoverable: true,\n        clickable: true,\n        tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderWidth: 1\n      },\n      colors: [KTUtil.getCssVariableValue('--bs-active-primary'), KTUtil.getCssVariableValue('--bs-active-danger')],\n      xaxis: {\n        ticks: 11,\n        tickDecimals: 0,\n        tickColor: KTUtil.getCssVariableValue('--bs-active-dark')\n      },\n      yaxis: {\n        ticks: 11,\n        tickDecimals: 0,\n        tickColor: KTUtil.getCssVariableValue('--bs-active-dark')\n      }\n    });\n\n    function showTooltip(x, y, contents) {\n      $('<div id=\"tooltip\">' + contents + '</div>').css({\n        position: 'absolute',\n        display: 'none',\n        top: y + 5,\n        left: x + 15,\n        border: '1px solid ' + KTUtil.getCssVariableValue('--bs-light-dark'),\n        padding: '4px',\n        color: +KTUtil.getCssVariableValue('--bs-active-dark'),\n        'border-radius': '3px',\n        'background-color': +KTUtil.getCssVariableValue('--bs-light-dark'),\n        opacity: 0.80\n      }).appendTo(\"body\").fadeIn(200);\n    }\n\n    var previousPoint = null;\n    $(\"#chart_2\").bind(\"plothover\", function (event, pos, item) {\n      $(\"#x\").text(pos.x.toFixed(2));\n      $(\"#y\").text(pos.y.toFixed(2));\n\n      if (item) {\n        if (previousPoint != item.dataIndex) {\n          previousPoint = item.dataIndex;\n          $(\"#tooltip\").remove();\n          var x = item.datapoint[0].toFixed(2),\n              y = item.datapoint[1].toFixed(2);\n          showTooltip(item.pageX, item.pageY, item.series.label + \" of \" + x + \" = \" + y);\n        }\n      } else {\n        $(\"#tooltip\").remove();\n        previousPoint = null;\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleAxis();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoAxis.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2Zsb3RjaGFydHMvYXhpcy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxjQUFjLEdBQUcsWUFBWTtBQUM3QjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFDMUIsYUFBU0MsU0FBVCxHQUFxQjtBQUMxQixhQUFRQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLElBQUksRUFBSixHQUFTLEVBQTFCLENBQVgsQ0FBRCxHQUE4QyxFQUFyRDtBQUNBOztBQUNELFFBQUlDLFNBQVMsR0FBRyxDQUNmLENBQUMsQ0FBRCxFQUFJSixTQUFTLEVBQWIsQ0FEZSxFQUVmLENBQUMsQ0FBRCxFQUFJQSxTQUFTLEVBQWIsQ0FGZSxFQUdmLENBQUMsQ0FBRCxFQUFJLElBQUlBLFNBQVMsRUFBakIsQ0FIZSxFQUlmLENBQUMsQ0FBRCxFQUFJLElBQUlBLFNBQVMsRUFBakIsQ0FKZSxFQUtmLENBQUMsQ0FBRCxFQUFJLElBQUlBLFNBQVMsRUFBakIsQ0FMZSxFQU1mLENBQUMsQ0FBRCxFQUFJLEtBQUtBLFNBQVMsRUFBbEIsQ0FOZSxFQU9mLENBQUMsQ0FBRCxFQUFJLEtBQUtBLFNBQVMsRUFBbEIsQ0FQZSxFQVFmLENBQUMsQ0FBRCxFQUFJLEtBQUtBLFNBQVMsRUFBbEIsQ0FSZSxFQVNmLENBQUMsQ0FBRCxFQUFJLEtBQUtBLFNBQVMsRUFBbEIsQ0FUZSxFQVVmLENBQUMsRUFBRCxFQUFLLEtBQUtBLFNBQVMsRUFBbkIsQ0FWZSxFQVdmLENBQUMsRUFBRCxFQUFLLEtBQUtBLFNBQVMsRUFBbkIsQ0FYZSxFQVlmLENBQUMsRUFBRCxFQUFLLEtBQUtBLFNBQVMsRUFBbkIsQ0FaZSxFQWFmLENBQUMsRUFBRCxFQUFLLEtBQUtBLFNBQVMsRUFBbkIsQ0FiZSxFQWNmLENBQUMsRUFBRCxFQUFLLEtBQUtB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QSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNnRCxNQUFkO0FBQ0EsY0FBSXJCLENBQUMsR0FBR2lCLElBQUksQ0FBQ0ssU0FBTCxDQUFlLENBQWYsRUFBa0JILE9BQWxCLENBQTBCLENBQTFCLENBQVI7QUFBQSxjQUNDbEIsQ0FBQyxHQUFHZ0IsSUFBSSxDQUFDSyxTQUFMLENBQWUsQ0FBZixFQUFrQkgsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FETDtBQUdBcEIsVUFBQUEsV0FBVyxDQUFDa0IsSUFBSSxDQUFDTSxLQUFOLEVBQWFOLElBQUksQ0FBQ08sS0FBbEIsRUFBeUJQLElBQUksQ0FBQ3RDLE1BQUwsQ0FBWUosS0FBWixHQUFvQixNQUFwQixHQUE2QnlCLENBQTdCLEdBQWlDLEtBQWpDLEdBQXlDQyxDQUFsRSxDQUFYO0FBQ0E7QUFDRCxPQVZELE1BVU87QUFDTjVCLFFBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2dELE1BQWQ7QUFDQVIsUUFBQUEsYUFBYSxHQUFHLElBQWhCO0FBQ0E7QUFDRCxLQWxCRDtBQW1CRyxHQWhLRDs7QUFrS0EsU0FBTztBQUNIO0FBQ0FZLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkNUQsTUFBQUEsV0FBVztBQUNkO0FBSkUsR0FBUDtBQU1ILENBMUtvQixFQUFyQixDLENBNEtBOzs7QUFDQTBCLE1BQU0sQ0FBQ21DLGtCQUFQLENBQTBCLFlBQVk7QUFDbEM5RCxFQUFBQSxjQUFjLENBQUM2RCxJQUFmO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdGhlbWUvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvZmxvdGNoYXJ0cy9heGlzLmpzP2MyMWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZsb3REZW1vQXhpcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUF4aXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gcmFuZFZhbHVlKCkge1xyXG5cdFx0XHRyZXR1cm4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxICsgNDAgLSAyMCkpKSArIDIwO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHBhZ2V2aWV3cyA9IFtcclxuXHRcdFx0WzEsIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzIsIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzMsIDIgKyByYW5kVmFsdWUoKV0sXHJcblx0XHRcdFs0LCAzICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbNSwgNSArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzYsIDEwICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbNywgMTUgKyByYW5kVmFsdWUoKV0sXHJcblx0XHRcdFs4LCAyMCArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzksIDI1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMTAsIDMwICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMTEsIDM1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMTIsIDI1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMTMsIDE1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMTQsIDIwICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMTUsIDQ1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMTYsIDUwICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMTcsIDY1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMTgsIDcwICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMTksIDg1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMjAsIDgwICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMjEsIDc1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMjIsIDgwICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMjMsIDc1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMjQsIDcwICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMjUsIDY1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMjYsIDc1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMjcsIDgwICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMjgsIDg1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMjksIDkwICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbMzAsIDk1ICsgcmFuZFZhbHVlKCldXHJcblx0XHRdO1xyXG5cdFx0dmFyIHZpc2l0b3JzID0gW1xyXG5cdFx0XHRbMSwgcmFuZFZhbHVlKCkgLSA1XSxcclxuXHRcdFx0WzIsIHJhbmRWYWx1ZSgpIC0gNV0sXHJcblx0XHRcdFszLCByYW5kVmFsdWUoKSAtIDVdLFxyXG5cdFx0XHRbNCwgNiArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzUsIDUgKyByYW5kVmFsdWUoKV0sXHJcblx0XHRcdFs2LCAyMCArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzcsIDI1ICsgcmFuZFZhbHVlKCldLFxyXG5cdFx0XHRbOCwgMzYgKyByYW5kVmFsdWUoKV0sXHJcblx0XHRcdFs5LCAyNiArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzEwLCAzOCArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzExLCAzOSArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzEyLCA1MCArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzEzLCA1MSArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzE0LCAxMiArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzE1LCAxMyArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzE2LCAxNCArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzE3LCAxNSArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzE4LCAxNSArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzE5LCAxNiArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzIwLCAxNyArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzIxLCAxOCArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzIyLCAxOSArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzIzLCAyMCArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzI0LCAyMSArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzI1LCAxNCArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzI2LCAyNCArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzI3LCAyNSArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzI4LCAyNiArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzI5LCAyNyArIHJhbmRWYWx1ZSgpXSxcclxuXHRcdFx0WzMwLCAzMSArIHJhbmRWYWx1ZSgpXVxyXG5cdFx0XTtcclxuXHJcblx0XHR2YXIgcGxvdCA9ICQucGxvdCgkKFwiI2t0X2RvY3NfZmxvdF9heGlzXCIpLCBbe1xyXG5cdFx0XHRkYXRhOiBwYWdldmlld3MsXHJcblx0XHRcdGxhYmVsOiBcIlVuaXF1ZSBWaXNpdHNcIixcclxuXHRcdFx0bGluZXM6IHtcclxuXHRcdFx0XHRsaW5lV2lkdGg6IDEsXHJcblx0XHRcdH0sXHJcblx0XHRcdHNoYWRvd1NpemU6IDBcclxuXHJcblx0XHR9LCB7XHJcblx0XHRcdGRhdGE6IHZpc2l0b3JzLFxyXG5cdFx0XHRsYWJlbDogXCJQYWdlIFZpZXdzXCIsXHJcblx0XHRcdGxpbmVzOiB7XHJcblx0XHRcdFx0bGluZVdpZHRoOiAxLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaGFkb3dTaXplOiAwXHJcblx0XHR9XSwge1xyXG5cdFx0XHRzZXJpZXM6IHtcclxuXHRcdFx0XHRsaW5lczoge1xyXG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdGxpbmVXaWR0aDogMixcclxuXHRcdFx0XHRcdGZpbGw6IHRydWUsXHJcblx0XHRcdFx0XHRmaWxsQ29sb3I6IHtcclxuXHRcdFx0XHRcdFx0Y29sb3JzOiBbe1xyXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuMDVcclxuXHRcdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuMDFcclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBvaW50czoge1xyXG5cdFx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdHJhZGl1czogMyxcclxuXHRcdFx0XHRcdGxpbmVXaWR0aDogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2hhZG93U2l6ZTogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRncmlkOiB7XHJcblx0XHRcdFx0aG92ZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHR0aWNrQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcclxuXHRcdFx0XHRib3JkZXJDb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtZGFyaycpLFxyXG5cdFx0XHRcdGJvcmRlcldpZHRoOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbG9yczogW0tUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1wcmltYXJ5JyksIEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1kYW5nZXInKV0sXHJcblx0XHRcdHhheGlzOiB7XHJcblx0XHRcdFx0dGlja3M6IDExLFxyXG5cdFx0XHRcdHRpY2tEZWNpbWFsczogMCxcclxuXHRcdFx0XHR0aWNrQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1kYXJrJyksXHJcblx0XHRcdH0sXHJcblx0XHRcdHlheGlzOiB7XHJcblx0XHRcdFx0dGlja3M6IDExLFxyXG5cdFx0XHRcdHRpY2tEZWNpbWFsczogMCxcclxuXHRcdFx0XHR0aWNrQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1kYXJrJyksXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIHNob3dUb29sdGlwKHgsIHksIGNvbnRlbnRzKSB7XHJcblx0XHRcdCQoJzxkaXYgaWQ9XCJ0b29sdGlwXCI+JyArIGNvbnRlbnRzICsgJzwvZGl2PicpLmNzcyh7XHJcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxyXG5cdFx0XHRcdHRvcDogeSArIDUsXHJcblx0XHRcdFx0bGVmdDogeCArIDE1LFxyXG5cdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAnICsgS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtZGFyaycpLFxyXG5cdFx0XHRcdHBhZGRpbmc6ICc0cHgnLFxyXG5cdFx0XHRcdGNvbG9yOiAgKyBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtZGFyaycpLFxyXG5cdFx0XHRcdCdib3JkZXItcmFkaXVzJzogJzNweCcsXHJcblx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAgKyBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC1kYXJrJyksXHJcblx0XHRcdFx0b3BhY2l0eTogMC44MFxyXG5cdFx0XHR9KS5hcHBlbmRUbyhcImJvZHlcIikuZmFkZUluKDIwMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHByZXZpb3VzUG9pbnQgPSBudWxsO1xyXG5cdFx0JChcIiNjaGFydF8yXCIpLmJpbmQoXCJwbG90aG92ZXJcIiwgZnVuY3Rpb24oZXZlbnQsIHBvcywgaXRlbSkge1xyXG5cdFx0XHQkKFwiI3hcIikudGV4dChwb3MueC50b0ZpeGVkKDIpKTtcclxuXHRcdFx0JChcIiN5XCIpLnRleHQocG9zLnkudG9GaXhlZCgyKSk7XHJcblxyXG5cdFx0XHRpZiAoaXRlbSkge1xyXG5cdFx0XHRcdGlmIChwcmV2aW91c1BvaW50ICE9IGl0ZW0uZGF0YUluZGV4KSB7XHJcblx0XHRcdFx0XHRwcmV2aW91c1BvaW50ID0gaXRlbS5kYXRhSW5kZXg7XHJcblxyXG5cdFx0XHRcdFx0JChcIiN0b29sdGlwXCIpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0dmFyIHggPSBpdGVtLmRhdGFwb2ludFswXS50b0ZpeGVkKDIpLFxyXG5cdFx0XHRcdFx0XHR5ID0gaXRlbS5kYXRhcG9pbnRbMV0udG9GaXhlZCgyKTtcclxuXHJcblx0XHRcdFx0XHRzaG93VG9vbHRpcChpdGVtLnBhZ2VYLCBpdGVtLnBhZ2VZLCBpdGVtLnNlcmllcy5sYWJlbCArIFwiIG9mIFwiICsgeCArIFwiID0gXCIgKyB5KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JChcIiN0b29sdGlwXCIpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdHByZXZpb3VzUG9pbnQgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVBeGlzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEZsb3REZW1vQXhpcy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RGbG90RGVtb0F4aXMiLCJleGFtcGxlQXhpcyIsInJhbmRWYWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBhZ2V2aWV3cyIsInZpc2l0b3JzIiwicGxvdCIsIiQiLCJkYXRhIiwibGFiZWwiLCJsaW5lcyIsImxpbmVXaWR0aCIsInNoYWRvd1NpemUiLCJzZXJpZXMiLCJzaG93IiwiZmlsbCIsImZpbGxDb2xvciIsImNvbG9ycyIsIm9wYWNpdHkiLCJwb2ludHMiLCJyYWRpdXMiLCJncmlkIiwiaG92ZXJhYmxlIiwiY2xpY2thYmxlIiwidGlja0NvbG9yIiwiS1RVdGlsIiwiZ2V0Q3NzVmFyaWFibGVWYWx1ZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJ4YXhpcyIsInRpY2tzIiwidGlja0RlY2ltYWxzIiwieWF4aXMiLCJzaG93VG9vbHRpcCIsIngiLCJ5IiwiY29udGVudHMiLCJjc3MiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ0b3AiLCJsZWZ0IiwiYm9yZGVyIiwicGFkZGluZyIsImNvbG9yIiwiYXBwZW5kVG8iLCJmYWRlSW4iLCJwcmV2aW91c1BvaW50IiwiYmluZCIsImV2ZW50IiwicG9zIiwiaXRlbSIsInRleHQiLCJ0b0ZpeGVkIiwiZGF0YUluZGV4IiwicmVtb3ZlIiwiZGF0YXBvaW50IiwicGFnZVgiLCJwYWdlWSIsImluaXQiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/documentation/charts/flotcharts/axis.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/documentation/charts/flotcharts/axis.js"]();
/******/ 	
/******/ })()
;