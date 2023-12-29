
import { useState } from 'react';
import './App.css';


//JSX => JavaScript + Html : JavaScript Xml açılımı
function App() {
  //değiştiğinde UI'i da update edecek değişken
  //useState: react fonksiyon (react hooks-- jsx güncellemesi için)

  //let totalCount =0;
  const [total, setTotal] = useState(0); //{get; set;}


  const increase = () => {
    setTotal(total + 1);

  }

  const decrease = () => {
   setTotal(total - 1);
  }
  return (
   <>
   
   <p>Toplam Tıklama Sayısı: {total}</p>
   <button onClick={()=> {
    increase();
    console.log("+ butonuna basıldı.")
   }}>+</button>
   <button onClick={()=>{decrease();}}>-</button> 

   
   </>
  );
}
// export const variable = 1;
// export const variable2 = 1;
//  <button onClick={()=>{decrease();}}>-</button> 

// EVENT - useState kullanımındaki syntax.
//  <button onClick={decrease}>-</button>  -- referans veriri.
// <button onClick={()=>{decrease();}}>-</button> --fonksiyonu cağırırım.
export default App;


