// const btn = document.querySelector("button");
// const div = document.querySelector("div");

// const names = [
//   "Jagienka",
//   "Dobrawa (Dobrusia)",
//   "Daria",
//   "Asia",
//   "Kira",
//   "Marysia",
//   "Anastazja",
//   "Kasia",
// ];

// const prefixs = [
//   "Wydaje mi się",
//   "Mam wrażenie",
//   "Szczerze powiedziawszy, myślę",
//   "Szczerze uważam",
//   "Na 100% twierdzę",
//   "Jestem pewien",
// ];

// const showMessage = () => {
//   const numberName = Math.floor(Math.random() * names.length);
//   const numberPrefix = Math.floor(Math.random() * prefixs.length);

//   //   div.textContent = `${prefixs[numberPrefix]}, że najlepsze imię to ${names[numberName]}.`;

//   //drugi sposób
//   div.textContent = `${
//     prefixs[Math.floor(Math.random() * prefixs.length)]
//   }, że najlepsze imię to ${names[Math.floor(Math.random() * names.length)]}.`;
// };

// btn.addEventListener("click", showMessage);

const btn = document.querySelector("button");
const section = document.querySelector("section");

const chars = "ABCDEFGHIJK0123456789";
let codeNumber = 1000;
let charNumber = 10;

const showCode = () => {
  for (let i = 0; i < codeNumber; i++) {
    const div = document.createElement("div");
    section.appendChild(div);
    let code = "";
    for (let i = 0; i < charNumber; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
      div.textContent = code;
    }
  }
};

btn.addEventListener("click", showCode);
