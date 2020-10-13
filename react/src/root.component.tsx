import React from "react";

export default function Root({ name, tokenStore }) {
  return (
    <section>
      {name} is mounted with {tokenStore.getToken()}!
    </section>
  );
}
