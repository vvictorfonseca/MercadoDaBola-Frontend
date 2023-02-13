import { Box, TextBoxStatus } from "./style";
import { IStatus } from "..";

interface IProps {
  info: IStatus;
  selected: number;
  setSelected: (newState: number) => void
}

export default function BoxStatus(props: IProps) {
  return (
    <Box
      onPress={() => {
        props.selected == props.info.id ?
          props.setSelected(0) :
          props.selected == 0 || props.selected !== props.info.id ? (
            props.setSelected(props.info.id)
          ) : (
            null
          )
      }}
      style={props.selected == props.info.id ? { opacity: 0.6 } : null}
    >
      <TextBoxStatus>{props.info.name}</TextBoxStatus>
    </Box>
  )
} 