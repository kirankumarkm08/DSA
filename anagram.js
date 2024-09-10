const input = ["ate", "tea", "tab", "eat", "bat", "pencil"];

function anagram(input) {
  const map = [];

  for (let i of input) {
    const key = i.split("").sort().join();
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(i);
  }
  return Object.values(map);
}

console.log(anagram(input));
