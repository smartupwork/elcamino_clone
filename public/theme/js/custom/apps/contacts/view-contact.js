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

/***/ "./resources/assets/theme/core/js/custom/apps/contacts/view-contact.js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/apps/contacts/view-contact.js ***!
  \*****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAppContactView = function () {\n  // Private functions\n  var handleDeleteButton = function handleDeleteButton() {\n    // Select form\n    var deleteButton = document.getElementById('kt_contact_delete');\n\n    if (!deleteButton) {\n      return;\n    }\n\n    deleteButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Show popup confirmation \n\n      Swal.fire({\n        text: \"Delete contact confirmation\",\n        icon: \"warning\",\n        buttonsStyling: false,\n        showCancelButton: true,\n        confirmButtonText: \"Yes, delete it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-danger\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            text: \"Contact has been deleted!\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          }).then(function (result) {\n            if (result.value) {\n              // Redirect to customers list page\n              window.location = deleteButton.getAttribute(\"data-kt-redirect\");\n            }\n          });\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Contact has not been deleted!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      handleDeleteButton();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAppContactView.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FwcHMvY29udGFjdHMvdmlldy1jb250YWN0LmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGdCQUFnQixHQUFHLFlBQVk7QUFDL0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDN0I7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBckI7O0FBRUEsUUFBSSxDQUFDRixZQUFMLEVBQW1CO0FBQ2Y7QUFDSDs7QUFFREEsSUFBQUEsWUFBWSxDQUFDRyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFBQyxDQUFDLEVBQUk7QUFDeEM7QUFDQUEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRndDLENBSXhDOztBQUNBQyxNQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxRQUFBQSxJQUFJLEVBQUUsNkJBREE7QUFFTkMsUUFBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkMsUUFBQUEsY0FBYyxFQUFFLEtBSFY7QUFJTkMsUUFBQUEsZ0JBQWdCLEVBQUUsSUFKWjtBQUtOQyxRQUFBQSxpQkFBaUIsRUFBRSxpQkFMYjtBQU1OQyxRQUFBQSxnQkFBZ0IsRUFBRSxZQU5aO0FBT05DLFFBQUFBLFdBQVcsRUFBRTtBQUNUQyxVQUFBQSxhQUFhLEVBQUUsZ0JBRE47QUFFVEMsVUFBQUEsWUFBWSxFQUFFO0FBRkw7QUFQUCxPQUFWLEVBV0dDLElBWEgsQ0FXUSxVQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLFlBQUlBLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNkYixVQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxZQUFBQSxJQUFJLEVBQUUsMkJBREE7QUFFTkMsWUFBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkMsWUFBQUEsY0FBYyxFQUFFLEtBSFY7QUFJTkUsWUFBQUEsaUJBQWlCLEVBQUUsYUFKYjtBQUtORSxZQUFBQSxXQUFXLEVBQUU7QUFDVEMsY0FBQUEsYUFBYSxFQUFFO0FBRE47QUFMUCxXQUFWLEVBUUdFLElBUkgsQ0FRUSxVQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLGdCQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDZDtBQUNBQyxjQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0JyQixZQUFZLENBQUNzQixZQUFiLENBQTBCLGtCQUExQixDQUFsQjtBQUNIO0FBQ0osV0FiRDtBQWNILFNBZkQsTUFlTyxJQUFJSixNQUFNLENBQUNLLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDcENqQixVQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxZQUFBQSxJQUFJLEVBQUUsZ0NBREE7QUFFTkMsWUFBQUEsSUFBSSxFQUFFLE9BRkE7QUFHTkMsWUFBQUEsY0FBYyxFQUFFLEtBSFY7QUFJTkUsWUFBQUEsaUJBQWlCLEVBQUUsYUFKYjtBQUtORSxZQUFBQSxXQUFXLEVBQUU7QUFDVEMsY0FBQUEsYUFBYSxFQUFFO0FBRE47QUFMUCxXQUFWO0FBU0g7QUFDSixPQXRDRDtBQXVDSCxLQTVDRDtBQTZDSCxHQXJERCxDQUYrQixDQXlEL0I7OztBQUNBLFNBQU87QUFDSFMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBRWR6QixNQUFBQSxrQkFBa0I7QUFFckI7QUFMRSxHQUFQO0FBT0gsQ0FqRXNCLEVBQXZCLEMsQ0FtRUE7OztBQUNBMEIsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDNUIsRUFBQUEsZ0JBQWdCLENBQUMwQixJQUFqQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FwcHMvY29udGFjdHMvdmlldy1jb250YWN0LmpzPzIwM2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEFwcENvbnRhY3RWaWV3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICAvLyBTZWxlY3QgZm9ybVxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jb250YWN0X2RlbGV0ZScpO1xyXG5cclxuICAgICAgICBpZiAoIWRlbGV0ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGJ1dHRvbiBhY3Rpb25cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2hvdyBwb3B1cCBjb25maXJtYXRpb24gXHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlbGV0ZSBjb250YWN0IGNvbmZpcm1hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBkZWxldGUgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCByZXR1cm5cIixcclxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLWRhbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLWFjdGl2ZS1saWdodFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ29udGFjdCBoYXMgYmVlbiBkZWxldGVkIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIGN1c3RvbWVycyBsaXN0IHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRlbGV0ZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWt0LXJlZGlyZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ29udGFjdCBoYXMgbm90IGJlZW4gZGVsZXRlZCEuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBoYW5kbGVEZWxldGVCdXR0b24oKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEFwcENvbnRhY3RWaWV3LmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEFwcENvbnRhY3RWaWV3IiwiaGFuZGxlRGVsZXRlQnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwid2luZG93IiwibG9jYXRpb24iLCJnZXRBdHRyaWJ1dGUiLCJkaXNtaXNzIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/apps/contacts/view-contact.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/apps/contacts/view-contact.js"]();
/******/ 	
/******/ })()
;