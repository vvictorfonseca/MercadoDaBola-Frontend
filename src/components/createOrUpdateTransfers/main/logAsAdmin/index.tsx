import { useContext, useState } from "react"
import axios from "axios"

import { Box, BoxInput, InputDescription, Input } from "../../newTransfer/SetNewTransfer/CreatePlayer/style"
import { TextButton, Button } from "../../newTransfer/ConfirmTransfer/style"

import { ILogin } from "../../../../interfaces/IAdmin"

import AsyncStorage from "@react-native-async-storage/async-storage";

import AdminContext, { IAdminContext } from "../../../../contexts/adminContext"
import NgrokUrlContext, { INgrokContext } from "../../../../contexts/ngrokUrlContext"

export default function LogAsAdmin() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const { setAdmIsLogged } = useContext<IAdminContext>(AdminContext)
  const { url } = useContext<INgrokContext>(NgrokUrlContext)

  const loginBody: ILogin = {
    email: email,
    password: password
  }

  function loginAdmin() {
    const URL = `${url}/signIn`

    const promise = axios.post(URL, loginBody)
    promise.then(response => {
      const { data } = response
      console.log(data)
      AsyncStorage.setItem("admIsLogged", "true")
      setAdmIsLogged(true)
    })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Box
        style={{ flex: 1, maxHeight: 180, marginTop: 40 }}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
        keyboardDismissMode={'none'}
      >
        <BoxInput>
          <InputDescription>Digite o seu email:</InputDescription>
          <Input keyboardType='email-address' value={email} onChangeText={setEmail} />
        </BoxInput>

        <BoxInput>
          <InputDescription>Digite sua senha:</InputDescription>
          <Input secureTextEntry={true} value={password} onChangeText={setPassword} />
        </BoxInput>
      </Box>
      
        <Button onPress={() => loginAdmin()} style={{ marginTop: 10, width: 150 }}>
          <TextButton>Entrar</TextButton>
        </Button>
      
    </>
  )
}