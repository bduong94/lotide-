const raisinAlarm = function(cookie) {
  for (const element of cookie) {
    if (element === "🍇") {
      return "Raisin Alert!"
    }
  }
  return "All good!"
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  let res = [];
  for (const cookie of cookies) {
    res.push(raisinAlarm(cookie));
  }
  return res;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));