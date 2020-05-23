/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {

  const newAddress = address.split('.').join('[.]');
  return newAddress;

};
