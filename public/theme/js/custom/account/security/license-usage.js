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

/***/ "./resources/assets/theme/core/js/custom/account/security/license-usage.js":
/*!*********************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/account/security/license-usage.js ***!
  \*********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountSecurityLicenseUsage = function () {\n  // Private functions\n  var initLicenceCopy = function initLicenceCopy() {\n    KTUtil.each(document.querySelectorAll('#kt_security_license_usage_table [data-action=\"copy\"]'), function (button) {\n      var tr = button.closest('tr');\n      var license = KTUtil.find(tr, '[data-bs-target=\"license\"]');\n      var clipboard = new ClipboardJS(button, {\n        target: license,\n        text: function text() {\n          return license.innerHTML;\n        }\n      });\n      clipboard.on('success', function (e) {\n        // Icons\n        var svgIcon = button.querySelector('.svg-icon');\n        var checkIcon = button.querySelector('.bi.bi-check'); // exit if check icon is already shown\n\n        if (checkIcon) {\n          return;\n        } // Create check icon\n\n\n        checkIcon = document.createElement('i');\n        checkIcon.classList.add('bi');\n        checkIcon.classList.add('bi-check');\n        checkIcon.classList.add('fs-2x'); // Append check icon\n\n        button.appendChild(checkIcon); // Highlight target\n\n        license.classList.add('text-success'); // Hide copy icon\n\n        svgIcon.classList.add('d-none'); // Set 3 seconds timeout to hide the check icon and show copy icon back\n\n        setTimeout(function () {\n          // Remove check icon\n          svgIcon.classList.remove('d-none'); // Show check icon back\n\n          button.removeChild(checkIcon); // Remove highlight\n\n          license.classList.remove('text-success');\n        }, 3000);\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initLicenceCopy();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountSecurityLicenseUsage.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FjY291bnQvc2VjdXJpdHkvbGljZW5zZS11c2FnZS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSw2QkFBNkIsR0FBRyxZQUFZO0FBQzVDO0FBQ0EsTUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFXO0FBQzdCQyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix1REFBMUIsQ0FBWixFQUFnRyxVQUFTQyxNQUFULEVBQWlCO0FBQzdHLFVBQUlDLEVBQUUsR0FBR0QsTUFBTSxDQUFDRSxPQUFQLENBQWUsSUFBZixDQUFUO0FBQ0EsVUFBSUMsT0FBTyxHQUFHUCxNQUFNLENBQUNRLElBQVAsQ0FBWUgsRUFBWixFQUFnQiw0QkFBaEIsQ0FBZDtBQUVBLFVBQUlJLFNBQVMsR0FBRyxJQUFJQyxXQUFKLENBQWdCTixNQUFoQixFQUF3QjtBQUNwQ08sUUFBQUEsTUFBTSxFQUFFSixPQUQ0QjtBQUVwQ0ssUUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2IsaUJBQU9MLE9BQU8sQ0FBQ00sU0FBZjtBQUNIO0FBSm1DLE9BQXhCLENBQWhCO0FBT0FKLE1BQUFBLFNBQVMsQ0FBQ0ssRUFBVixDQUFhLFNBQWIsRUFBd0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hDO0FBQ0EsWUFBSUMsT0FBTyxHQUFHWixNQUFNLENBQUNhLGFBQVAsQ0FBcUIsV0FBckIsQ0FBZDtBQUNBLFlBQUlDLFNBQVMsR0FBR2QsTUFBTSxDQUFDYSxhQUFQLENBQXFCLGNBQXJCLENBQWhCLENBSGdDLENBS2hDOztBQUNBLFlBQUlDLFNBQUosRUFBZTtBQUNaO0FBQ0YsU0FSK0IsQ0FVaEM7OztBQUNBQSxRQUFBQSxTQUFTLEdBQUdoQixRQUFRLENBQUNpQixhQUFULENBQXVCLEdBQXZCLENBQVo7QUFDQUQsUUFBQUEsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixJQUF4QjtBQUNBSCxRQUFBQSxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQXhCO0FBQ0FILFFBQUFBLFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsT0FBeEIsRUFkZ0MsQ0FnQmhDOztBQUNBakIsUUFBQUEsTUFBTSxDQUFDa0IsV0FBUCxDQUFtQkosU0FBbkIsRUFqQmdDLENBbUJoQzs7QUFDQVgsUUFBQUEsT0FBTyxDQUFDYSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixjQUF0QixFQXBCZ0MsQ0FzQmhDOztBQUNBTCxRQUFBQSxPQUFPLENBQUNJLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFFBQXRCLEVBdkJnQyxDQXlCaEM7O0FBQ0FFLFFBQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCO0FBQ0FQLFVBQUFBLE9BQU8sQ0FBQ0ksU0FBUixDQUFrQkksTUFBbEIsQ0FBeUIsUUFBekIsRUFGa0IsQ0FHbEI7O0FBQ0FwQixVQUFBQSxNQUFNLENBQUNxQixXQUFQLENBQW1CUCxTQUFuQixFQUprQixDQU1sQjs7QUFDQVgsVUFBQUEsT0FBTyxDQUFDYSxTQUFSLENBQWtCSSxNQUFsQixDQUF5QixjQUF6QjtBQUNILFNBUlMsRUFRUCxJQVJPLENBQVY7QUFTSCxPQW5DRDtBQW9DSCxLQS9DRDtBQWdESCxHQWpERCxDQUY0QyxDQXFENUM7OztBQUNBLFNBQU87QUFDSEUsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2QzQixNQUFBQSxlQUFlO0FBQ2xCO0FBSEUsR0FBUDtBQUtILENBM0RtQyxFQUFwQyxDLENBNkRBOzs7QUFDQUMsTUFBTSxDQUFDMkIsa0JBQVAsQ0FBMEIsWUFBVztBQUNqQzdCLEVBQUFBLDZCQUE2QixDQUFDNEIsSUFBOUI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy90aGVtZS9jb3JlL2pzL2N1c3RvbS9hY2NvdW50L3NlY3VyaXR5L2xpY2Vuc2UtdXNhZ2UuanM/MGM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUQWNjb3VudFNlY3VyaXR5TGljZW5zZVVzYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBpbml0TGljZW5jZUNvcHkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBLVFV0aWwuZWFjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcja3Rfc2VjdXJpdHlfbGljZW5zZV91c2FnZV90YWJsZSBbZGF0YS1hY3Rpb249XCJjb3B5XCJdJyksIGZ1bmN0aW9uKGJ1dHRvbikge1xyXG4gICAgICAgICAgICB2YXIgdHIgPSBidXR0b24uY2xvc2VzdCgndHInKTtcclxuICAgICAgICAgICAgdmFyIGxpY2Vuc2UgPSBLVFV0aWwuZmluZCh0ciwgJ1tkYXRhLWJzLXRhcmdldD1cImxpY2Vuc2VcIl0nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoYnV0dG9uLCB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGxpY2Vuc2UsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGljZW5zZS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJY29uc1xyXG4gICAgICAgICAgICAgICAgdmFyIHN2Z0ljb24gPSBidXR0b24ucXVlcnlTZWxlY3RvcignLnN2Zy1pY29uJyk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrSWNvbiA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuYmkuYmktY2hlY2snKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gZXhpdCBpZiBjaGVjayBpY29uIGlzIGFscmVhZHkgc2hvd25cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja0ljb24pIHtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybjsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBjaGVjayBpY29uXHJcbiAgICAgICAgICAgICAgICBjaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja0ljb24uY2xhc3NMaXN0LmFkZCgnYmknKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdiaS1jaGVjaycpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2ZzLTJ4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIGNoZWNrIGljb25cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjaGVja0ljb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCB0YXJnZXRcclxuICAgICAgICAgICAgICAgIGxpY2Vuc2UuY2xhc3NMaXN0LmFkZCgndGV4dC1zdWNjZXNzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSGlkZSBjb3B5IGljb25cclxuICAgICAgICAgICAgICAgIHN2Z0ljb24uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IDMgc2Vjb25kcyB0aW1lb3V0IHRvIGhpZGUgdGhlIGNoZWNrIGljb24gYW5kIHNob3cgY29weSBpY29uIGJhY2tcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNoZWNrIGljb25cclxuICAgICAgICAgICAgICAgICAgICBzdmdJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgY2hlY2sgaWNvbiBiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNoaWxkKGNoZWNrSWNvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBoaWdobGlnaHRcclxuICAgICAgICAgICAgICAgICAgICBsaWNlbnNlLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5pdExpY2VuY2VDb3B5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RBY2NvdW50U2VjdXJpdHlMaWNlbnNlVXNhZ2UuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUQWNjb3VudFNlY3VyaXR5TGljZW5zZVVzYWdlIiwiaW5pdExpY2VuY2VDb3B5IiwiS1RVdGlsIiwiZWFjaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsInRyIiwiY2xvc2VzdCIsImxpY2Vuc2UiLCJmaW5kIiwiY2xpcGJvYXJkIiwiQ2xpcGJvYXJkSlMiLCJ0YXJnZXQiLCJ0ZXh0IiwiaW5uZXJIVE1MIiwib24iLCJlIiwic3ZnSWNvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja0ljb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/account/security/license-usage.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/account/security/license-usage.js"]();
/******/ 	
/******/ })()
;