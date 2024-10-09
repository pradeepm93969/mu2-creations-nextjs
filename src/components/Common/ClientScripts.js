// components/Common/ClientScripts.js
"use client";

import { useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

export default function ClientScripts() {
  useEffect(() => {
    // Initialize Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "TAG_ID");
  }, []);

  return (
    <>
      <script
        async
        src="https://embed.tawk.to/6668c4f7981b6c56477c1662/1i04k2q4o"
        crossOrigin="anonymous"
      ></script>
      <GoogleTagManager gtmId="AW-11461836153" />
    </>
  );
}
