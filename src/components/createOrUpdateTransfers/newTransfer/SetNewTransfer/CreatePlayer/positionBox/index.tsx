import { Box, Position } from "./style"

interface PositionProps {
  position: string
}

export default function PositionBox(props: PositionProps) {
  return (
    <Box>
      <Position>{props.position}</Position>
    </Box>
  )
}