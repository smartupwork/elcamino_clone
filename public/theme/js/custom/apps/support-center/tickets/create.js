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

/***/ "./resources/assets/theme/core/js/custom/apps/support-center/tickets/create.js":
/*!*************************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/apps/support-center/tickets/create.js ***!
  \*************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTModalNewTicket = function () {\n  var submitButton;\n  var cancelButton;\n  var validator;\n  var form;\n  var modal;\n  var modalEl; // Init form inputs\n\n  var initForm = function initForm() {\n    // Ticket attachments\n    // For more info about Dropzone plugin visit:  https://www.dropzonejs.com/#usage\n    var myDropzone = new Dropzone(\"#kt_modal_create_ticket_attachments\", {\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    }); // Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/\n\n    var dueDate = $(form.querySelector('[name=\"due_date\"]'));\n    dueDate.flatpickr({\n      enableTime: true,\n      dateFormat: \"d, M Y, H:i\"\n    }); // Ticket user. For more info, plase visit the official plugin site: https://select2.org/\n\n    $(form.querySelector('[name=\"user\"]')).on('change', function () {\n      // Revalidate the field when an option is chosen\n      validator.revalidateField('user');\n    }); // Ticket status. For more info, plase visit the official plugin site: https://select2.org/\n\n    $(form.querySelector('[name=\"status\"]')).on('change', function () {\n      // Revalidate the field when an option is chosen\n      validator.revalidateField('status');\n    });\n  }; // Handle form validation and submittion\n\n\n  var handleForm = function handleForm() {\n    // Stepper custom navigation\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        subject: {\n          validators: {\n            notEmpty: {\n              message: 'Ticket subject is required'\n            }\n          }\n        },\n        user: {\n          validators: {\n            notEmpty: {\n              message: 'Ticket user is required'\n            }\n          }\n        },\n        due_date: {\n          validators: {\n            notEmpty: {\n              message: 'Ticket due date is required'\n            }\n          }\n        },\n        description: {\n          validators: {\n            notEmpty: {\n              message: 'Target description is required'\n            }\n          }\n        },\n        'notifications[]': {\n          validators: {\n            notEmpty: {\n              message: 'Please select at least one notifications method'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Action buttons\n\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true;\n            setTimeout(function () {\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show success message. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modal.hide();\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show error message.\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    });\n    cancelButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\t\n\n          modal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      // Elements\n      modalEl = document.querySelector('#kt_modal_new_ticket');\n\n      if (!modalEl) {\n        return;\n      }\n\n      modal = new bootstrap.Modal(modalEl);\n      form = document.querySelector('#kt_modal_new_ticket_form');\n      submitButton = document.getElementById('kt_modal_new_ticket_submit');\n      cancelButton = document.getElementById('kt_modal_new_ticket_cancel');\n      initForm();\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTModalNewTicket.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FwcHMvc3VwcG9ydC1jZW50ZXIvdGlja2V0cy9jcmVhdGUuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBWTtBQUNsQyxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsS0FBSjtBQUNBLE1BQUlDLE9BQUosQ0FOa0MsQ0FRbEM7O0FBQ0EsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBVztBQUN6QjtBQUNBO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLElBQUlDLFFBQUosQ0FBYSxxQ0FBYixFQUFvRDtBQUNwRUMsTUFBQUEsR0FBRyxFQUFFLHlDQUQrRDtBQUNwQjtBQUN2Q0MsTUFBQUEsU0FBUyxFQUFFLE1BRmdEO0FBRXhDO0FBQ25CQyxNQUFBQSxRQUFRLEVBQUUsRUFIaUQ7QUFJM0RDLE1BQUFBLFdBQVcsRUFBRSxFQUo4QztBQUkxQztBQUNqQkMsTUFBQUEsY0FBYyxFQUFFLElBTDJDO0FBTTNEQyxNQUFBQSxNQUFNLEVBQUUsZ0JBQVNDLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUN6QixZQUFJRCxJQUFJLENBQUNFLElBQUwsSUFBYSxrQkFBakIsRUFBcUM7QUFDakNELFVBQUFBLElBQUksQ0FBQyxrQkFBRCxDQUFKO0FBQ0gsU0FGRCxNQUVPO0FBQ0hBLFVBQUFBLElBQUk7QUFDUDtBQUNKO0FBWjBELEtBQXBELENBQWpCLENBSHlCLENBa0J6Qjs7QUFDQSxRQUFJRSxPQUFPLEdBQUdDLENBQUMsQ0FBQ2hCLElBQUksQ0FBQ2lCLGFBQUwsQ0FBbUIsbUJBQW5CLENBQUQsQ0FBZjtBQUNBRixJQUFBQSxPQUFPLENBQUNHLFNBQVIsQ0FBa0I7QUFDakJDLE1BQUFBLFVBQVUsRUFBRSxJQURLO0FBRWpCQyxNQUFBQSxVQUFVLEVBQUU7QUFGSyxLQUFsQixFQXBC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QVQsQ0FBd0IsNEJBQXhCLENBQWY7QUFDQTNFLE1BQUFBLFlBQVksR0FBR3lFLFFBQVEsQ0FBQ0UsY0FBVCxDQUF3Qiw0QkFBeEIsQ0FBZjtBQUVBdEUsTUFBQUEsUUFBUTtBQUNSb0IsTUFBQUEsVUFBVTtBQUNWO0FBbEJLLEdBQVA7QUFvQkEsQ0FsTnNCLEVBQXZCLEMsQ0FvTkE7OztBQUNBbUQsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ3JDL0UsRUFBQUEsZ0JBQWdCLENBQUMwRSxJQUFqQjtBQUNBLENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FwcHMvc3VwcG9ydC1jZW50ZXIvdGlja2V0cy9jcmVhdGUuanM/OWM4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUTW9kYWxOZXdUaWNrZXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHN1Ym1pdEJ1dHRvbjtcclxuXHR2YXIgY2FuY2VsQnV0dG9uO1xyXG5cdHZhciB2YWxpZGF0b3I7XHJcblx0dmFyIGZvcm07XHJcblx0dmFyIG1vZGFsO1xyXG5cdHZhciBtb2RhbEVsO1xyXG5cclxuXHQvLyBJbml0IGZvcm0gaW5wdXRzXHJcblx0dmFyIGluaXRGb3JtID0gZnVuY3Rpb24oKSB7XHJcblx0XHQvLyBUaWNrZXQgYXR0YWNobWVudHNcclxuXHRcdC8vIEZvciBtb3JlIGluZm8gYWJvdXQgRHJvcHpvbmUgcGx1Z2luIHZpc2l0OiAgaHR0cHM6Ly93d3cuZHJvcHpvbmVqcy5jb20vI3VzYWdlXHJcblx0XHR2YXIgbXlEcm9wem9uZSA9IG5ldyBEcm9wem9uZShcIiNrdF9tb2RhbF9jcmVhdGVfdGlja2V0X2F0dGFjaG1lbnRzXCIsIHsgXHJcblx0XHRcdHVybDogXCJodHRwczovL2tlZW50aGVtZXMuY29tL3NjcmlwdHMvdm9pZC5waHBcIiwgLy8gU2V0IHRoZSB1cmwgZm9yIHlvdXIgdXBsb2FkIHNjcmlwdCBsb2NhdGlvblxyXG4gICAgICAgICAgICBwYXJhbU5hbWU6IFwiZmlsZVwiLCAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxyXG4gICAgICAgICAgICBtYXhGaWxlczogMTAsXHJcbiAgICAgICAgICAgIG1heEZpbGVzaXplOiAxMCwgLy8gTUJcclxuICAgICAgICAgICAgYWRkUmVtb3ZlTGlua3M6IHRydWUsXHJcbiAgICAgICAgICAgIGFjY2VwdDogZnVuY3Rpb24oZmlsZSwgZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUubmFtZSA9PSBcImp1c3RpbmJpZWJlci5qcGdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoXCJOYWhhLCB5b3UgZG9uJ3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH0pOyAgXHJcblxyXG5cdFx0Ly8gRHVlIGRhdGUuIEZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgcGx1Z2luIHNpdGU6IGh0dHBzOi8vZmxhdHBpY2tyLmpzLm9yZy9cclxuXHRcdHZhciBkdWVEYXRlID0gJChmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZHVlX2RhdGVcIl0nKSk7XHJcblx0XHRkdWVEYXRlLmZsYXRwaWNrcih7XHJcblx0XHRcdGVuYWJsZVRpbWU6IHRydWUsXHJcblx0XHRcdGRhdGVGb3JtYXQ6IFwiZCwgTSBZLCBIOmlcIixcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFRpY2tldCB1c2VyLiBGb3IgbW9yZSBpbmZvLCBwbGFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgcGx1Z2luIHNpdGU6IGh0dHBzOi8vc2VsZWN0Mi5vcmcvXHJcbiAgICAgICAgJChmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidXNlclwiXScpKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIFJldmFsaWRhdGUgdGhlIGZpZWxkIHdoZW4gYW4gb3B0aW9uIGlzIGNob3NlblxyXG4gICAgICAgICAgICB2YWxpZGF0b3IucmV2YWxpZGF0ZUZpZWxkKCd1c2VyJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0Ly8gVGlja2V0IHN0YXR1cy4gRm9yIG1vcmUgaW5mbywgcGxhc2UgdmlzaXQgdGhlIG9mZmljaWFsIHBsdWdpbiBzaXRlOiBodHRwczovL3NlbGVjdDIub3JnL1xyXG4gICAgICAgICQoZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInN0YXR1c1wiXScpKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIFJldmFsaWRhdGUgdGhlIGZpZWxkIHdoZW4gYW4gb3B0aW9uIGlzIGNob3NlblxyXG4gICAgICAgICAgICB2YWxpZGF0b3IucmV2YWxpZGF0ZUZpZWxkKCdzdGF0dXMnKTtcclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdC8vIEhhbmRsZSBmb3JtIHZhbGlkYXRpb24gYW5kIHN1Ym1pdHRpb25cclxuXHR2YXIgaGFuZGxlRm9ybSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gU3RlcHBlciBjdXN0b20gbmF2aWdhdGlvblxyXG5cclxuXHRcdC8vIEluaXQgZm9ybSB2YWxpZGF0aW9uIHJ1bGVzLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBGb3JtVmFsaWRhdGlvbiBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOmh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vXHJcblx0XHR2YWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcclxuXHRcdFx0Zm9ybSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZpZWxkczoge1xyXG5cdFx0XHRcdFx0c3ViamVjdDoge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JzOiB7XHJcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdUaWNrZXQgc3ViamVjdCBpcyByZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR1c2VyOiB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1RpY2tldCB1c2VyIGlzIHJlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGR1ZV9kYXRlOiB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1RpY2tldCBkdWUgZGF0ZSBpcyByZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjoge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3JzOiB7XHJcblx0XHRcdFx0XHRcdFx0bm90RW1wdHk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdUYXJnZXQgZGVzY3JpcHRpb24gaXMgcmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0J25vdGlmaWNhdGlvbnNbXSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgbm90aWZpY2F0aW9ucyBtZXRob2QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cGx1Z2luczoge1xyXG5cdFx0XHRcdFx0dHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxyXG5cdFx0XHRcdFx0Ym9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcclxuXHRcdFx0XHRcdFx0cm93U2VsZWN0b3I6ICcuZnYtcm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlSW52YWxpZENsYXNzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlVmFsaWRDbGFzczogJydcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIEFjdGlvbiBidXR0b25zXHJcblx0XHRzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHQvLyBWYWxpZGF0ZSBmb3JtIGJlZm9yZSBzdWJtaXRcclxuXHRcdFx0aWYgKHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRlZCEnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcclxuXHRcdFx0XHRcdFx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxyXG5cdFx0XHRcdFx0XHRzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBFbmFibGUgYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0c3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Ly8gU2hvdyBzdWNjZXNzIG1lc3NhZ2UuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xyXG5cdFx0XHRcdFx0XHRcdFN3YWwuZmlyZSh7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIkZvcm0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCFcIixcclxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwic3VjY2Vzc1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0YnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuXHRcdFx0XHRcdFx0XHRcdGN1c3RvbUNsYXNzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kYWwuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL2Zvcm0uc3VibWl0KCk7IC8vIFN1Ym1pdCBmb3JtXHJcblx0XHRcdFx0XHRcdH0sIDIwMDApOyAgIFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly8gU2hvdyBlcnJvciBtZXNzYWdlLlxyXG5cdFx0XHRcdFx0XHRTd2FsLmZpcmUoe1xyXG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwiU29ycnksIGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNvbWUgZXJyb3JzIGRldGVjdGVkLCBwbGVhc2UgdHJ5IGFnYWluLlwiLFxyXG5cdFx0XHRcdFx0XHRcdGljb246IFwiZXJyb3JcIixcclxuXHRcdFx0XHRcdFx0XHRidXR0b25zU3R5bGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuXHRcdFx0XHRcdFx0XHRjdXN0b21DbGFzczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFN3YWwuZmlyZSh7XHJcblx0XHRcdFx0dGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gY2FuY2VsP1wiLFxyXG5cdFx0XHRcdGljb246IFwid2FybmluZ1wiLFxyXG5cdFx0XHRcdHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcblx0XHRcdFx0YnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgY2FuY2VsIGl0IVwiLFxyXG5cdFx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIHJldHVyblwiLFxyXG5cdFx0XHRcdGN1c3RvbUNsYXNzOiB7XHJcblx0XHRcdFx0XHRjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiLFxyXG5cdFx0XHRcdFx0Y2FuY2VsQnV0dG9uOiBcImJ0biBidG4tYWN0aXZlLWxpZ2h0XCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cdFx0XHRcdGlmIChyZXN1bHQudmFsdWUpIHtcclxuXHRcdFx0XHRcdGZvcm0ucmVzZXQoKTsgLy8gUmVzZXQgZm9ybVx0XHJcblx0XHRcdFx0XHRtb2RhbC5oaWRlKCk7IC8vIEhpZGUgbW9kYWxcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnKSB7XHJcblx0XHRcdFx0XHRTd2FsLmZpcmUoe1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiBcIllvdXIgZm9ybSBoYXMgbm90IGJlZW4gY2FuY2VsbGVkIS5cIixcclxuXHRcdFx0XHRcdFx0aWNvbjogXCJlcnJvclwiLFxyXG5cdFx0XHRcdFx0XHRidXR0b25zU3R5bGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRcdGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcblx0XHRcdFx0XHRcdGN1c3RvbUNsYXNzOiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIFB1YmxpYyBmdW5jdGlvbnNcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Ly8gRWxlbWVudHNcclxuXHRcdFx0bW9kYWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9tb2RhbF9uZXdfdGlja2V0Jyk7XHJcblxyXG5cdFx0XHRpZiAoIW1vZGFsRWwpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChtb2RhbEVsKTtcclxuXHJcblx0XHRcdGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfbW9kYWxfbmV3X3RpY2tldF9mb3JtJyk7XHJcblx0XHRcdHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9tb2RhbF9uZXdfdGlja2V0X3N1Ym1pdCcpO1xyXG5cdFx0XHRjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfbW9kYWxfbmV3X3RpY2tldF9jYW5jZWwnKTtcclxuXHJcblx0XHRcdGluaXRGb3JtKCk7XHJcblx0XHRcdGhhbmRsZUZvcm0oKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuXHRLVE1vZGFsTmV3VGlja2V0LmluaXQoKTtcclxufSk7Il0sIm5hbWVzIjpbIktUTW9kYWxOZXdUaWNrZXQiLCJzdWJtaXRCdXR0b24iLCJjYW5jZWxCdXR0b24iLCJ2YWxpZGF0b3IiLCJmb3JtIiwibW9kYWwiLCJtb2RhbEVsIiwiaW5pdEZvcm0iLCJteURyb3B6b25lIiwiRHJvcHpvbmUiLCJ1cmwiLCJwYXJhbU5hbWUiLCJtYXhGaWxlcyIsIm1heEZpbGVzaXplIiwiYWRkUmVtb3ZlTGlua3MiLCJhY2NlcHQiLCJmaWxlIiwiZG9uZSIsIm5hbWUiLCJkdWVEYXRlIiwiJCIsInF1ZXJ5U2VsZWN0b3IiLCJmbGF0cGlja3IiLCJlbmFibGVUaW1lIiwiZGF0ZUZvcm1hdCIsIm9uIiwicmV2YWxpZGF0ZUZpZWxkIiwiaGFuZGxlRm9ybSIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRpb24iLCJmaWVsZHMiLCJzdWJqZWN0IiwidmFsaWRhdG9ycyIsIm5vdEVtcHR5IiwibWVzc2FnZSIsInVzZXIiLCJkdWVfZGF0ZSIsImRlc2NyaXB0aW9uIiwicGx1Z2lucyIsInRyaWdnZXIiLCJUcmlnZ2VyIiwiYm9vdHN0cmFwIiwiQm9vdHN0cmFwNSIsInJvd1NlbGVjdG9yIiwiZWxlSW52YWxpZENsYXNzIiwiZWxlVmFsaWRDbGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZSIsInRoZW4iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImhpZGUiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2FuY2VsQnV0dG9uVGV4dCIsInZhbHVlIiwicmVzZXQiLCJkaXNtaXNzIiwiaW5pdCIsImRvY3VtZW50IiwiTW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/apps/support-center/tickets/create.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/apps/support-center/tickets/create.js"]();
/******/ 	
/******/ })()
;