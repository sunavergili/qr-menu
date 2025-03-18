// arayüz dosyası
// html den js e çekilecek elemanları bir obje ile yönet.

const elements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll("input"),
  detailPage: document.querySelector("#outlet"),
};
// arayüze menu cartları render edecek fonksiyon
const renderCard = (data) => {
  // Bu fonksiyona dışarıdan verilen datayı dön ve her data için bir html oluştur.
  const cardsHtml = data
    .map(
      (menu) => ` 
                 <a  href = '/detail.html?id=
                 ${menu.id} ' 
                  class="d-flex flex-column flex-md-row text-dark gap-3" 
      id="card">
        <img
          class="rounded img-fluid shadow"
          src= "${menu.img}"
          alt="card-image"
        />
        <div>
          <div class="d-flex justify-content-between">
            <h5> ${menu.title}   </h5>
            <p class="fw-bold text-success">  ${(menu.price * 40).toFixed(2)} 
             ₺</p>
          </div>
          <p class="lead">
            ${menu.desc}
          </p>
        </div>
      </a>`
    )
    .join(" ");

  // oluşturulan bu html yi ara yüze aktar.
  elements.menuList.innerHTML = cardsHtml;
};
// Detay sayfasını renderlayacak fonksiyon

const renderDetailPage = (product, outlet) => {
  // fonksiyona dışarıdan verilen değerin içeriğini oluştur.

  outlet.innerHTML =  `
  
     <div class="d-flex justify-content-between">
       
        <a href="/">
          <img src="./images/home.png" width="35px" alt="" />
        </a>

        <p>anasayfa / ${product.category} / ${product.title} </p>
      </div>
  
      <h1 class="text-center">Süzme Pankek</h1>

      <img
        src=" ${product.img} "
        style="max-height: 400px"
        class="rounded object-fit-cover shadow"
        alt="product-image"
      />
 
      <h4>Ürünün Kategorisi: <span class="text-success"> ${product.category}    </span></h4>
      <h4>Ürünün Fiyatı: <span class="text-success">${(product.price*40)toFixed(2)} ₺</span></h4>

 

      <p class="lead">
      ${product.desc}
      </p>  ` ;
};
export { elements, renderCard, renderDetailPage };

