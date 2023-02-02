import { Box } from "../PlayerAndClubBox/style"

import { Spinner } from "native-base"

export default function LoadingBox() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
      <Spinner size={'lg'} color='white'/>
    </Box>
  )
}