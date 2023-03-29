const Loopy = function (i) {
  if (i % 3 === 0 && i % 4 === 0) {
    return "LoopyLighthouse";
  } else if (i % 3 === 0) {
    return "Loopy";
  } else if (i % 4 === 0) {
    return "Lighthouse";
  } else {
    return i;
  }
};

for (let i = 100; i <= 200; i++) {
  console.log(Loopy(i));
}
