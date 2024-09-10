for (var i = 0; i < 10; i++) setTimeout(() => console.log(i));

for (let j = 0; j < 10; j++) {
  setTimeout(() => {
    console.log(j);
  });
}
