import React, { useEffect } from "react";

const showSnackbar = ({ children }) => {
  const node = document.createElement("div");
  node.setAttribute("id", "snackbar");
  document.getElementById("__next").appendChild(node);

  var x = document.getElementById("snackbar");
  x.innerHTML = children || "Message";
  setTimeout(function () {
    node.remove();
  }, 3000);
};

export default showSnackbar;
