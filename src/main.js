const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/768NKI6qq7pq";
const notesContainer = document.getElementById("noteCard");
const form = document.getElementById("form");

// form.addEventListener("submit", async (event) => {
//   // avoid default behavior
//   event.preventDefault();

//   //Convention
//   // targetkan ke form, ambil semua elemen dalam form
//   const formData = new FormData(event.target);

//   // ambil data
//   const title = formData.get("title");
//   const content = formData.get("content");

//   await createData(title, content);
//   location.reload();
// });

// async function createData(title, content) {
//   const res = await fetch(API_ENDPOINT, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify([{ title, content }]),
//   });
//   const data = await res.json();
//   return data;
// }

async function getAllData() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  return data;
}

async function buildApp() {
  const notes = await getAllData();

  notes.data.forEach((note) => {
    const newNoteElement = document.createElement("div");
    const newNoteTitleElement = document.createElement("h3");
    const newNoteContentElement = document.createElement("p");
    const newNoteDate = document.createElement("p")

    newNoteTitleElement.textContent = note.title;
    newNoteContentElement.textContent = note.content;

    newNoteTitleElement.classList.add("text-xl", "font-bold");
    newNoteElement.classList.add(
      "border",
      "border-transparent",
      "p-2",
      "bg-white",
      "shadow-md",
      "shadow-red-300",
      "rounded-md",
      "grid",
      "grid-cols-1"

      // "divide-y",
      // "divide-gray-400"
    );

    newNoteElement.append(newNoteTitleElement, newNoteContentElement);
    notesContainer.append(newNoteElement);
  });
}

buildApp();
