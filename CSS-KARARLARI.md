# CSS Kararları

Bu belge, LAB-3 kapsamında portföy sayfasında alınan tasarım kararlarını açıklar.

## 1. Breakpoint Seçimi

- **640px** ve **1024px** breakpoint'leri kullandım. Bunlar sektörde yaygın kabul görmüş değerlerdir: 640px büyük telefonlar ve küçük tabletler, 1024px ise tabletler (yatay) ve masaüstü monitörler için sınır oluşturur.
- İçeriğim bu noktalarda şu şekilde değişiyor: Mobilde header ve nav dikey yığın, tablette yatay hizalama; Hakkımda bölümü mobilde tek sütun ortalanmış, tablette profil solda metin sağda; proje kartları mobilde 1 sütun, tablette auto-fit ile 2 sütun, masaüstünde sabit 3 sütun.

## 2. Layout Tercihleri

- **Header için Flexbox** seçtim çünkü tek boyutlu (yatay/dikey) hizalama yeterli: logo/site adı solda, navigasyon sağda. Flexbox bu tür tek eksenli düzenler için ideal.
- **Proje kartları için Grid** seçtim çünkü iki boyutlu ızgara yapısı gerekiyor; satır ve sütun birlikte kontrol edilmeli. `repeat(auto-fit, minmax(280px, 1fr))` ile media query yazmadan responsive grid elde ettim.
- **auto-fit** kullandım; boş sütunları daraltıp mevcut elemanların alanı genişlemesini sağlıyor. auto-fill boş sütunları korur, bu projede auto-fit daha uygun.

## 3. Design Tokens

- **Renk paleti:** Koyu tema seçtim (--color-bg: #0f172a, --color-surface: #1e293b). Mavi tonları (primary, secondary) kurumsal ve profesyonel görünüm sağlıyor.
- **Spacing skalası:** 0.25rem (4px) ile 4rem (64px) arası 8 basamaklı bir ölçek kullandım. Tutarlı boşluk için --space-xs, --space-sm, --space-md vb. token'lar tanımladım.
- **Fluid typography:** clamp() ile font boyutlarını ayarladım. Örn. --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem) — rem + vw karışımı hem zoom uyumluluğu hem de ekran genişliğine göre akıcı ölçekleme sağlıyor.

## 4. Responsive Stratejiler

- **Mobile-first** yaklaşımını uyguladım: varsayılan stiller mobil için, ardından `@media (min-width: 640px)` ve `@media (min-width: 1024px)` ile büyük ekranlara ekleme yaptım.
- Breakpoint'lerde değişen elemanlar: header (column → row), nav-list (column → row), about-content (column → row), project-grid (1 sütun → auto-fit → 3 sütun), submit butonu (full width → auto).
- Görseller için `max-width: 100%`, `height: auto` ve profil fotoğrafında `object-fit: cover` kullandım; böylece tüm görseller kapsayıcıya uyum sağlıyor.
