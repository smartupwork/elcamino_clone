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

/***/ "./resources/assets/theme/core/js/custom/documentation/general/fullcalendar/drag-n-drop.js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/theme/core/js/custom/documentation/general/fullcalendar/drag-n-drop.js ***!
  \*************************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralFullCalendarDragDemos = function () {\n  // Private functions\n  var exampleDrag = function exampleDrag() {\n    // Initialize the external events -- for more info please visit the official site: https://fullcalendar.io/demos\n    var containerEl = document.getElementById('kt_docs_fullcalendar_events_list');\n    new FullCalendar.Draggable(containerEl, {\n      itemSelector: '.fc-event',\n      eventData: function eventData(eventEl) {\n        return {\n          title: eventEl.innerText.trim()\n        };\n      }\n    }); // initialize the calendar -- for more info please visit the official site: https://fullcalendar.io/demos\n\n    var calendarEl = document.getElementById('kt_docs_fullcalendar_drag');\n    var calendar = new FullCalendar.Calendar(calendarEl, {\n      headerToolbar: {\n        left: 'prev,next today',\n        center: 'title',\n        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'\n      },\n      editable: true,\n      droppable: true,\n      // this allows things to be dropped onto the calendar\n      drop: function drop(arg) {\n        // is the \"remove after drop\" checkbox checked?\n        if (document.getElementById('drop-remove').checked) {\n          // if so, remove the element from the \"Draggable Events\" list\n          arg.draggedEl.parentNode.removeChild(arg.draggedEl);\n        }\n      }\n    });\n    calendar.render();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleDrag();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralFullCalendarDragDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9mdWxsY2FsZW5kYXIvZHJhZy1uLWRyb3AuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsOEJBQThCLEdBQUcsWUFBWTtBQUM3QztBQUVBLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFDMUI7QUFDQSxRQUFJQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQ0FBeEIsQ0FBbEI7QUFDQSxRQUFJQyxZQUFZLENBQUNDLFNBQWpCLENBQTJCSixXQUEzQixFQUF3QztBQUN0Q0ssTUFBQUEsWUFBWSxFQUFFLFdBRHdCO0FBRXRDQyxNQUFBQSxTQUFTLEVBQUUsbUJBQVNDLE9BQVQsRUFBa0I7QUFDM0IsZUFBTztBQUNMQyxVQUFBQSxLQUFLLEVBQUVELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsSUFBbEI7QUFERixTQUFQO0FBR0Q7QUFOcUMsS0FBeEMsRUFIMEIsQ0FZMUI7O0FBQ0EsUUFBSUMsVUFBVSxHQUFHVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMkJBQXhCLENBQWpCO0FBQ0EsUUFBSVUsUUFBUSxHQUFHLElBQUlULFlBQVksQ0FBQ1UsUUFBakIsQ0FBMEJGLFVBQTFCLEVBQXNDO0FBQ25ERyxNQUFBQSxhQUFhLEVBQUU7QUFDYkMsUUFBQUEsSUFBSSxFQUFFLGlCQURPO0FBRWJDLFFBQUFBLE1BQU0sRUFBRSxPQUZLO0FBR2JDLFFBQUFBLEtBQUssRUFBRTtBQUhNLE9BRG9DO0FBTW5EQyxNQUFBQSxRQUFRLEVBQUUsSUFOeUM7QUFPbkRDLE1BQUFBLFNBQVMsRUFBRSxJQVB3QztBQU9sQztBQUNqQkMsTUFBQUEsSUFBSSxFQUFFLGNBQVNDLEdBQVQsRUFBYztBQUNsQjtBQUNBLFlBQUlwQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNvQixPQUEzQyxFQUFvRDtBQUNsRDtBQUNBRCxVQUFBQSxHQUFHLENBQUNFLFNBQUosQ0FBY0MsVUFBZCxDQUF5QkMsV0FBekIsQ0FBcUNKLEdBQUcsQ0FBQ0UsU0FBekM7QUFDRDtBQUNGO0FBZGtELEtBQXRDLENBQWY7QUFpQkFYLElBQUFBLFFBQVEsQ0FBQ2MsTUFBVDtBQUNILEdBaENEOztBQWtDQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2Q1QixNQUFBQSxXQUFXO0FBQ2Q7QUFKRSxHQUFQO0FBTUgsQ0EzQ29DLEVBQXJDLEMsQ0E2Q0E7OztBQUNBNkIsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDL0IsRUFBQUEsOEJBQThCLENBQUM2QixJQUEvQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9mdWxsY2FsZW5kYXIvZHJhZy1uLWRyb3AuanM/NDY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUR2VuZXJhbEZ1bGxDYWxlbmRhckRyYWdEZW1vcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblxyXG4gICAgdmFyIGV4YW1wbGVEcmFnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGV4dGVybmFsIGV2ZW50cyAtLSBmb3IgbW9yZSBpbmZvIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgc2l0ZTogaHR0cHM6Ly9mdWxsY2FsZW5kYXIuaW8vZGVtb3NcclxuICAgICAgICB2YXIgY29udGFpbmVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19mdWxsY2FsZW5kYXJfZXZlbnRzX2xpc3QnKTtcclxuICAgICAgICBuZXcgRnVsbENhbGVuZGFyLkRyYWdnYWJsZShjb250YWluZXJFbCwge1xyXG4gICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmZjLWV2ZW50JyxcclxuICAgICAgICAgIGV2ZW50RGF0YTogZnVuY3Rpb24oZXZlbnRFbCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBldmVudEVsLmlubmVyVGV4dC50cmltKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgY2FsZW5kYXIgLS0gZm9yIG1vcmUgaW5mbyBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIHNpdGU6IGh0dHBzOi8vZnVsbGNhbGVuZGFyLmlvL2RlbW9zXHJcbiAgICAgICAgdmFyIGNhbGVuZGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19mdWxsY2FsZW5kYXJfZHJhZycpO1xyXG4gICAgICAgIHZhciBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xyXG4gICAgICAgICAgaGVhZGVyVG9vbGJhcjoge1xyXG4gICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5JyxcclxuICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgICByaWdodDogJ2RheUdyaWRNb250aCx0aW1lR3JpZFdlZWssdGltZUdyaWREYXksbGlzdFdlZWsnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICBkcm9wcGFibGU6IHRydWUsIC8vIHRoaXMgYWxsb3dzIHRoaW5ncyB0byBiZSBkcm9wcGVkIG9udG8gdGhlIGNhbGVuZGFyXHJcbiAgICAgICAgICBkcm9wOiBmdW5jdGlvbihhcmcpIHtcclxuICAgICAgICAgICAgLy8gaXMgdGhlIFwicmVtb3ZlIGFmdGVyIGRyb3BcIiBjaGVja2JveCBjaGVja2VkP1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3AtcmVtb3ZlJykuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgIC8vIGlmIHNvLCByZW1vdmUgdGhlIGVsZW1lbnQgZnJvbSB0aGUgXCJEcmFnZ2FibGUgRXZlbnRzXCIgbGlzdFxyXG4gICAgICAgICAgICAgIGFyZy5kcmFnZ2VkRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhcmcuZHJhZ2dlZEVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWxlbmRhci5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVEcmFnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEdlbmVyYWxGdWxsQ2FsZW5kYXJEcmFnRGVtb3MuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUR2VuZXJhbEZ1bGxDYWxlbmRhckRyYWdEZW1vcyIsImV4YW1wbGVEcmFnIiwiY29udGFpbmVyRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRnVsbENhbGVuZGFyIiwiRHJhZ2dhYmxlIiwiaXRlbVNlbGVjdG9yIiwiZXZlbnREYXRhIiwiZXZlbnRFbCIsInRpdGxlIiwiaW5uZXJUZXh0IiwidHJpbSIsImNhbGVuZGFyRWwiLCJjYWxlbmRhciIsIkNhbGVuZGFyIiwiaGVhZGVyVG9vbGJhciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImVkaXRhYmxlIiwiZHJvcHBhYmxlIiwiZHJvcCIsImFyZyIsImNoZWNrZWQiLCJkcmFnZ2VkRWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXIiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/theme/core/js/custom/documentation/general/fullcalendar/drag-n-drop.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/theme/core/js/custom/documentation/general/fullcalendar/drag-n-drop.js"]();
/******/ 	
/******/ })()
;