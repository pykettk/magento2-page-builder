define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Option = exports.Option = function () {
    /**
     * Option constructor
     *
     * @param parent
     * @param code
     * @param icon
     * @param title
     * @param action
     * @param classes
     * @param sort
     * @param template
     */
    function Option(parent, code, icon, title, action, classes, sort, template) {
      _classCallCheck(this, Option);

      this.action = false;
      this.template = null;
      this.parent = parent;
      this.code = code;
      this.icon = icon;
      this.title = title;
      this.action = action;
      this.classes = classes.join(' ');
      this.sort = sort;
      this.template = template;
    }
    /**
     * Return template for option
     *
     * @deprecated
     * @returns {string}
     */


    Option.prototype.getTemplate = function getTemplate() {
      return this.template;
    };

    return Option;
  }();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NvbXBvbmVudC9zdGFnZS9zdHJ1Y3R1cmFsL29wdGlvbnMvb3B0aW9uLnRzIl0sIm5hbWVzIjpbIk9wdGlvbiIsInBhcmVudCIsImNvZGUiLCJpY29uIiwidGl0bGUiLCJhY3Rpb24iLCJjbGFzc2VzIiwic29ydCIsInRlbXBsYXRlIiwiam9pbiIsImdldFRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BUU1BLE0sV0FBQUEsTTtBQVVGOzs7Ozs7Ozs7Ozs7QUFZQSxvQkFDSUMsTUFESixFQUVJQyxJQUZKLEVBR0lDLElBSEosRUFJSUMsS0FKSixFQUtJQyxNQUxKLEVBTUlDLE9BTkosRUFPSUMsSUFQSixFQVFJQyxRQVJKLEVBUXFCO0FBQUE7O0FBekJyQixXQUFBSCxNQUFBLEdBQTJCLEtBQTNCO0FBR0EsV0FBQUcsUUFBQSxHQUFvQixJQUFwQjtBQXdCSSxXQUFLUCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLQyxPQUFMLEdBQWVBLFFBQVFHLElBQVIsQ0FBYSxHQUFiLENBQWY7QUFDQSxXQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIO0FBRUQ7Ozs7Ozs7O3FCQU1BRSxXLDBCQUFXO0FBQ1AsYUFBTyxLQUFLRixRQUFaO0FBQ0gsSyIsImZpbGUiOiJjb21wb25lbnQvc3RhZ2Uvc3RydWN0dXJhbC9vcHRpb25zL29wdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyYWwgfSBmcm9tIFwiLi4vYWJzdHJhY3QuZFwiO1xuaW1wb3J0IHsgT3B0aW9uSW50ZXJmYWNlIH0gZnJvbSBcIi4vb3B0aW9uLmRcIjtcblxuLyoqXG4gKiBPcHRpb24gQ2xhc3NcbiAqXG4gKiBAYXV0aG9yIERhdmUgTWFjYXVsYXkgPGRtYWNhdWxheUBtYWdlbnRvLmNvbT5cbiAqL1xuZXhwb3J0IGNsYXNzIE9wdGlvbiBpbXBsZW1lbnRzIE9wdGlvbkludGVyZmFjZSB7XG4gICAgcGFyZW50OiBTdHJ1Y3R1cmFsO1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBhY3Rpb246IEZ1bmN0aW9uIHwgZmFsc2UgPSBmYWxzZTtcbiAgICBjbGFzc2VzOiBzdHJpbmc7XG4gICAgc29ydDogbnVtYmVyO1xuICAgIHRlbXBsYXRlPzogc3RyaW5nID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbiBjb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEBwYXJhbSBjb2RlXG4gICAgICogQHBhcmFtIGljb25cbiAgICAgKiBAcGFyYW0gdGl0bGVcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICogQHBhcmFtIGNsYXNzZXNcbiAgICAgKiBAcGFyYW0gc29ydFxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwYXJlbnQ6IFN0cnVjdHVyYWwsXG4gICAgICAgIGNvZGU6IHN0cmluZyxcbiAgICAgICAgaWNvbjogc3RyaW5nLFxuICAgICAgICB0aXRsZTogc3RyaW5nLFxuICAgICAgICBhY3Rpb246IEZ1bmN0aW9uIHwgZmFsc2UsXG4gICAgICAgIGNsYXNzZXM6IEFycmF5PHN0cmluZz4sXG4gICAgICAgIHNvcnQ6IG51bWJlcixcbiAgICAgICAgdGVtcGxhdGU/OiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRlbXBsYXRlIGZvciBvcHRpb25cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZTtcbiAgICB9XG59Il19
