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

/***/ "./resources/assets/theme/core/js/custom/apps/user-management/roles/view/view.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/apps/user-management/roles/view/view.js ***!
  \***************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTUsersViewRole = function () {\n  // Shared variables\n  var datatable;\n  var table; // Init add schedule modal\n\n  var initViewRole = function initViewRole() {\n    // Set date data order\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[3].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 5th column in table\n\n      dateRow[3].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 5,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 0\n      }, // Disable ordering on column 0 (checkbox)\n      {\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 4 (actions)\n      ]\n    });\n  }; // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n\n\n  var handleSearchDatatable = function handleSearchDatatable() {\n    var filterSearch = document.querySelector('[data-kt-roles-table-filter=\"search\"]');\n    filterSearch.addEventListener('keyup', function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  }; // Delete user\n\n\n  var handleDeleteRows = function handleDeleteRows() {\n    // Select all delete buttons\n    var deleteButtons = table.querySelectorAll('[data-kt-roles-table-filter=\"delete_row\"]');\n    deleteButtons.forEach(function (d) {\n      // Delete button on click\n      d.addEventListener('click', function (e) {\n        e.preventDefault(); // Select parent row\n\n        var parent = e.target.closest('tr'); // Get customer name\n\n        var userName = parent.querySelectorAll('td')[1].innerText; // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n\n        Swal.fire({\n          text: \"Are you sure you want to delete \" + userName + \"?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, delete!\",\n          cancelButtonText: \"No, cancel\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-danger\",\n            cancelButton: \"btn fw-bold btn-active-light-primary\"\n          }\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              text: \"You have deleted \" + userName + \"!.\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            }).then(function () {\n              // Remove current row\n              datatable.row($(parent)).remove().draw();\n            });\n          } else if (result.dismiss === 'cancel') {\n            Swal.fire({\n              text: customerName + \" was not deleted.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            });\n          }\n        });\n      });\n    });\n  }; // Init toggle toolbar\n\n\n  var initToggleToolbar = function initToggleToolbar() {\n    // Toggle selected action toolbar\n    // Select all checkboxes\n    var checkboxes = table.querySelectorAll('[type=\"checkbox\"]'); // Select elements\n\n    var deleteSelected = document.querySelector('[data-kt-view-roles-table-select=\"delete_selected\"]'); // Toggle delete selected toolbar\n\n    checkboxes.forEach(function (c) {\n      // Checkbox on click event\n      c.addEventListener('click', function () {\n        setTimeout(function () {\n          toggleToolbars();\n        }, 50);\n      });\n    }); // Deleted selected rows\n\n    deleteSelected.addEventListener('click', function () {\n      // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n      Swal.fire({\n        text: \"Are you sure you want to delete selected customers?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, delete!\",\n        cancelButtonText: \"No, cancel\",\n        customClass: {\n          confirmButton: \"btn fw-bold btn-danger\",\n          cancelButton: \"btn fw-bold btn-active-light-primary\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            text: \"You have deleted all selected customers!.\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          }).then(function () {\n            // Remove all selected customers\n            checkboxes.forEach(function (c) {\n              if (c.checked) {\n                datatable.row($(c.closest('tbody tr'))).remove().draw();\n              }\n            }); // Remove header checked box\n\n            var headerCheckbox = table.querySelectorAll('[type=\"checkbox\"]')[0];\n            headerCheckbox.checked = false;\n          }).then(function () {\n            toggleToolbars(); // Detect checked checkboxes\n\n            initToggleToolbar(); // Re-init toolbar to recalculate checkboxes\n          });\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Selected customers was not deleted.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Toggle toolbars\n\n\n  var toggleToolbars = function toggleToolbars() {\n    // Define variables\n    var toolbarBase = document.querySelector('[data-kt-view-roles-table-toolbar=\"base\"]');\n    var toolbarSelected = document.querySelector('[data-kt-view-roles-table-toolbar=\"selected\"]');\n    var selectedCount = document.querySelector('[data-kt-view-roles-table-select=\"selected_count\"]'); // Select refreshed checkbox DOM elements \n\n    var allCheckboxes = table.querySelectorAll('tbody [type=\"checkbox\"]'); // Detect checkboxes state & count\n\n    var checkedState = false;\n    var count = 0; // Count checked boxes\n\n    allCheckboxes.forEach(function (c) {\n      if (c.checked) {\n        checkedState = true;\n        count++;\n      }\n    }); // Toggle toolbars\n\n    if (checkedState) {\n      selectedCount.innerHTML = count;\n      toolbarBase.classList.add('d-none');\n      toolbarSelected.classList.remove('d-none');\n    } else {\n      toolbarBase.classList.remove('d-none');\n      toolbarSelected.classList.add('d-none');\n    }\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      table = document.querySelector('#kt_roles_view_table');\n\n      if (!table) {\n        return;\n      }\n\n      initViewRole();\n      handleSearchDatatable();\n      handleDeleteRows();\n      initToggleToolbar();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersViewRole.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FwcHMvdXNlci1tYW5hZ2VtZW50L3JvbGVzL3ZpZXcvdmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxlQUFlLEdBQUcsWUFBWTtBQUM5QjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxLQUFKLENBSDhCLENBSzlCOztBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDckI7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUIsVUFBdkIsQ0FBbEI7QUFFQUQsSUFBQUEsU0FBUyxDQUFDRSxPQUFWLENBQWtCLFVBQUFDLEdBQUcsRUFBSTtBQUNyQixVQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0YsZ0JBQUosQ0FBcUIsSUFBckIsQ0FBaEI7QUFDQSxVQUFNSSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxTQUFaLEVBQXVCLGlCQUF2QixDQUFOLENBQWdEQyxNQUFoRCxFQUFqQixDQUZxQixDQUVzRDs7QUFDM0VKLE1BQUFBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssWUFBWCxDQUF3QixZQUF4QixFQUFzQ0osUUFBdEM7QUFDSCxLQUpELEVBSnFCLENBVXBCOztBQUNBUixJQUFBQSxTQUFTLEdBQUdhLENBQUMsQ0FBQ1osS0FBRCxDQUFELENBQVNhLFNBQVQsQ0FBbUI7QUFDNUIsY0FBUSxLQURvQjtBQUU1QixlQUFTLEVBRm1CO0FBRzVCLG9CQUFjLENBSGM7QUFJNUIsc0JBQWdCLEtBSlk7QUFLNUIsb0JBQWMsQ0FDVjtBQUFFQyxRQUFBQSxTQUFTLEVBQUUsS0FBYjtBQUFvQkMsUUFBQUEsT0FBTyxFQUFFO0FBQTdCLE9BRFUsRUFDd0I7QUFDbEM7QUFBRUQsUUFBQUEsU0FBUyxFQUFFLEtBQWI7QUFBb0JDLFFBQUFBLE9BQU8sRUFBRTtBQUE3QixPQUZVLENBRXdC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OztBQWdDQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RsRSxNQUFBQSxLQUFLLEdBQUdrQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQVI7O0FBRUEsVUFBSSxDQUFDbkIsS0FBTCxFQUFZO0FBQ1I7QUFDSDs7QUFFREMsTUFBQUEsWUFBWTtBQUNaZSxNQUFBQSxxQkFBcUI7QUFDckJVLE1BQUFBLGdCQUFnQjtBQUNoQndCLE1BQUFBLGlCQUFpQjtBQUNwQjtBQWJFLEdBQVA7QUFlSCxDQXhOcUIsRUFBdEIsQyxDQTBOQTs7O0FBQ0FpQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbEN0RSxFQUFBQSxlQUFlLENBQUNvRSxJQUFoQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2FwcHMvdXNlci1tYW5hZ2VtZW50L3JvbGVzL3ZpZXcvdmlldy5qcz9iNzUyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RVc2Vyc1ZpZXdSb2xlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU2hhcmVkIHZhcmlhYmxlc1xyXG4gICAgdmFyIGRhdGF0YWJsZTtcclxuICAgIHZhciB0YWJsZTtcclxuXHJcbiAgICAvLyBJbml0IGFkZCBzY2hlZHVsZSBtb2RhbFxyXG4gICAgdmFyIGluaXRWaWV3Um9sZSA9ICgpID0+IHtcclxuICAgICAgICAvLyBTZXQgZGF0ZSBkYXRhIG9yZGVyXHJcbiAgICAgICAgY29uc3QgdGFibGVSb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKTtcclxuXHJcbiAgICAgICAgdGFibGVSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVJvdyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xyXG4gICAgICAgICAgICBjb25zdCByZWFsRGF0ZSA9IG1vbWVudChkYXRlUm93WzNdLmlubmVySFRNTCwgXCJERCBNTU0gWVlZWSwgTFRcIikuZm9ybWF0KCk7IC8vIHNlbGVjdCBkYXRlIGZyb20gNXRoIGNvbHVtbiBpbiB0YWJsZVxyXG4gICAgICAgICAgICBkYXRlUm93WzNdLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcicsIHJlYWxEYXRlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIC8vIEluaXQgZGF0YXRhYmxlIC0tLSBtb3JlIGluZm8gb24gZGF0YXRhYmxlczogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9tYW51YWwvXHJcbiAgICAgICAgIGRhdGF0YWJsZSA9ICQodGFibGUpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIFwiaW5mb1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgJ29yZGVyJzogW10sXHJcbiAgICAgICAgICAgIFwicGFnZUxlbmd0aFwiOiA1LFxyXG4gICAgICAgICAgICBcImxlbmd0aENoYW5nZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgJ2NvbHVtbkRlZnMnOiBbXHJcbiAgICAgICAgICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHRhcmdldHM6IDAgfSwgLy8gRGlzYWJsZSBvcmRlcmluZyBvbiBjb2x1bW4gMCAoY2hlY2tib3gpXHJcbiAgICAgICAgICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHRhcmdldHM6IDQgfSwgLy8gRGlzYWJsZSBvcmRlcmluZyBvbiBjb2x1bW4gNCAoYWN0aW9ucylcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VhcmNoIERhdGF0YWJsZSAtLS0gb2ZmaWNpYWwgZG9jcyByZWZlcmVuY2U6IGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvcmVmZXJlbmNlL2FwaS9zZWFyY2goKVxyXG4gICAgdmFyIGhhbmRsZVNlYXJjaERhdGF0YWJsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1yb2xlcy10YWJsZS1maWx0ZXI9XCJzZWFyY2hcIl0nKTtcclxuICAgICAgICBmaWx0ZXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBkYXRhdGFibGUuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKS5kcmF3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVsZXRlIHVzZXJcclxuICAgIHZhciBoYW5kbGVEZWxldGVSb3dzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFNlbGVjdCBhbGwgZGVsZXRlIGJ1dHRvbnNcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25zID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEta3Qtcm9sZXMtdGFibGUtZmlsdGVyPVwiZGVsZXRlX3Jvd1wiXScpO1xyXG5cclxuICAgICAgICBkZWxldGVCdXR0b25zLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIERlbGV0ZSBidXR0b24gb24gY2xpY2tcclxuICAgICAgICAgICAgZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2VsZWN0IHBhcmVudCByb3dcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1c3RvbWVyIG5hbWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylbMV0uaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN3ZWV0QWxlcnQyIHBvcCB1cCAtLS0gb2ZmaWNpYWwgZG9jcyByZWZlcmVuY2U6IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xyXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIgKyB1c2VyTmFtZSArIFwiP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIGNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWRhbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWFjdGl2ZS1saWdodC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIGRlbGV0ZWQgXCIgKyB1c2VyTmFtZSArIFwiIS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXJyZW50IHJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXRhYmxlLnJvdygkKHBhcmVudCkpLnJlbW92ZSgpLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGN1c3RvbWVyTmFtZSArIFwiIHdhcyBub3QgZGVsZXRlZC5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdCB0b2dnbGUgdG9vbGJhclxyXG4gICAgdmFyIGluaXRUb2dnbGVUb29sYmFyID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFRvZ2dsZSBzZWxlY3RlZCBhY3Rpb24gdG9vbGJhclxyXG4gICAgICAgIC8vIFNlbGVjdCBhbGwgY2hlY2tib3hlc1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCdbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcblxyXG4gICAgICAgIC8vIFNlbGVjdCBlbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtdmlldy1yb2xlcy10YWJsZS1zZWxlY3Q9XCJkZWxldGVfc2VsZWN0ZWRcIl0nKTtcclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIGRlbGV0ZSBzZWxlY3RlZCB0b29sYmFyXHJcbiAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVja2JveCBvbiBjbGljayBldmVudFxyXG4gICAgICAgICAgICBjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVG9vbGJhcnMoKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIERlbGV0ZWQgc2VsZWN0ZWQgcm93c1xyXG4gICAgICAgIGRlbGV0ZVNlbGVjdGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBTd2VldEFsZXJ0MiBwb3AgdXAgLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBzZWxlY3RlZCBjdXN0b21lcnM/XCIsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIGNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1kYW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWFjdGl2ZS1saWdodC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3UgaGF2ZSBkZWxldGVkIGFsbCBzZWxlY3RlZCBjdXN0b21lcnMhLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgc2VsZWN0ZWQgY3VzdG9tZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUucm93KCQoYy5jbG9zZXN0KCd0Ym9keSB0cicpKSkucmVtb3ZlKCkuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBoZWFkZXIgY2hlY2tlZCBib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyQ2hlY2tib3ggPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCdbdHlwZT1cImNoZWNrYm94XCJdJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRvb2xiYXJzKCk7IC8vIERldGVjdCBjaGVja2VkIGNoZWNrYm94ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFRvZ2dsZVRvb2xiYXIoKTsgLy8gUmUtaW5pdCB0b29sYmFyIHRvIHJlY2FsY3VsYXRlIGNoZWNrYm94ZXNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTZWxlY3RlZCBjdXN0b21lcnMgd2FzIG5vdCBkZWxldGVkLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2dnbGUgdG9vbGJhcnNcclxuICAgIGNvbnN0IHRvZ2dsZVRvb2xiYXJzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIERlZmluZSB2YXJpYWJsZXNcclxuICAgICAgICBjb25zdCB0b29sYmFyQmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXZpZXctcm9sZXMtdGFibGUtdG9vbGJhcj1cImJhc2VcIl0nKTtcclxuICAgICAgICBjb25zdCB0b29sYmFyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC12aWV3LXJvbGVzLXRhYmxlLXRvb2xiYXI9XCJzZWxlY3RlZFwiXScpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC12aWV3LXJvbGVzLXRhYmxlLXNlbGVjdD1cInNlbGVjdGVkX2NvdW50XCJdJyk7XHJcblxyXG4gICAgICAgIC8vIFNlbGVjdCByZWZyZXNoZWQgY2hlY2tib3ggRE9NIGVsZW1lbnRzIFxyXG4gICAgICAgIGNvbnN0IGFsbENoZWNrYm94ZXMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSBbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcblxyXG4gICAgICAgIC8vIERldGVjdCBjaGVja2JveGVzIHN0YXRlICYgY291bnRcclxuICAgICAgICBsZXQgY2hlY2tlZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgLy8gQ291bnQgY2hlY2tlZCBib3hlc1xyXG4gICAgICAgIGFsbENoZWNrYm94ZXMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgaWYgKGMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIHRvb2xiYXJzXHJcbiAgICAgICAgaWYgKGNoZWNrZWRTdGF0ZSkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENvdW50LmlubmVySFRNTCA9IGNvdW50O1xyXG4gICAgICAgICAgICB0b29sYmFyQmFzZS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgdG9vbGJhclNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvb2xiYXJCYXNlLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB0b29sYmFyU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIGZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3Rfcm9sZXNfdmlld190YWJsZScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCF0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbml0Vmlld1JvbGUoKTtcclxuICAgICAgICAgICAgaGFuZGxlU2VhcmNoRGF0YXRhYmxlKCk7XHJcbiAgICAgICAgICAgIGhhbmRsZURlbGV0ZVJvd3MoKTtcclxuICAgICAgICAgICAgaW5pdFRvZ2dsZVRvb2xiYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuICAgIEtUVXNlcnNWaWV3Um9sZS5pbml0KCk7XHJcbn0pOyJdLCJuYW1lcyI6WyJLVFVzZXJzVmlld1JvbGUiLCJkYXRhdGFibGUiLCJ0YWJsZSIsImluaXRWaWV3Um9sZSIsInRhYmxlUm93cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicm93IiwiZGF0ZVJvdyIsInJlYWxEYXRlIiwibW9tZW50IiwiaW5uZXJIVE1MIiwiZm9ybWF0Iiwic2V0QXR0cmlidXRlIiwiJCIsIkRhdGFUYWJsZSIsIm9yZGVyYWJsZSIsInRhcmdldHMiLCJoYW5kbGVTZWFyY2hEYXRhdGFibGUiLCJmaWx0ZXJTZWFyY2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwiZHJhdyIsImhhbmRsZURlbGV0ZVJvd3MiLCJkZWxldGVCdXR0b25zIiwiZCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiY2xvc2VzdCIsInVzZXJOYW1lIiwiaW5uZXJUZXh0IiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInRoZW4iLCJyZXN1bHQiLCJyZW1vdmUiLCJkaXNtaXNzIiwiY3VzdG9tZXJOYW1lIiwiaW5pdFRvZ2dsZVRvb2xiYXIiLCJjaGVja2JveGVzIiwiZGVsZXRlU2VsZWN0ZWQiLCJjIiwic2V0VGltZW91dCIsInRvZ2dsZVRvb2xiYXJzIiwiY2hlY2tlZCIsImhlYWRlckNoZWNrYm94IiwidG9vbGJhckJhc2UiLCJ0b29sYmFyU2VsZWN0ZWQiLCJzZWxlY3RlZENvdW50IiwiYWxsQ2hlY2tib3hlcyIsImNoZWNrZWRTdGF0ZSIsImNvdW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/apps/user-management/roles/view/view.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/apps/user-management/roles/view/view.js"]();
/******/ 	
/******/ })()
;