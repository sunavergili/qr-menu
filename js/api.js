// api ye istek at
const fetchMenu = async () => {
  const res = await fetch("../db.json");
  //   Api den gelen veriyi json formatına çevir
  const data = await res.json();
  //   data içindeki menü yü bu fonksiyon çağrıldığında return et
  return data.menu;
};
// yukarıda
// 1.fetch( API  ya istek atıyor.
// 2. API bir yanıt (response objesi ) döndürüyor.
// 3.res.json() bu yanıtı json formatına dönüştürüyor.
// 4. json verisi data değişkenine atanıyor ve konsola yazdırıyor.

export default fetchMenu;
// bir dosyadan tek bir eleman çekilecelse export default
