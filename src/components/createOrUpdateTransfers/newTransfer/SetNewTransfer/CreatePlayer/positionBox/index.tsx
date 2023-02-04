import { IPositionData } from "../../../../../../interfaces/IPlayers";
import { Box, Position } from "./style"

interface PositionProps {
  selected: number;
  setSelected: (newState: number) => void
  info: IPositionData
}

export default function PositionBox(props: PositionProps) {
  let position = ""
  if (props.info.position == "Lateral") {
    position = "LD/LE"
  } else {
    for (let i = 0; i < 3; i++) {
      position += props.info.position[i].toUpperCase()
    }
  }

  return (
    <Box
      onPress={() => {
        props.selected == props.info.id ? (
          props.setSelected(0)
        ) : props.selected == 0 || props.selected !== props.info.id ? (
          props.setSelected(props.info.id)
        ) : (
          null
        )
      }}
      style={props.selected == props.info.id ? { opacity: 0.6 } : null}
    >
      <Position>{position}</Position>
    </Box>
  )
}