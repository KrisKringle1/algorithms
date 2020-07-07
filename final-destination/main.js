/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const lastIndex = paths.length - 1
  const lastPath = paths[lastIndex]
  const pathLength = lastPath.length - 1
  const destination = lastPath[pathLength]

  const firstIndex = paths[0]

  if (firstIndex[0] === destination) {
    return firstIndex[1]
  }

  return destination
};
