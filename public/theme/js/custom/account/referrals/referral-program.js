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

/***/ "./resources/assets/theme/core/js/custom/account/referrals/referral-program.js":
/*!*************************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/account/referrals/referral-program.js ***!
  \*************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountReferralsReferralProgram = function () {\n  // Private functions\n  var initReferralProgrammClipboard = function initReferralProgrammClipboard() {\n    var button = document.querySelector('#kt_referral_program_link_copy_btn');\n    var input = document.querySelector('#kt_referral_link_input');\n    var clipboard = new ClipboardJS(button);\n    clipboard.on('success', function (e) {\n      var buttonCaption = button.innerHTML; //Add bgcolor\n\n      input.classList.add('bg-success');\n      input.classList.add('text-inverse-success');\n      button.innerHTML = 'Copied!';\n      setTimeout(function () {\n        button.innerHTML = buttonCaption; // Remove bgcolor\n\n        input.classList.remove('bg-success');\n        input.classList.remove('text-inverse-success');\n      }, 3000); // 3seconds\n\n      e.clearSelection();\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initReferralProgrammClipboard();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountReferralsReferralProgram.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FjY291bnQvcmVmZXJyYWxzL3JlZmVycmFsLXByb2dyYW0uanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsaUNBQWlDLEdBQUcsWUFBWTtBQUNoRDtBQUVBLE1BQUlDLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0MsR0FBVztBQUMzQyxRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQ0FBdkIsQ0FBYjtBQUNBLFFBQUlDLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDQUFaO0FBQ0EsUUFBSUUsU0FBUyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JMLE1BQWhCLENBQWhCO0FBRUFJLElBQUFBLFNBQVMsQ0FBQ0UsRUFBVixDQUFhLFNBQWIsRUFBd0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hDLFVBQUlDLGFBQWEsR0FBR1IsTUFBTSxDQUFDUyxTQUEzQixDQURnQyxDQUVoQzs7QUFDQU4sTUFBQUEsS0FBSyxDQUFDTyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixZQUFwQjtBQUNBUixNQUFBQSxLQUFLLENBQUNPLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLHNCQUFwQjtBQUVBWCxNQUFBQSxNQUFNLENBQUNTLFNBQVAsR0FBbUIsU0FBbkI7QUFFQUcsTUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEJaLFFBQUFBLE1BQU0sQ0FBQ1MsU0FBUCxHQUFtQkQsYUFBbkIsQ0FEa0IsQ0FHbEI7O0FBQ0FMLFFBQUFBLEtBQUssQ0FBQ08sU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUIsWUFBdkI7QUFDQVYsUUFBQUEsS0FBSyxDQUFDTyxTQUFOLENBQWdCRyxNQUFoQixDQUF1QixzQkFBdkI7QUFDSCxPQU5TLEVBTVAsSUFOTyxDQUFWLENBUmdDLENBY3JCOztBQUVYTixNQUFBQSxDQUFDLENBQUNPLGNBQUY7QUFDSCxLQWpCRDtBQWtCSCxHQXZCRCxDQUhnRCxDQTRCaEQ7OztBQUNBLFNBQU87QUFDSEMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RoQixNQUFBQSw2QkFBNkI7QUFDaEM7QUFIRSxHQUFQO0FBS0gsQ0FsQ3VDLEVBQXhDLEMsQ0FvQ0E7OztBQUNBaUIsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDbkIsRUFBQUEsaUNBQWlDLENBQUNpQixJQUFsQztBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FjY291bnQvcmVmZXJyYWxzL3JlZmVycmFsLXByb2dyYW0uanM/OGI5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUQWNjb3VudFJlZmVycmFsc1JlZmVycmFsUHJvZ3JhbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblxyXG4gICAgdmFyIGluaXRSZWZlcnJhbFByb2dyYW1tQ2xpcGJvYXJkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9yZWZlcnJhbF9wcm9ncmFtX2xpbmtfY29weV9idG4nKTtcclxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfcmVmZXJyYWxfbGlua19pbnB1dCcpO1xyXG4gICAgICAgIHZhciBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9uQ2FwdGlvbiA9IGJ1dHRvbi5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIC8vQWRkIGJnY29sb3JcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnYmctc3VjY2VzcycpO1xyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWludmVyc2Utc3VjY2VzcycpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdDb3BpZWQhJztcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gYnV0dG9uQ2FwdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYmdjb2xvclxyXG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYmctc3VjY2VzcycpOyBcclxuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtaW52ZXJzZS1zdWNjZXNzJyk7IFxyXG4gICAgICAgICAgICB9LCAzMDAwKTsgIC8vIDNzZWNvbmRzXHJcblxyXG4gICAgICAgICAgICBlLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbml0UmVmZXJyYWxQcm9ncmFtbUNsaXBib2FyZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUQWNjb3VudFJlZmVycmFsc1JlZmVycmFsUHJvZ3JhbS5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RBY2NvdW50UmVmZXJyYWxzUmVmZXJyYWxQcm9ncmFtIiwiaW5pdFJlZmVycmFsUHJvZ3JhbW1DbGlwYm9hcmQiLCJidXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsImNsaXBib2FyZCIsIkNsaXBib2FyZEpTIiwib24iLCJlIiwiYnV0dG9uQ2FwdGlvbiIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbGVhclNlbGVjdGlvbiIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/account/referrals/referral-program.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/account/referrals/referral-program.js"]();
/******/ 	
/******/ })()
;