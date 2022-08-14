export enum BoardConfig {
  countRows = 8,
  countColumns = 8,
  countPawns = 8,
}

export enum FigureNames {
  FIGURE = "Figure",
  KING = "King",
  KNIGHT = "Knight",
  PAWN = "Pawn",
  QUEEN = "Queen",
  ROOK = "Rook",
  BISHOP = "Bishop",
}

export enum BlackFiguresPosition {
  PAWNY = 1,
  KINGX = 4,
  KINGY = 0,
  QEENX = 3,
  QEENY = 0,
  LEFTBISHOPX = 2,
  LEFTBISHOPY = 0,
  RIGHTBISHOPX = 5,
  RIGHTBISHOPY = 0,
  LEFTKNIGHTX = 1,
  LEFTKNIGHTY = 0,
  RIGHTKNIGHTX = 6,
  RIGHTKNIGHTY = 0,
  LEFTROOKX = 0,
  LEFTROOKY = 0,
  RIGHTROOKX = 7,
  RIGHTROOKY = 0,
}

export enum WhiteFiguresPosition {
  PAWNY = 6,
  KINGX = 4,
  KINGY = 7,
  QEENX = 3,
  QEENY = 7,
  LEFTBISHOPX = 2,
  LEFTBISHOPY = 7,
  RIGHTBISHOPX = 5,
  RIGHTBISHOPY = 7,
  LEFTKNIGHTX = 1,
  LEFTKNIGHTY = 7,
  RIGHTKNIGHTX = 6,
  RIGHTKNIGHTY = 7,
  LEFTROOKX = 0,
  LEFTROOKY = 7,
  RIGHTROOKX = 7,
  RIGHTROOKY = 7,
}

export enum TimerKeys {
  durationMove = 300,
}
