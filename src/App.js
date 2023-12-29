
import { useEffect, useState } from 'react';

import './App.css';
import Workshop from './Workshop';


//JSX => JavaScript + Html : JavaScript Xml açılımı
function App() {
  //değiştiğinde UI'i da update edecek değişken
  //useState: react fonksiyon (react hooks-- jsx güncellemesi için)
  //useEffect (fonksiyon, [dep_list])

  //let totalCount =0;
  const [total, setTotal] = useState(0); //{get; set;}


  const increase = () =>{
    setTotal((prevState)=>{ return prevState  + 1; }); //async işlem (colsole çıktı:0 bu nedenle.)
    console.log(total);
  }

  const decrease = () => {
   setTotal(total - 1); //async
   
  }
  //dep listedeki değişkenlerden herhangi biri değiştiğinde tetiklenir.
  //her sayfa acılışı use effect'i tetikler.
  
  useEffect(()=> {
    console.log("use effect calıştı..")
    console.log(total);
  }, [total]);


  const [date, setDate] = useState(new Date());
  const [number, setNumber] = useState(10);

  return (
   <>
   
   {/* <p>Toplam Tıklama Sayısı: {total}</p>
   <button onClick={()=> {
    increase();
    console.log("+ butonuna basıldı.")
   }}>+</button>
   <button onClick={()=>{decrease();}}>-</button>  */}


{/* Component isimleri daima büyük harfle yazılır. */}
  <Workshop number={number} date={date} />
   
   </>
  );
}
// export const variable = 1;
// export const variable2 = 1;
//  <button onClick={()=>{decrease();}}>-</button> 

// EVENT - useState kullanımındaki syntax.
//  <button onClick={decrease}>-</button>  -- referans veriri.
// <button onClick={()=>{decrease();}}>-</button> --fonksiyonu cağırırım.

//useState:
//-useState'in setterı async işlemdir. Bu nedenle kodda 0 çıktısı aldık.
//-async işlem: O satırın işlemini beklemeyen, kodu bloke etmeyen yapılardır. console.log(totali okuyor ilk işlem bitmeden)
//- tüm set; işemleri async'dır.
export default App;


//Ödev: todolist usestate ve use effect kullanarak yap 
//İpucu: /*onChange={}*/

