// çok sayfalı uygulamalarda bir sayfa birden çok eleman için ortak ise bu sayfa dinamik şekilde render edilir.
/* bunu yaparken ilk olarak url e bir parametre geçilir.sonrasında bu parametre url den alınarak sayfa 
içeriğinin renderlanması sağlanır */
import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFoundPage } from "./ui.js";
// javascript URLSearchParams clas ı sayesinde url deki arama parametrelerini alıp kullanabiliriz.

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

document.addEventListener("DOMContentLoaded", async () => {
  // api den menu elamanlarını al
  const data = await fetchMenu();

  /* detay sayfasında renderlanacak ürünü bul */

  const product = data.find((item) => item.id == id);
  // Eğer ürün  varsa renderDetailPage fonksiyonunu çalıştır ama yoksa renderNotFoundPage fonksiyonunu çalıştır

  if (!product) {
    renderNotFoundPage(elements.detailPage);
  } else {
    renderDetailPage(product, elements.detailPage);
  }
});
