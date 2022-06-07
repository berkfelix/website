export default (time: number) => {
  const times = [
    { n: " hours", s: 3600000 },
    { n: " minutes", s: 60000 },
    { n: " seconds", s: 1000 },
  ];
  const timef = [Math.floor(time / times[0].s).toString() + times[0].n];

  for (let i = 0; i < 2; i++) {
    timef.push(
      Math.floor((time % times[i].s) / times[i + 1].s).toString() +
        times[i + 1].n
    );
  }

  return timef.filter((a) => !a.startsWith("0")).join(", ");
};
