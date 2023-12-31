import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const myAsyncFunction = () => {
    return new Promise((resolve, reject) => {
      reject("HTTP VERİSİ");
    });
  };

  useEffect(() => {
    makeAsyncCall();
    makeHttpCall();
  }, []);

  const makeHttpCall = async () => {
    // fetch("https://dummyjson.com/products")
    // //zincirleme promise yapısı var.
    //   .then((response) => response.json())
    //   .then(json => console.log(json))
    //   .catch((err) => console.log(err));

    //---Alternatif syntax
    //2 tane then kullanıldığı için 2 tane let var.
    let response = await fetch("https://dummyjson.com/products");
    let json = await response.json();
    console.log(json);
 
  };

  const makeAsyncCall = async () => {
    //makeAsyncCall();
    // .then((response) => {
    //         console.log("İşlem başarılı.", response);
    //       }) //async işlem başarılı ise (resolve edildiyse)
    //       .catch((error) => {
    //         console.log("işlem başarısız.", error);
    //       }) //async işlem başarısız ise (reject edildiyse)
    //       .finally(() => {
    //         console.log("işlem bitti.");

    //es2017 async-await

    //await keyword: promıse'in dönüş tipini response esitleriz.

    //----Alternatif syntax
    //try-catch-finall yerine await ile kullanıyorsam try-catch manuel yapmalıyım (reject olduğunda hata fırlar bu nedenle try catch bloğu kullanmalıyım.)

    try {
      let response = await myAsyncFunction();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   myAsyncFunction()
  //     .then((response) => {
  //       console.log("İşlem başarılı.", response);
  //     }) //async işlem başarılı ise (resolve edildiyse)
  //     .catch((error) => {
  //       console.log("işlem başarısız.", error);
  //     }) //async işlem başarısız ise (reject edildiyse)
  //     .finally(() => {
  //       console.log("işlem bitti.");
  //     }); //her halükarda en son çalışır.
  //   console.log();
  // }, []);

  return (
    <div>
      <button className="btn btn-danger">Homepage</button>
      <br />
      {/* SPA'larda href kullanımı yanlıştır. */}
      <Link to={"/about"}>About'a git.</Link>
    </div>
  );
}
