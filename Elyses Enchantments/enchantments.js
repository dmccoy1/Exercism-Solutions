
export function getItem(cards, position) {
  return cards[position];
}


export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards
}


export function insertItemAtTop(cards, newCard) {
  cards.push(newCard)
  return cards
}

export function removeItem(cards, position) {
  if (position == 0) {
    cards.splice(0, 1)
  } else if (position == cards.length - 1) {
    cards.pop()
  }
  else {
    cards.splice(1, position)
  }
  return cards
}

export function removeItemFromTop(cards) {
  cards.pop()
  return cards
}

export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard)
  return cards
}

export function removeItemAtBottom(cards) {
  cards.splice(0, 1)
  return cards
}

export function checkSizeOfStack(cards, stackSize) {
  if (cards.length == stackSize) {
    return true
  } else {
    return false
  }
}
