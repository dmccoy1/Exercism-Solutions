//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const hey = (message) => {
  let response = ''
  message = message.trim()
  //blink
  if (/^\s*$/.test(message)) {
    response += 'Fine. Be that way!'
  }
  else if (shouting(message) && !/\?$/.test(message)) {
    response += 'Whoa, chill out!'
  }
  //shouting but is a question
  else if (/\?$/.test(message) && shouting(message)) {
    response += "Calm down, I know what I'm doing!"
  }
  //shouting but not a question
  else if (shouting(message)) {
    response += 'Sure.'
  }

  else if (/\?$/.test(message) && !shouting(message)) {
    response += "Sure."
  }
  else {
    response += 'Whatever.'
  }
  return response

};


function shouting(message) {
  return !/[a-z]/.test(message) && /[A-Z]/.test(message);
}