const { transform, isObject, isEmpty } = require("lodash")

const removeEmpty = (obj, key) =>
  transform(obj, (r, v, k) => {
    if (k === key && isEmpty(v)) return;
    r[k] = isObject(v) ? removeEmpty(v, key) : v;
  });

export default removeEmpty