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

/***/ "./resources/assets/theme/core/js/custom/account/api-keys/api-keys.js":
/*!****************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/account/api-keys/api-keys.js ***!
  \****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountAPIKeys = function () {\n  // Private functions\n  var initLicenceCopy = function initLicenceCopy() {\n    KTUtil.each(document.querySelectorAll('#kt_api_keys_table [data-action=\"copy\"]'), function (button) {\n      var tr = button.closest('tr');\n      var license = KTUtil.find(tr, '[data-bs-target=\"license\"]');\n      var clipboard = new ClipboardJS(button, {\n        target: license,\n        text: function text() {\n          return license.innerHTML;\n        }\n      });\n      clipboard.on('success', function (e) {\n        // Icons\n        var svgIcon = button.querySelector('.svg-icon');\n        var checkIcon = button.querySelector('.bi.bi-check'); // exit if check icon is already shown\n\n        if (checkIcon) {\n          return;\n        } // Create check icon\n\n\n        checkIcon = document.createElement('i');\n        checkIcon.classList.add('bi');\n        checkIcon.classList.add('bi-check');\n        checkIcon.classList.add('fs-2x'); // Append check icon\n\n        button.appendChild(checkIcon); // Highlight target\n\n        license.classList.add('text-success'); // Hide copy icon\n\n        svgIcon.classList.add('d-none'); // Set 3 seconds timeout to hide the check icon and show copy icon back\n\n        setTimeout(function () {\n          // Remove check icon\n          svgIcon.classList.remove('d-none'); // Show check icon back\n\n          button.removeChild(checkIcon); // Remove highlight\n\n          license.classList.remove('text-success');\n        }, 3000);\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initLicenceCopy();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountAPIKeys.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FjY291bnQvYXBpLWtleXMvYXBpLWtleXMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBWTtBQUMvQjtBQUNBLE1BQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBVztBQUM3QkMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIseUNBQTFCLENBQVosRUFBa0YsVUFBU0MsTUFBVCxFQUFpQjtBQUMvRixVQUFJQyxFQUFFLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLElBQWYsQ0FBVDtBQUNBLFVBQUlDLE9BQU8sR0FBR1AsTUFBTSxDQUFDUSxJQUFQLENBQVlILEVBQVosRUFBZ0IsNEJBQWhCLENBQWQ7QUFFQSxVQUFJSSxTQUFTLEdBQUcsSUFBSUMsV0FBSixDQUFnQk4sTUFBaEIsRUFBd0I7QUFDcENPLFFBQUFBLE1BQU0sRUFBRUosT0FENEI7QUFFcENLLFFBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiLGlCQUFPTCxPQUFPLENBQUNNLFNBQWY7QUFDSDtBQUptQyxPQUF4QixDQUFoQjtBQU9BSixNQUFBQSxTQUFTLENBQUNLLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLFVBQVNDLENBQVQsRUFBWTtBQUNoQztBQUNBLFlBQUlDLE9BQU8sR0FBR1osTUFBTSxDQUFDYSxhQUFQLENBQXFCLFdBQXJCLENBQWQ7QUFDQSxZQUFJQyxTQUFTLEdBQUdkLE1BQU0sQ0FBQ2EsYUFBUCxDQUFxQixjQUFyQixDQUFoQixDQUhnQyxDQUtoQzs7QUFDQSxZQUFJQyxTQUFKLEVBQWU7QUFDWjtBQUNGLFNBUitCLENBVWhDOzs7QUFDQUEsUUFBQUEsU0FBUyxHQUFHaEIsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixHQUF2QixDQUFaO0FBQ0FELFFBQUFBLFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsSUFBeEI7QUFDQUgsUUFBQUEsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUF4QjtBQUNBSCxRQUFBQSxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLE9BQXhCLEVBZGdDLENBZ0JoQzs7QUFDQWpCLFFBQUFBLE1BQU0sQ0FBQ2tCLFdBQVAsQ0FBbUJKLFNBQW5CLEVBakJnQyxDQW1CaEM7O0FBQ0FYLFFBQUFBLE9BQU8sQ0FBQ2EsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsY0FBdEIsRUFwQmdDLENBc0JoQzs7QUFDQUwsUUFBQUEsT0FBTyxDQUFDSSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixRQUF0QixFQXZCZ0MsQ0F5QmhDOztBQUNBRSxRQUFBQSxVQUFVLENBQUMsWUFBVztBQUNsQjtBQUNBUCxVQUFBQSxPQUFPLENBQUNJLFNBQVIsQ0FBa0JJLE1BQWxCLENBQXlCLFFBQXpCLEVBRmtCLENBR2xCOztBQUNBcEIsVUFBQUEsTUFBTSxDQUFDcUIsV0FBUCxDQUFtQlAsU0FBbkIsRUFKa0IsQ0FNbEI7O0FBQ0FYLFVBQUFBLE9BQU8sQ0FBQ2EsU0FBUixDQUFrQkksTUFBbEIsQ0FBeUIsY0FBekI7QUFDSCxTQVJTLEVBUVAsSUFSTyxDQUFWO0FBU0gsT0FuQ0Q7QUFvQ0gsS0EvQ0Q7QUFnREgsR0FqREQsQ0FGK0IsQ0FxRC9COzs7QUFDQSxTQUFPO0FBQ0hFLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkM0IsTUFBQUEsZUFBZTtBQUNsQjtBQUhFLEdBQVA7QUFLSCxDQTNEc0IsRUFBdkIsQyxDQTZEQTs7O0FBQ0FDLE1BQU0sQ0FBQzJCLGtCQUFQLENBQTBCLFlBQVc7QUFDakM3QixFQUFBQSxnQkFBZ0IsQ0FBQzRCLElBQWpCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdGhlbWUvY29yZS9qcy9jdXN0b20vYWNjb3VudC9hcGkta2V5cy9hcGkta2V5cy5qcz8zNGM4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RBY2NvdW50QVBJS2V5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgaW5pdExpY2VuY2VDb3B5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgS1RVdGlsLmVhY2goZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2t0X2FwaV9rZXlzX3RhYmxlIFtkYXRhLWFjdGlvbj1cImNvcHlcIl0nKSwgZnVuY3Rpb24oYnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHZhciB0ciA9IGJ1dHRvbi5jbG9zZXN0KCd0cicpO1xyXG4gICAgICAgICAgICB2YXIgbGljZW5zZSA9IEtUVXRpbC5maW5kKHRyLCAnW2RhdGEtYnMtdGFyZ2V0PVwibGljZW5zZVwiXScpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyhidXR0b24sIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogbGljZW5zZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaWNlbnNlLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWNvbnNcclxuICAgICAgICAgICAgICAgIHZhciBzdmdJY29uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5zdmctaWNvbicpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBjaGVja0ljb24gPSBidXR0b24ucXVlcnlTZWxlY3RvcignLmJpLmJpLWNoZWNrJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGV4aXQgaWYgY2hlY2sgaWNvbiBpcyBhbHJlYWR5IHNob3duXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tJY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm47ICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgY2hlY2sgaWNvblxyXG4gICAgICAgICAgICAgICAgY2hlY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2JpJyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja0ljb24uY2xhc3NMaXN0LmFkZCgnYmktY2hlY2snKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdmcy0yeCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBjaGVjayBpY29uXHJcbiAgICAgICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoY2hlY2tJY29uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICBsaWNlbnNlLmNsYXNzTGlzdC5hZGQoJ3RleHQtc3VjY2VzcycpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgY29weSBpY29uXHJcbiAgICAgICAgICAgICAgICBzdmdJY29uLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCAzIHNlY29uZHMgdGltZW91dCB0byBoaWRlIHRoZSBjaGVjayBpY29uIGFuZCBzaG93IGNvcHkgaWNvbiBiYWNrXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjaGVjayBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGNoZWNrIGljb24gYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChjaGVja0ljb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaGlnaGxpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgbGljZW5zZS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGluaXRMaWNlbmNlQ29weSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUQWNjb3VudEFQSUtleXMuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUQWNjb3VudEFQSUtleXMiLCJpbml0TGljZW5jZUNvcHkiLCJLVFV0aWwiLCJlYWNoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwidHIiLCJjbG9zZXN0IiwibGljZW5zZSIsImZpbmQiLCJjbGlwYm9hcmQiLCJDbGlwYm9hcmRKUyIsInRhcmdldCIsInRleHQiLCJpbm5lckhUTUwiLCJvbiIsImUiLCJzdmdJY29uIiwicXVlcnlTZWxlY3RvciIsImNoZWNrSWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJyZW1vdmVDaGlsZCIsImluaXQiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/account/api-keys/api-keys.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/account/api-keys/api-keys.js"]();
/******/ 	
/******/ })()
;