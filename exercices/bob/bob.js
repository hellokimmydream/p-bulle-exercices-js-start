//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//const regexSur = (message) => /^[A-Za-z\d]?{1}$/.test(message);
//const regexCrie = (message) => /^[A-Z\d]!{1}$/.test(message);
//const regexAskCrie = (message) => /^[A-Z\d]?{1}$/.test(message);
//const regexSilence = (message) => /^[\d][ ""  " "   "   "     "      "\d]$/.test(message);
//const regexReste = (message) => /^[A-Za-z0-9.,!?-_çöéàäèü$+""" "%&()( )\d]?{1}$/.test(message);

export const hey = (message) => {
  const messageTrim = message.trim();
  if (isQuestion(messageTrim) && isUpperCase(messageTrim)) {
    return "Calm down, I know what I'm doing!";
  } else if (isQuestion(messageTrim)) {
    return "Sure.";
  } else if (
    // isBlank pour nettoyer et controler que le message est vide donc silence vrais si vide
    isBlank(messageTrim)
  ) {
    return "Fine. Be that way!";
  } else if (isUpperCase(messageTrim)) {
    return "Whoa, chill out!";
  } else {
    return "Whatever.";
  }
};
const isQuestion = (message) => message.endsWith("?");
const isUpperCase = (message) =>
  !/[a-z]/.test(message) && /[A-Z]/.test(message);
const isBlank = (message) => message === "";
