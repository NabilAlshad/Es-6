const person = "a";
const person2 = "b";
function modifier(strings, ...values) {
  console.log(strings);
  console.log(values);
  const m = strings.reduce((prev, current) => {
    return prev + current + (values.length ? "Mr." + values.shift() : "");
  }, "");
  return m;
}
console.log(modifier`we have ${person} and ${person2}`);
