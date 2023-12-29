import React, { useState } from 'react'

function Workshop(props) {
    //Listeyi oluştur.
    //Ekleme fonksiyonu
    //Çıkarma fonksiyonu
    //Diğer işlemler.
    console.log(props);

    const [activity, setActivity] = useState("");
    const [todoList, setTodoList] = useState(['Aktivite 1', 'Aktivite 2']);

    const add = () =>{
      setTodoList([...todoList, activity]);
      //aynı ekleme yapılınca hata geliyor -validasyon işlemi yapıyoruz.

    }

    // const change = ()=>{
    //   setActivity('Arka tarafta değer değişti..');
      
    // }

    const remove = (activity) =>{
      let newList = todoList.filter(todo => todo !== activity);
      setTodoList(newList);


    }



    //Two Way Data Binding
    //Input değişir => değişken değişir
    //Değişkeni değişir => Input değişir.
    return (
        <div className='center'>
        <input value={activity} onChange={(event)=> {setActivity(event.target.value)}} type= "text" />   
        <button onClick={()=> {add(); }} type='button'>Ekle</button>
        {/* <button onClick={()=> {change(); }} type='button'>Değeri değiştir</button> */}
        <ul>
          {todoList.map(todo => <li key={todo}>{todo} <button onClick={() => {remove(todo);}}  >X</button></li>)}
        </ul>
       </div>
      )
 
}

export default Workshop;

//... listeyi parçalıyoruz ve ardından diğer aktiviteleri ekleme yapıyoruz. Böylece çift yönlü veri aktarımı yapabiliyoruz.
// map: bu alanlara key vermeliyiz.
//gelen aktiviteyi kaldırmak için listeyi filtreliyoruz.
//filter(): activiteye eşit olmayanlara göre listede olmayan silinmiş hali gibi düşün 
//yani şöyle listede a var buna göre listeleyeceğiz ama şartımız a ve !== hal a'nın silinmiş halidir. biraz oyuna getiriyoruz :)