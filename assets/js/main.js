// chang sellect
let selecter = $(".form-select");

selecter.addEventListener("change", () => {
  let non = $(".non__change");
  non.textContent = selecter.value;
});

// click checkbox

let formInput1 = $(".input1");
formInput1.addEventListener("click", () => {
  let value25 = $(".input__v");
  value25.textContent = formInput1.value;
});
let formInput2 = $(".input2");
formInput2.addEventListener("click", () => {
  let value30 = $(".input__v");
  value30.textContent = formInput2.value;
});
let formInput3 = $(".input3");

formInput3.addEventListener("click", () => {
  let value35 = $(".input__v");
  value35.textContent = formInput3.value;
});

// chesk boxs
let onecheck = $(".one_chackbox");
let ide = $("#ide");
let ide1 = $("#ide1");
let ide2 = $("#ide2");
let ide3 = $("#ide3");
let ide4 = $("#ide4");
let ide5 = $("#ide5");
let inputA = $("#flexCheckDefault"),
  inputB = $("#flexCheckDefault1"),
  inputC = $("#flexCheckDefault3"),
  inputD = $("#flexCheckDefault4"),
  inputE = $("#flexCheckDefault5"),
  inputG = $("#flexCheckDefault6");

inputA.addEventListener("click", () => {
  if (ide.textContent == inputA.value) {
    ide.textContent = "";
  } else {
    ide.textContent = inputA.value;
  }
});

inputC.addEventListener("click", () => {
  if (ide2.textContent == inputC.value) {
    ide2.textContent = "";
  } else {
    ide2.textContent = inputC.value;
  }
});

inputD.addEventListener("click", () => {
  if (ide3.textContent == inputD.value) {
    ide3.textContent = "";
  } else {
    ide3.textContent = inputD.value;
  }
});

inputB.addEventListener("click", () => {
  if (ide1.textContent == inputB.value) {
    ide1.textContent = "";
  } else {
    ide1.textContent = inputB.value;
  }
});

inputE.addEventListener("click", () => {
  if (ide4.textContent == inputE.value) {
    ide4.textContent = "";
  } else {
    ide4.textContent = inputE.value;
  }
});

inputG.addEventListener("click", () => {
  if (ide5.textContent == inputG.value) {
    ide5.textContent = "";
  } else {
    ide5.textContent = inputG.value;
  }
});
// qoshimchasiga
let qoshimcha = $(".qoshimcha__value-value");
let qoshimcha2 = $(".qoshimcha__value-value2");
let qosh1 = $("#flexCheckDefault11");
let qosh2 = $("#flexCheckDefault10");
qosh1.addEventListener("click", () => {
  if (qoshimcha.textContent == qosh1.value) {
    qoshimcha.textContent = "";
  } else {
    qoshimcha.textContent = qosh1.value;
  }
});
qosh2.addEventListener("click", () => {
  if (qoshimcha2.textContent == qosh2.value) {
    qoshimcha2.textContent = "";
  } else {
    qoshimcha2.textContent = qosh2.value;
  }
});
// Btn start

let btn = $(".give_form-btn");
let bgs = $(".bgs");

let bod = $("body");
let modalText = $(".modal-text");
btn.addEventListener("click", () => {
  bgs.classList.add("adds");
  bod.classList.add("ass");
  modalText.innerHTML = "lorem sucssec ";
  if (formInput1.value == "25cm") {
    modalText.classList.add("modaltext");
  } else if (formInput2.value == "30cm") {
    modalText.classList.add("modaltext");
  } else if (formInput3.value == "35cm") {
    modalText.classList.add("modaltext");
  }


});  formInput1.addEventListener("click", () => {
    modalText.classList.add("modaltext2");
  });
  formInput2.addEventListener("click", () => {
    modalText.classList.add("modaltext2");
  });

  formInput3.addEventListener("click", () => {
    modalText.classList.add("modaltext2");
  });
let modalBtn = $(".modal-btn");
modalBtn.addEventListener("click", () => {
  bgs.classList.remove("adds");
  bod.classList.remove("ass");
});
