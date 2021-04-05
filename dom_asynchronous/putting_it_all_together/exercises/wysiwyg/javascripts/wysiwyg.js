"use strict";

/* eslint-disable max-lines-per-function */
document.addEventListener("DOMContentLoaded", () => {
  const textField = document.getElementById("text");

  function clearPressed() {
    const buttons = document.querySelectorAll("#controls button");
    buttons.forEach((buttons) => buttons.classList.remove("pressed"));
    document.getElementById("justifyLeft").classList.add("pressed");
  }

  function getInnerMostElement(elem) {
    let currElem = elem;
    while (currElem.firstElementChild) {
      currElem = currElem.firstElementChild;
    }

    return currElem;
  }

  // eslint-disable-next-line max-statements
  function highlightControls(elem) {
    let currElem = getInnerMostElement(elem);

    while (currElem && currElem !== textField) {
      if (currElem.tagName === "B") {
        document.getElementById("bold").classList.add("pressed");
      } else if (currElem.tagName === "I") {
        document.getElementById("italic").classList.add("pressed");
      } else if (currElem.tagName === "U") {
        document.getElementById("underline").classList.add("pressed");
      } else if (currElem.tagName === "STRIKE") {
        document.getElementById("strikeThrough").classList.add("pressed");
      } else if (currElem.tagName === "A") {
        document.getElementById("createLink").classList.add("pressed");
      } else if (currElem.tagName === "UL") {
        document.getElementById("insertUnorderedList").classList.add("pressed");
      } else if (currElem.tagName === "OL") {
        document.getElementById("insertOrderedList").classList.add("pressed");
      } else if (currElem.tagName === "DIV") {
        const justification = currElem.getAttribute("align");
        document.getElementById("justifyLeft").classList.remove("pressed");

        if (justification === "left") {
          document.getElementById("justifyLeft").classList.add("pressed");
        } else if (justification === "right") {
          document.getElementById("justifyRight").classList.add("pressed");
        } else if (justification === "center") {
          document.getElementById("justifyCenter").classList.add("pressed");
        } else if (justification === "justify") {
          document.getElementById("justifyFull").classList.add("pressed");
        }
      }

      currElem = currElem.parentNode;
    }
  }

  document.getElementById("controls").addEventListener("click", (event) => {
    if (event.target.id === "createLink") {
      const url = document.getSelection().toString()
        ? prompt("Enter the URL to link to:")
        : "";
      if (url) document.execCommand(event.target.id, false, url);
    } else {
      document.execCommand(event.target.id, false);
    }

    const selected = document.getSelection().anchorNode.parentNode;
    highlightControls(selected);
    selected.focus();
  });

  textField.addEventListener("click", (event) => {
    clearPressed();
    if (event.target !== textField) {
      highlightControls(event.target);
    }
  });
});
