(function ($) {
  "use strict";

  /*
  datarole.js

  Makes working with data-role attr easier.
  
  1. $.findByRole('foo') to find an element with a specific data-role attribute value: ex. [data-role='foo']

  2. .role() shortcut for attr("data-role") / data("role")
   (also: .role(value) for attr("data-role", value) / data("role",value) )
  
  3. Wraps these traversal methods with a ByRole variant:  
  - add
  - children -> childrenByRole, etc
  - closest
  - filter
  - find
  - has
  - is (also: hasRole)
  - next
  - nextAll
  - nextAllUntil
  - not (notHasRole)?
  - parent
  - parents
  - parentsUntil
  - prev
  - prevAll
  - prevUntil
  - siblings

  NOTE: these methods wrap preexisting methods so there is a performance hit when using them
   but you always cache your selected elements anyway, right? ;-)

  */

  $.findByRole = function (role, $scope) {
    $scope = $scope || $(document);
    return $scope.find("[data-role~='" + role + "']");
  };

  $.fn.hasRole = function (role) {
    return this.is("[data-role~='" + role + "']");
  };

  var methods = ["add", "children", "closest", "filter", "find", "has", "is", "next", "nextAll",
   "nextUntil", "not", "parent", "parents", "parentsUntil", "prev", "prevAll", "prevUntil", "siblings"];

  $.each(methods, function (i, method) {
    $.fn[method + "ByRole"] = function (role) {
      return this[method]("[data-role~='" + role + "']");
    };
  });

  $.fn.role = function(value) {
    if (arguments.length > 0)
      return this.attr("data-role", value);
    else
      return this.attr("data-role");
  }

}(jQuery));
