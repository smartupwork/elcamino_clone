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

/***/ "./resources/assets/theme/core/js/custom/apps/file-manager/settings.js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/apps/file-manager/settings.js ***!
  \*****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAppFileManagerSettings = function () {\n  var form; // Private functions\n\n  var handleForm = function handleForm() {\n    var saveButton = form.querySelector('#kt_file_manager_settings_submit');\n    saveButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      saveButton.setAttribute(\"data-kt-indicator\", \"on\"); // Simulate process for demo only\n\n      setTimeout(function () {\n        toastr.options = {\n          \"closeButton\": true,\n          \"debug\": false,\n          \"newestOnTop\": false,\n          \"progressBar\": false,\n          \"positionClass\": \"toast-top-right\",\n          \"preventDuplicates\": false,\n          \"showDuration\": \"300\",\n          \"hideDuration\": \"1000\",\n          \"timeOut\": \"5000\",\n          \"extendedTimeOut\": \"1000\",\n          \"showEasing\": \"swing\",\n          \"hideEasing\": \"linear\",\n          \"showMethod\": \"fadeIn\",\n          \"hideMethod\": \"fadeOut\"\n        };\n        toastr.success('File manager settings have been saved');\n        saveButton.removeAttribute(\"data-kt-indicator\");\n      }, 1000);\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init(element) {\n      form = document.querySelector('#kt_file_manager_settings');\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAppFileManagerSettings.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FwcHMvZmlsZS1tYW5hZ2VyL3NldHRpbmdzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHdCQUF3QixHQUFHLFlBQVk7QUFDdkMsTUFBSUMsSUFBSixDQUR1QyxDQUcxQzs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQzNCLFFBQU1DLFVBQVUsR0FBR0YsSUFBSSxDQUFDRyxhQUFMLENBQW1CLGtDQUFuQixDQUFuQjtBQUVNRCxJQUFBQSxVQUFVLENBQUNFLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQUFDLENBQUMsRUFBSTtBQUN0Q0EsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUFKLE1BQUFBLFVBQVUsQ0FBQ0ssWUFBWCxDQUF3QixtQkFBeEIsRUFBNkMsSUFBN0MsRUFIc0MsQ0FLdEM7O0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFVO0FBQ2pCQyxRQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYix5QkFBZSxJQURGO0FBRWIsbUJBQVMsS0FGSTtBQUdiLHlCQUFlLEtBSEY7QUFJYix5QkFBZSxLQUpGO0FBS2IsMkJBQWlCLGlCQUxKO0FBTWIsK0JBQXFCLEtBTlI7QUFPYiwwQkFBZ0IsS0FQSDtBQVFiLDBCQUFnQixNQVJIO0FBU2IscUJBQVcsTUFURTtBQVViLDZCQUFtQixNQVZOO0FBV2Isd0JBQWMsT0FYRDtBQVliLHdCQUFjLFFBWkQ7QUFhYix3QkFBYyxRQWJEO0FBY2Isd0JBQWM7QUFkRCxTQUFqQjtBQWlCQUQsUUFBQUEsTUFBTSxDQUFDRSxPQUFQLENBQWUsdUNBQWY7QUFFQVQsUUFBQUEsVUFBVSxDQUFDVSxlQUFYLENBQTJCLG1CQUEzQjtBQUNILE9BckJTLEVBcUJQLElBckJPLENBQVY7QUFzQkgsS0E1QkQ7QUE2Qk4sR0FoQ0QsQ0FKMEMsQ0FzQzFDOzs7QUFDQSxTQUFPO0FBQ05DLElBQUFBLElBQUksRUFBRSxjQUFTQyxPQUFULEVBQWtCO0FBQ2RkLE1BQUFBLElBQUksR0FBR2UsUUFBUSxDQUFDWixhQUFULENBQXVCLDJCQUF2QixDQUFQO0FBRVRGLE1BQUFBLFVBQVU7QUFDSjtBQUxELEdBQVA7QUFPQSxDQTlDOEIsRUFBL0IsQyxDQWdEQTs7O0FBQ0FlLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2xCLEVBQUFBLHdCQUF3QixDQUFDYyxJQUF6QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FwcHMvZmlsZS1tYW5hZ2VyL3NldHRpbmdzLmpzPzU0NTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEFwcEZpbGVNYW5hZ2VyU2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZm9ybTtcclxuXHJcblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuXHR2YXIgaGFuZGxlRm9ybSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3Qgc2F2ZUJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2t0X2ZpbGVfbWFuYWdlcl9zZXR0aW5nc19zdWJtaXQnKTtcclxuXHJcbiAgICAgICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBzYXZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIsIFwib25cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBTaW11bGF0ZSBwcm9jZXNzIGZvciBkZW1vIG9ubHlcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbG9zZUJ1dHRvblwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVidWdcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXdlc3RPblRvcFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBcInByb2dyZXNzQmFyXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicG9zaXRpb25DbGFzc1wiOiBcInRvYXN0LXRvcC1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJldmVudER1cGxpY2F0ZXNcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93RHVyYXRpb25cIjogXCIzMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhpZGVEdXJhdGlvblwiOiBcIjEwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRpbWVPdXRcIjogXCI1MDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleHRlbmRlZFRpbWVPdXRcIjogXCIxMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93RWFzaW5nXCI6IFwic3dpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhpZGVFYXNpbmdcIjogXCJsaW5lYXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInNob3dNZXRob2RcIjogXCJmYWRlSW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcImhpZGVNZXRob2RcIjogXCJmYWRlT3V0XCJcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoJ0ZpbGUgbWFuYWdlciBzZXR0aW5ncyBoYXZlIGJlZW4gc2F2ZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzYXZlQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdC8vIFB1YmxpYyBtZXRob2RzXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9maWxlX21hbmFnZXJfc2V0dGluZ3MnKTtcclxuXHJcblx0XHRcdGhhbmRsZUZvcm0oKTtcclxuICAgICAgICB9XHJcblx0fTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEFwcEZpbGVNYW5hZ2VyU2V0dGluZ3MuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUQXBwRmlsZU1hbmFnZXJTZXR0aW5ncyIsImZvcm0iLCJoYW5kbGVGb3JtIiwic2F2ZUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInRvYXN0ciIsIm9wdGlvbnMiLCJzdWNjZXNzIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/apps/file-manager/settings.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/apps/file-manager/settings.js"]();
/******/ 	
/******/ })()
;