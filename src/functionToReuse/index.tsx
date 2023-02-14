export function formatClubName(value: string, clubName: string) {

  for (let i = 0; i < 3; i++) {
    value += clubName[i].toUpperCase()
  }

  return value
}

export function formatPosition(value: string, position: string) {

  if (position == "Lateral") {
    return "LD/LE"
  } else {
    for (let i = 0; i < 3; i++) {
      value += position[i].toUpperCase()
    }
  }

  return value
}