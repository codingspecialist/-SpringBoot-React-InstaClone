webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/userSlice.js":
/*!*******************************!*\
  !*** ./reducers/userSlice.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar _user = __webpack_require__(/*! ../actions/user */ \"./actions/user.js\");\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! next/router */ \"./node_modules/next/router.js\"));\n\nvar initialState = {\n  isLoading: false,\n  loginError: null,\n  joinError: null,\n  principal: null\n};\nvar userSlice = (0, _toolkit.createSlice)({\n  name: \"user\",\n  initialState: initialState,\n  reducers: {\n    logOut: function logOut(state, action) {\n      state.principal = null;\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    return builder // changeProfileImage request\n    .addCase(_user.changeProfileImage.pending, function (state, action) {\n      state.isLoading = true;\n    }) // changeProfileImage success\n    .addCase(_user.changeProfileImage.fulfilled, function (state, action) {\n      state.isLoading = false;\n      console.log(action.payload);\n      state.principal.profileImageUrl = action.payload;\n    }) // changeProfileImage fail -> 로그인 화면으로\n    .addCase(_user.changeProfileImage.rejected, function (state, action) {\n      state.isLoading = false;\n    }) // load request\n    .addCase(_user.load.pending, function (state, action) {\n      state.isLoading = true;\n    }) // load success\n    .addCase(_user.load.fulfilled, function (state, action) {\n      state.isLoading = false;\n      state.principal = action.payload;\n    }) // load fail -> 로그인 화면으로\n    .addCase(_user.load.rejected, function (state, action) {\n      state.isLoading = false;\n      alert(\"로그인 후 이용가능합니다.\");\n\n      _router[\"default\"].push(\"/login\");\n    }) // login request\n    .addCase(_user.login.pending, function (state, action) {\n      state.isLoading = true;\n      state.loginError = null;\n    }) // login success\n    .addCase(_user.login.fulfilled, function (state, action) {\n      state.isLoading = false;\n      state.loginError = null;\n\n      _router[\"default\"].push(\"/\");\n    }) // login fail\n    .addCase(_user.login.rejected, function (state, action) {\n      state.isLoading = false;\n      state.loginError = \"로그인 실패\";\n    }) // join request\n    .addCase(_user.join.pending, function (state, action) {\n      state.isLoading = true;\n    }) // join success\n    .addCase(_user.join.fulfilled, function (state, action) {\n      state.isLoading = false;\n\n      _router[\"default\"].push(\"/login\");\n    }) // join fail\n    .addCase(_user.join.rejected, function (state, action) {\n      state.isLoading = false;\n      state.joinError = action.payload;\n    });\n  }\n});\nmodule.exports = userSlice;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ \"./node_modules/next/dist/compiled/webpack/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlclNsaWNlLmpzP2I5MzciXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2FkaW5nIiwibG9naW5FcnJvciIsImpvaW5FcnJvciIsInByaW5jaXBhbCIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ091dCIsInN0YXRlIiwiYWN0aW9uIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiY2hhbmdlUHJvZmlsZUltYWdlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwicHJvZmlsZUltYWdlVXJsIiwicmVqZWN0ZWQiLCJsb2FkIiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoIiwibG9naW4iLCJqb2luIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsV0FBUyxFQUFFLEtBRFE7QUFFbkJDLFlBQVUsRUFBRSxJQUZPO0FBR25CQyxXQUFTLEVBQUUsSUFIUTtBQUtuQkMsV0FBUyxFQUFFO0FBTFEsQ0FBckI7QUFPQSxJQUFNQyxTQUFTLEdBQUcsMEJBQVk7QUFDNUJDLE1BQUksRUFBRSxNQURzQjtBQUU1Qk4sY0FBWSxFQUFaQSxZQUY0QjtBQUc1Qk8sVUFBUSxFQUFFO0FBQ1JDLFVBRFEsa0JBQ0RDLEtBREMsRUFDTUMsTUFETixFQUNjO0FBQ3BCRCxXQUFLLENBQUNMLFNBQU4sR0FBa0IsSUFBbEI7QUFDRDtBQUhPLEdBSGtCO0FBUTVCTyxlQUFhLEVBQUUsdUJBQUNDLE9BQUQ7QUFBQSxXQUNiQSxPQUFPLENBQ0w7QUFESyxLQUVKQyxPQUZILENBRVdDLHlCQUFtQkMsT0FGOUIsRUFFdUMsVUFBQ04sS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3RERCxXQUFLLENBQUNSLFNBQU4sR0FBa0IsSUFBbEI7QUFDRCxLQUpILEVBS0U7QUFMRixLQU1HWSxPQU5ILENBTVdDLHlCQUFtQkUsU0FOOUIsRUFNeUMsVUFBQ1AsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3hERCxXQUFLLENBQUNSLFNBQU4sR0FBa0IsS0FBbEI7QUFDQWdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFNLENBQUNTLE9BQW5CO0FBQ0FWLFdBQUssQ0FBQ0wsU0FBTixDQUFnQmdCLGVBQWhCLEdBQWtDVixNQUFNLENBQUNTLE9BQXpDO0FBQ0QsS0FWSCxFQVdFO0FBWEYsS0FZR04sT0FaSCxDQVlXQyx5QkFBbUJPLFFBWjlCLEVBWXdDLFVBQUNaLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN2REQsV0FBSyxDQUFDUixTQUFOLEdBQWtCLEtBQWxCO0FBQ0QsS0FkSCxFQWVFO0FBZkYsS0FnQkdZLE9BaEJILENBZ0JXUyxXQUFLUCxPQWhCaEIsRUFnQnlCLFVBQUNOLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN4Q0QsV0FBSyxDQUFDUixTQUFOLEdBQWtCLElBQWxCO0FBQ0QsS0FsQkgsRUFtQkU7QUFuQkYsS0FvQkdZLE9BcEJILENBb0JXUyxXQUFLTixTQXBCaEIsRUFvQjJCLFVBQUNQLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMxQ0QsV0FBSyxDQUFDUixTQUFOLEdBQWtCLEtBQWxCO0FBQ0FRLFdBQUssQ0FBQ0wsU0FBTixHQUFrQk0sTUFBTSxDQUFDUyxPQUF6QjtBQUNELEtBdkJILEVBd0JFO0FBeEJGLEtBeUJHTixPQXpCSCxDQXlCV1MsV0FBS0QsUUF6QmhCLEVBeUIwQixVQUFDWixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDekNELFdBQUssQ0FBQ1IsU0FBTixHQUFrQixLQUFsQjtBQUNBc0IsV0FBSyxDQUFDLGdCQUFELENBQUw7O0FBQ0FDLHlCQUFPQyxJQUFQLENBQVksUUFBWjtBQUNELEtBN0JILEVBOEJFO0FBOUJGLEtBK0JHWixPQS9CSCxDQStCV2EsWUFBTVgsT0EvQmpCLEVBK0IwQixVQUFDTixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDekNELFdBQUssQ0FBQ1IsU0FBTixHQUFrQixJQUFsQjtBQUNBUSxXQUFLLENBQUNQLFVBQU4sR0FBbUIsSUFBbkI7QUFDRCxLQWxDSCxFQW1DRTtBQW5DRixLQW9DR1csT0FwQ0gsQ0FvQ1dhLFlBQU1WLFNBcENqQixFQW9DNEIsVUFBQ1AsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzNDRCxXQUFLLENBQUNSLFNBQU4sR0FBa0IsS0FBbEI7QUFDQVEsV0FBSyxDQUFDUCxVQUFOLEdBQW1CLElBQW5COztBQUNBc0IseUJBQU9DLElBQVAsQ0FBWSxHQUFaO0FBQ0QsS0F4Q0gsRUF5Q0U7QUF6Q0YsS0EwQ0daLE9BMUNILENBMENXYSxZQUFNTCxRQTFDakIsRUEwQzJCLFVBQUNaLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMxQ0QsV0FBSyxDQUFDUixTQUFOLEdBQWtCLEtBQWxCO0FBQ0FRLFdBQUssQ0FBQ1AsVUFBTixHQUFtQixRQUFuQjtBQUNELEtBN0NILEVBOENFO0FBOUNGLEtBK0NHVyxPQS9DSCxDQStDV2MsV0FBS1osT0EvQ2hCLEVBK0N5QixVQUFDTixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDeENELFdBQUssQ0FBQ1IsU0FBTixHQUFrQixJQUFsQjtBQUNELEtBakRILEVBa0RFO0FBbERGLEtBbURHWSxPQW5ESCxDQW1EV2MsV0FBS1gsU0FuRGhCLEVBbUQyQixVQUFDUCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDMUNELFdBQUssQ0FBQ1IsU0FBTixHQUFrQixLQUFsQjs7QUFDQXVCLHlCQUFPQyxJQUFQLENBQVksUUFBWjtBQUNELEtBdERILEVBdURFO0FBdkRGLEtBd0RHWixPQXhESCxDQXdEV2MsV0FBS04sUUF4RGhCLEVBd0QwQixVQUFDWixLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDekNELFdBQUssQ0FBQ1IsU0FBTixHQUFrQixLQUFsQjtBQUNBUSxXQUFLLENBQUNOLFNBQU4sR0FBa0JPLE1BQU0sQ0FBQ1MsT0FBekI7QUFDRCxLQTNESCxDQURhO0FBQUE7QUFSYSxDQUFaLENBQWxCO0FBdUVBUyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4QixTQUFqQiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXJTbGljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IGpvaW4sIGxvZ2luLCBsb2FkLCBjaGFuZ2VQcm9maWxlSW1hZ2UgfSBmcm9tIFwiLi4vYWN0aW9ucy91c2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGxvZ2luRXJyb3I6IG51bGwsXG4gIGpvaW5FcnJvcjogbnVsbCxcblxuICBwcmluY2lwYWw6IG51bGwsXG59O1xuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInVzZXJcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGxvZ091dChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5wcmluY2lwYWwgPSBudWxsO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PlxuICAgIGJ1aWxkZXJcbiAgICAgIC8vIGNoYW5nZVByb2ZpbGVJbWFnZSByZXF1ZXN0XG4gICAgICAuYWRkQ2FzZShjaGFuZ2VQcm9maWxlSW1hZ2UucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgICAvLyBjaGFuZ2VQcm9maWxlSW1hZ2Ugc3VjY2Vzc1xuICAgICAgLmFkZENhc2UoY2hhbmdlUHJvZmlsZUltYWdlLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgc3RhdGUucHJpbmNpcGFsLnByb2ZpbGVJbWFnZVVybCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSlcbiAgICAgIC8vIGNoYW5nZVByb2ZpbGVJbWFnZSBmYWlsIC0+IOuhnOq3uOyduCDtmZTrqbTsnLzroZxcbiAgICAgIC5hZGRDYXNlKGNoYW5nZVByb2ZpbGVJbWFnZS5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgLy8gbG9hZCByZXF1ZXN0XG4gICAgICAuYWRkQ2FzZShsb2FkLnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLy8gbG9hZCBzdWNjZXNzXG4gICAgICAuYWRkQ2FzZShsb2FkLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnByaW5jaXBhbCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSlcbiAgICAgIC8vIGxvYWQgZmFpbCAtPiDroZzqt7jsnbgg7ZmU66m07Jy866GcXG4gICAgICAuYWRkQ2FzZShsb2FkLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgYWxlcnQoXCLroZzqt7jsnbgg7ZuEIOydtOyaqeqwgOuKpe2VqeuLiOuLpC5cIik7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfSlcbiAgICAgIC8vIGxvZ2luIHJlcXVlc3RcbiAgICAgIC5hZGRDYXNlKGxvZ2luLnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHN0YXRlLmxvZ2luRXJyb3IgPSBudWxsO1xuICAgICAgfSlcbiAgICAgIC8vIGxvZ2luIHN1Y2Nlc3NcbiAgICAgIC5hZGRDYXNlKGxvZ2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxvZ2luRXJyb3IgPSBudWxsO1xuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICB9KVxuICAgICAgLy8gbG9naW4gZmFpbFxuICAgICAgLmFkZENhc2UobG9naW4ucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5sb2dpbkVycm9yID0gXCLroZzqt7jsnbgg7Iuk7YyoXCI7XG4gICAgICB9KVxuICAgICAgLy8gam9pbiByZXF1ZXN0XG4gICAgICAuYWRkQ2FzZShqb2luLnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLy8gam9pbiBzdWNjZXNzXG4gICAgICAuYWRkQ2FzZShqb2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfSlcbiAgICAgIC8vIGpvaW4gZmFpbFxuICAgICAgLmFkZENhc2Uoam9pbi5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmpvaW5FcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgfSksXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyU2xpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/userSlice.js\n");

/***/ })

})