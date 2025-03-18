import fetchMenu from "./api.js";
import { elements, renderCard } from "./ui.js";

// Sayfa yüklendiğinde api'a istek at ve gelen veriyi data'ya ata

document.addEventListener("DOMContentLoaded", async () => {
  // Apidan veri al
  const data = await fetchMenu();

  // Api'dan gelen veri ile arayüzü dinamik şekilde renderla

  renderCard(data);
  //   ınputlara bir olay izleyicisi ekle ve değişen  input un categorisine
  // erişip bu kategorideki ürünleri render et

  elements.inputs.forEach((input) => {
    // !querySelectorAll metodu ile elde edilen inputs bir HtmlCollection olduğundan
    // buna direkt addEventListener ekleyemeyiz.Bu sebeple bu Html Colection ı dönüp her bir elemanı ayırdık.

    input.addEventListener("change", () => {
      //  seçili input un id sini al.
      const selected = input.id;

      //  ! eğer seçili kategory all ise tüm üürnleri ama bunun dışında bir kategoy ise e
      // lemenalrı al
      if (selected === "all") {
        renderCard(data);
      } else {
        const filtred = data.filter((item) => item.category === selected);
        renderCard(filtred);
      }

      // selectedId ye menü eleöanlarını dön ve seçili katogoriye sahip elemanları al.
    });
  });
});
