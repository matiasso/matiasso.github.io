import "./index-81d22fb2.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
export {
  cubicOut as c,
  quintOut as q
};
