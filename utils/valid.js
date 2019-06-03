var valid = {
  checkParams: function(refobj, evalueobj) {
    if (Object.keys(refobj).sort().toString() == Object.keys(evalueobj).sort().toString()){
      return true;
    }
    return false;
  },
  checkPassword: function (password) {
    var exp = /^\w{1,}\w{1,}/g;
    if (password.match(exp) == null) {
      return false;
    }
    return true;
  },
  checkEmail: function(email) {
    var exp = /^\w{1,}@\w{1,}[.]\w{2,3}$/g;
    if (email.match(exp) == null) {
      return false;
    }
    return true;
  }
};
module.exports = valid;
