const state = {
  views: {
    game: document.querySelector(".game"),
  },
  values: {
    emojis: [
      "😍",
      "😍",
      "😪",
      "😪",
      "🙈",
      "🙈",
      "🦄",
      "🦄",
      "🎈",
      "🎈",
      "🍜",
      "🍜",
      "💵",
      "💵",
      "🥨",
      "🥨",
    ],
    openCards: [],
    isPlaying: false,
  },
};

function handleClick() {
  if (state.values.isPlaying) {
    if (state.values.openCards.length < 2) {
      this.classList.add("boxOpen");
      state.values.openCards.push(this);
    }

    if (state.values.openCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  }
}

function checkMatch() {
  if (
    state.values.openCards[0].innerHTML === state.values.openCards[1].innerHTML
  ) {
    state.values.openCards[0].classList.add("boxMatch");
    state.values.openCards[1].classList.add("boxMatch");
  } else {
    state.values.openCards[0].classList.remove("boxOpen");
    state.values.openCards[1].classList.remove("boxOpen");
  }

  state.values.openCards = [];

  if (
    document.querySelectorAll(".boxMatch").length === state.values.emojis.length
  ) {
    state.values.isPlaying = false;
    alert("Você venceu!");
  }
}

function initialize() {
  if (!state.values.isPlaying) {
    state.values.isPlaying = true;
    let shuffleEmojis = state.values.emojis.sort(() =>
      Math.random() > 0.5 ? 2 : -1
    );

    for (let i = 0; i < state.values.emojis.length; i++) {
      let box = document.createElement("div");
      box.className = "item";
      box.innerHTML = shuffleEmojis[i];
      box.onclick = handleClick;

      state.views.game.appendChild(box);
    }
  }
}

initialize();
