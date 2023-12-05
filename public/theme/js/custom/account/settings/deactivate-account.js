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

/***/ "./resources/assets/theme/core/js/custom/account/settings/deactivate-account.js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/account/settings/deactivate-account.js ***!
  \**************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountSettingsDeactivateAccount = function () {\n  // Private variables\n  var form;\n  var validation;\n  var submitButton; // Private functions\n\n  var initValidation = function initValidation() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validation = FormValidation.formValidation(form, {\n      fields: {\n        deactivate: {\n          validators: {\n            notEmpty: {\n              message: 'Please check the box to deactivate your account'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n  };\n\n  var handleForm = function handleForm() {\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      validation.validate().then(function (status) {\n        if (status == 'Valid') {\n          swal.fire({\n            text: \"Are you sure you would like to deactivate your account?\",\n            icon: \"warning\",\n            buttonsStyling: false,\n            showDenyButton: true,\n            confirmButtonText: \"Yes\",\n            denyButtonText: 'No',\n            customClass: {\n              confirmButton: \"btn btn-light-primary\",\n              denyButton: \"btn btn-danger\"\n            }\n          }).then(function (result) {\n            if (result.isConfirmed) {\n              Swal.fire({\n                text: 'Your account has been deactivated.',\n                icon: 'success',\n                confirmButtonText: \"Ok\",\n                buttonsStyling: false,\n                customClass: {\n                  confirmButton: \"btn btn-light-primary\"\n                }\n              });\n            } else if (result.isDenied) {\n              Swal.fire({\n                text: 'Account not deactivated.',\n                icon: 'info',\n                confirmButtonText: \"Ok\",\n                buttonsStyling: false,\n                customClass: {\n                  confirmButton: \"btn btn-light-primary\"\n                }\n              });\n            }\n          });\n        } else {\n          swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-light-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      form = document.querySelector('#kt_account_deactivate_form');\n      submitButton = document.querySelector('#kt_account_deactivate_account_submit');\n      initValidation();\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountSettingsDeactivateAccount.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FjY291bnQvc2V0dGluZ3MvZGVhY3RpdmF0ZS1hY2NvdW50LmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGtDQUFrQyxHQUFHLFlBQVk7QUFDakQ7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsVUFBSjtBQUNBLE1BQUlDLFlBQUosQ0FKaUQsQ0FNakQ7O0FBQ0EsTUFBSUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFZO0FBQzdCO0FBQ0FGLElBQUFBLFVBQVUsR0FBR0csY0FBYyxDQUFDQyxjQUFmLENBQ1RMLElBRFMsRUFFVDtBQUNJTSxNQUFBQSxNQUFNLEVBQUU7QUFDSkMsUUFBQUEsVUFBVSxFQUFFO0FBQ1JDLFVBQUFBLFVBQVUsRUFBRTtBQUNSQyxZQUFBQSxRQUFRLEVBQUU7QUFDTkMsY0FBQUEsT0FBTyxFQUFFO0FBREg7QUFERjtBQURKO0FBRFIsT0FEWjtBQVVJQyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFLElBQUlSLGNBQWMsQ0FBQ08sT0FBZixDQUF1QkUsT0FBM0IsRUFESjtBQUVMWCxRQUFBQSxZQUFZLEVBQUUsSUFBSUUsY0FBYyxDQUFDTyxPQUFmLENBQXVCRyxZQUEzQixFQUZUO0FBR0w7QUFDQUMsUUFBQUEsU0FBUyxFQUFFLElBQUlYLGNBQWMsQ0FBQ08sT0FBZixDQUF1QkssVUFBM0IsQ0FBc0M7QUFDN0NDLFVBQUFBLFdBQVcsRUFBRSxTQURnQztBQUU3Q0MsVUFBQUEsZUFBZSxFQUFFLEVBRjRCO0FBRzdDQyxVQUFBQSxhQUFhLEVBQUU7QUFIOEIsU0FBdEM7QUFKTjtBQVZiLEtBRlMsQ0FBYjtBQXdCSCxHQTFCRDs7QUE0QkEsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUN6QmxCLElBQUFBLFlBQVksQ0FBQ21CLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQVVDLENBQVYsRUFBYTtBQUNoREEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUF0QixNQUFBQSxVQUFVLENBQUN1QixRQUFYLEdBQXNCQyxJQUF0QixDQUEyQixVQUFVQyxNQUFWLEVBQWtCO0FBQ3pDLFlBQUlBLE1BQU0sSUFBSSxPQUFkLEVBQXVCO0FBRW5CQyxVQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxZQUFBQSxJQUFJLEVBQUUseURBREE7QUFFTkMsWUFBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkMsWUFBQUEsY0FBYyxFQUFFLEtBSFY7QUFJTkMsWUFBQUEsY0FBYyxFQUFFLElBSlY7QUFLTkMsWUFBQUEsaUJBQWlCLEVBQUUsS0FMYjtBQU1OQyxZQUFBQSxjQUFjLEVBQUUsSUFOVjtBQU9OQyxZQUFBQSxXQUFXLEVBQUU7QUFDVEMsY0FBQUEsYUFBYSxFQUFFLHVCQUROO0FBRVRDLGNBQUFBLFVBQVUsRUFBRTtBQUZIO0FBUFAsV0FBVixFQVdHWixJQVhILENBV1EsVUFBQ2EsTUFBRCxFQUFZO0FBQ2hCLGdCQUFJQSxNQUFNLENBQUNDLFdBQVgsRUFBd0I7QUFDcEJDLGNBQUFBLElBQUksQ0FBQ1osSUFBTCxDQUFVO0FBQ05DLGdCQUFBQSxJQUFJLEVBQUUsb0NBREE7QUFFTkMsZ0JBQUFBLElBQUksRUFBRSxTQUZBO0FBR05HLGdCQUFBQSxpQkFBaUIsRUFBRSxJQUhiO0FBSU5GLGdCQUFBQSxjQUFjLEVBQUUsS0FKVjtBQUtOSSxnQkFBQUEsV0FBVyxFQUFFO0FBQ1RDLGtCQUFBQSxhQUFhLEVBQUU7QUFETjtBQUxQLGVBQVY7QUFTSCxhQVZELE1BVU8sSUFBSUUsTUFBTSxDQUFDRyxRQUFYLEVBQXFCO0FBQ3hCRCxjQUFBQSxJQUFJLENBQUNaLElBQUwsQ0FBVTtBQUNOQyxnQkFBQUEsSUFBSSxFQUFFLDBCQURBO0FBRU5DLGdCQUFBQSxJQUFJLEVBQUUsTUFGQTtBQUdORyxnQkFBQUEsaUJBQWlCLEVBQUUsSUFIYjtBQUlORixnQkFBQUEsY0FBYyxFQUFFLEtBSlY7QUFLTkksZ0JBQUFBLFdBQVcsRUFBRTtBQUNUQyxrQkFBQUEsYUFBYSxFQUFFO0FBRE47QUFMUCxlQUFWO0FBU0g7QUFDSixXQWpDRDtBQW1DSCxTQXJDRCxNQXFDTztBQUNIVCxVQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxZQUFBQSxJQUFJLEVBQUUscUVBREE7QUFFTkMsWUFBQUEsSUFBSSxFQUFFLE9BRkE7QUFHTkMsWUFBQUEsY0FBYyxFQUFFLEtBSFY7QUFJTkUsWUFBQUEsaUJBQWlCLEVBQUUsYUFKYjtBQUtORSxZQUFBQSxXQUFXLEVBQUU7QUFDVEMsY0FBQUEsYUFBYSxFQUFFO0FBRE47QUFMUCxXQUFWO0FBU0g7QUFDSixPQWpERDtBQWtESCxLQXJERDtBQXNESCxHQXZERCxDQW5DaUQsQ0E0RmpEOzs7QUFDQSxTQUFPO0FBQ0hNLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkMUMsTUFBQUEsSUFBSSxHQUFHMkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLDZCQUF2QixDQUFQO0FBQ0ExQyxNQUFBQSxZQUFZLEdBQUd5QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUNBQXZCLENBQWY7QUFFQXpDLE1BQUFBLGNBQWM7QUFDZGlCLE1BQUFBLFVBQVU7QUFDYjtBQVBFLEdBQVA7QUFTSCxDQXRHd0MsRUFBekMsQyxDQXdHQTs7O0FBQ0F5QixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakMvQyxFQUFBQSxrQ0FBa0MsQ0FBQzJDLElBQW5DO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdGhlbWUvY29yZS9qcy9jdXN0b20vYWNjb3VudC9zZXR0aW5ncy9kZWFjdGl2YXRlLWFjY291bnQuanM/NjA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUQWNjb3VudFNldHRpbmdzRGVhY3RpdmF0ZUFjY291bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlc1xyXG4gICAgdmFyIGZvcm07XHJcbiAgICB2YXIgdmFsaWRhdGlvbjtcclxuICAgIHZhciBzdWJtaXRCdXR0b247XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBpbml0VmFsaWRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xyXG4gICAgICAgIHZhbGlkYXRpb24gPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgZm9ybSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVhY3RpdmF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGJveCB0byBkZWFjdGl2YXRlIHlvdXIgYWNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuU3VibWl0QnV0dG9uKCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kZWZhdWx0U3VibWl0OiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5EZWZhdWx0U3VibWl0KCksIC8vIFVuY29tbWVudCB0aGlzIGxpbmUgdG8gZW5hYmxlIG5vcm1hbCBidXR0b24gc3VibWl0IGFmdGVyIGZvcm0gdmFsaWRhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlYWN0aXZhdGUgeW91ciBhY2NvdW50P1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGVueUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbnlCdXR0b25UZXh0OiAnTm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLWxpZ2h0LXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnlCdXR0b246IFwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1lvdXIgYWNjb3VudCBoYXMgYmVlbiBkZWFjdGl2YXRlZC4nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLWxpZ2h0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmlzRGVuaWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBY2NvdW50IG5vdCBkZWFjdGl2YXRlZC4nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLWxpZ2h0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1saWdodC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfYWNjb3VudF9kZWFjdGl2YXRlX2Zvcm0nKTtcclxuICAgICAgICAgICAgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2FjY291bnRfZGVhY3RpdmF0ZV9hY2NvdW50X3N1Ym1pdCcpO1xyXG5cclxuICAgICAgICAgICAgaW5pdFZhbGlkYXRpb24oKTtcclxuICAgICAgICAgICAgaGFuZGxlRm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUQWNjb3VudFNldHRpbmdzRGVhY3RpdmF0ZUFjY291bnQuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUQWNjb3VudFNldHRpbmdzRGVhY3RpdmF0ZUFjY291bnQiLCJmb3JtIiwidmFsaWRhdGlvbiIsInN1Ym1pdEJ1dHRvbiIsImluaXRWYWxpZGF0aW9uIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsImRlYWN0aXZhdGUiLCJ2YWxpZGF0b3JzIiwibm90RW1wdHkiLCJtZXNzYWdlIiwicGx1Z2lucyIsInRyaWdnZXIiLCJUcmlnZ2VyIiwiU3VibWl0QnV0dG9uIiwiYm9vdHN0cmFwIiwiQm9vdHN0cmFwNSIsInJvd1NlbGVjdG9yIiwiZWxlSW52YWxpZENsYXNzIiwiZWxlVmFsaWRDbGFzcyIsImhhbmRsZUZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJ0aGVuIiwic3RhdHVzIiwic3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbnNTdHlsaW5nIiwic2hvd0RlbnlCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImRlbnlCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiZGVueUJ1dHRvbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiU3dhbCIsImlzRGVuaWVkIiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/account/settings/deactivate-account.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/account/settings/deactivate-account.js"]();
/******/ 	
/******/ })()
;