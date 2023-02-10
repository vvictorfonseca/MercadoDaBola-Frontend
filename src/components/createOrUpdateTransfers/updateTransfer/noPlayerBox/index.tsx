import { Box, Name } from "../../newTransfer/SetNewTransfer/PlayerAndClubBox/style"

export default function NoPlayerBox() {
  return (
    <Box style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
      <Name style={{marginLeft: 16, textAlign: 'center'}}>Não há jogadores com essas iniciais</Name>
    </Box>
  )
}