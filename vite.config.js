// import { defineConfig } from 'vite'

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       external: ['fsevents']
//     }
//   }
// })

import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'pages/login/index.html'),
        singin: resolve(__dirname, 'pages/singin/index.html'),
        transactions: resolve(__dirname, 'pages/transactions/index.html'),
        add_transaction: resolve(__dirname, 'pages/transactions/add_transaction.html'),
        wallets: resolve(__dirname, 'pages/wallets/index.html'),
        add_wallet: resolve(__dirname, 'pages/wallets/add_wallet.html'),
        notFound: resolve(__dirname, '404.html')
      },
      external: ['fsevents', 'module', 'fs', 'path', 'url'] // ✅ добавлено
    }
  },
  optimizeDeps: {
    exclude: ['fs', 'path', 'module', 'url']
  }
})


