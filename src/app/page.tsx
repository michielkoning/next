import { FunctionComponent } from "react";
import { cookies } from 'next/headers'
import Passage from "@passageidentity/passage-node";
import { IncomingMessage } from "http";


const passage = new Passage({
  appID: process.env.NEXT_PUBLIC_PASSAGE_APP_ID ?? '',
  apiKey: process.env.PASSAGE_API_KEY ?? ''
})

const Account: FunctionComponent<{
    req: IncomingMessage & {
    cookies: Partial<{
      [key: string]: string
    }>
  },
}> = async({ req }) => {
  const userID = await passage.authenticateRequest(req)

  return (<div>dasd</div>)
}

export default Account