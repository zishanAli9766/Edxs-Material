import { getMessaging, getToken } from "firebase/messaging";


export const messaging = getMessaging();
getToken(messaging, { vapidKey: 'BCDnNoixplDWeAaOXy4MlnF7FXQ2yW_PxqK1g_Ri_CIF0UwAiKtxj2dWhJojeX_N4gRRzCV5XwLVwuPIY3k1dEM ' }).then((currentToken) => {
  if (currentToken) {
      console.log("zishan",currentToken)
   return currentToken;
  } else {
    console.log('No registration token available. Request permission to generate one.hi',currentToken);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});

