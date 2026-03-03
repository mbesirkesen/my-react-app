# React + TypeScript + Vite

Bu proje React, TypeScript ve Vite ile oluşturulmuştur. HMR (Hot Module Replacement) ve temel ESLint kurallarıyla minimal bir kurulum sunar.

## Kurulum

Projeyi bilgisayarınıza klonladıktan sonra bağımlılıkları yükleyin:

```bash
npm install
```

## Çalıştırma

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Uygulama varsayılan olarak [http://localhost:5173](http://localhost:5173) adresinde açılacaktır.

## Projeyi Derleme

Üretim için derlemek isterseniz:

```bash
npm run build
```

## Mevcut Eklentiler

Bu şablonda kullanılabilecek iki resmi eklenti bulunmaktadır:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) – Fast Refresh için [Babel](https://babeljs.io/) kullanır
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) – Fast Refresh için [SWC](https://swc.rs/) kullanır

## React Compiler

React Compiler bu şablonda devre dışıdır; geliştirme ve derleme performansını etkileyebileceği için. Eklemek isterseniz [bu dokümantasyona](https://react.dev/learn/react-compiler/installation) bakın.

## ESLint Yapılandırmasını Genişletme

Üretim uygulaması geliştiriyorsanız, tip duyarlı lint kurallarını etkinleştirmek için yapılandırmayı güncellemeniz önerilir:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Diğer configler...

      // tseslint.configs.recommended kaldırın ve yerine bunu ekleyin
      tseslint.configs.recommendedTypeChecked,
      // Veya daha katı kurallar için
      tseslint.configs.strictTypeChecked,
      // İsteğe bağlı: stil kuralları için
      tseslint.configs.stylisticTypeChecked,

      // Diğer configler...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // diğer seçenekler...
    },
  },
])
```

React'e özel lint kuralları için [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) ve [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) eklentilerini de kurabilirsiniz:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Diğer configler...
      // React lint kurallarını etkinleştir
      reactX.configs['recommended-typescript'],
      // React DOM lint kurallarını etkinleştir
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // diğer seçenekler...
    },
  },
])
```
