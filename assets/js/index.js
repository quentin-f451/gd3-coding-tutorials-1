const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();

/* CORRECTION */

const clickEventOnListItemHeader = () => {
  document.querySelectorAll(".list__item__header").forEach((item) => {
    const body = item.nextElementSibling;
    item.addEventListener("click", () => {
      if (body.classList.contains("show")) {
        hideAllListItemBody();
      } else {
        hideAllListItemBody();
        body.classList.add("show");
      }
    });
  });
};

const hideAllListItemBody = () => {
  document.querySelectorAll(".list__item__body").forEach((item) => {
    item.classList.remove("show");
  });
};

const replaceTextByDateOfBirth = () => {
  document.querySelectorAll(".list__item__artist").forEach((item) => {
    const text = item.innerHTML;
    const dateOfBirth = text.slice(-5, -1);
    item.innerHTML = dateOfBirth;
  });
};

clickEventOnListItemHeader();
replaceTextByDateOfBirth();
