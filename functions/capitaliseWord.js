import React from "react";

/**
 *
 * @param {string} word
 * @returns a capitalised word
 */

export default function capitaliseWord(word) {
  if (typeof word == "string") {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } else {
    return word;
  }
}
