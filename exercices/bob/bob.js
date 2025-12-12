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
  if (!message.trim()) {
    return "Whatever.";
  }

  const silence = (message) => /^\s*$/.test(message);
  const shouting = (message) => /^[^A-Za-z]*[A-Z]+(?:[^a-z]*)$/.test(message);
  const asking = (message) => /\?\s*$/.test(message);

  if (asking(message)) {
    return "Sure";
  }

  if (shouting(message)) {
    return shouting(message)
      ? "Whoa, chill out!"
      : "Calm down, I know what I'm doing!";
  }

  if (silence(message)) {
    return "Fine. Be that way!";
  }
};
