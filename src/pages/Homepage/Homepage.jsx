import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const myAsyncFunction = () => {
    return new Promise((resolve, reject) => {
      reject("HTTP VERİSİ");
    });
  };

  useEffect(() => {
    myAsyncFunction()
      .then((response) => {
        console.log("İşlem başarılı.", response);
      }) //async işlem başarılı ise (resolve edildiyse)
      .catch((error) => {
        console.log("işlem başarısız.", error);
      }) //async işlem başarısız ise (reject edildiyse)
      .finally(() => {
        console.log("işlem bitti.");
      }); //her halükarda en son çalışır.
    console.log("Merhaba");
  }, []);

  return (
    <div>
      <button className="btn btn-danger">Homepage</button>
      <br />
      {/* SPA'larda href kullanımı yanlıştır. */}
      <Link to={"/about"}>About'a git.</Link>
    </div>
  );
}
