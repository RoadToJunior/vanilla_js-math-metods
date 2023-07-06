const btn = document.querySelector("button");
const div = document.querySelector("div");

const names = [
  "Jagienka",
  "Dobrawa (Dobrusia)",
  "Daria",
  "Asia",
  "Kira",
  "Marysia",
  "Anastazja",
  "Kasia",
];

const prefixs = [
  "Wydaje mi się",
  "Mam wrażenie",
  "Szczerze powiedziawszy, myślę",
  "Szczerze uważam",
  "Na 100% twierdzę",
  "Jestem pewien",
];

const showMessage = () => {
  const numberName = Math.floor(Math.random() * names.length);
  const numberPrefix = Math.floor(Math.random() * prefixs.length);

  //   div.textContent = `${prefixs[numberPrefix]}, że najlepsze imię to ${names[numberName]}.`;

  //drugi sposób
  div.textContent = `${
    prefixs[Math.floor(Math.random() * prefixs.length)]
  }, że najlepsze imię to ${names[Math.floor(Math.random() * names.length)]}.`;
};

btn.addEventListener("click", showMessage);
