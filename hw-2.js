Array.prototype.includesCI = function (val) {
  return this.some((item) => item.toLowerCase() === val.toLowerCase())  
}