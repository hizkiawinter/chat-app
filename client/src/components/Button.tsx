import React from "react";

import { GoogleLogin } from "@react-oauth/google";

export default function Button() {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("Google credential:", credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
