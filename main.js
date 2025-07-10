import axios from 'axios';


const pages = [
    {
        path: '/',
        loadHtml: async (app) => {
            const response = await axios.get('/index.html');
            app.innerHTML = response.data;
        },
        loadStyles: async () => {
            await import('/style/style.css');
        },
        loadScripts: async () => {
           
        }
    },
    {
        path: '/wallets',
        loadHtml: async (app) => {
            const response = await axios.get('/pages/wallets/index.html');
            app.innerHTML = response.data;
        },
        loadStyles: async () => {
            await import('/style/style.css');
            console.log("hello");
            
        },
        loadScripts: async () => {
         
        }
    },
    {
        path: '/transactions',
        loadHtml: async (app) => {
            const response = await axios.get('/pages/transactions/index.html');
            app.innerHTML = response.data;
        },
        loadStyles: async () => {
            await import('/style/style.css');
        },
        loadScripts: async () => {
            
        }
    }
];

async function loadNotFoundPage(app) {
    const response = await axios.get('/404.html'); 
    await import('/style/style.css');
    app.innerHTML = response.data;
}

async function router() {
    const path = window.location.pathname;
    const app = document.getElementById('app');

    const page = pages.find(elem => elem.path === path);

    if (!page) {
        return await loadNotFoundPage(app);
    }

    await page.loadStyles();
    await page.loadHtml(app);
    await page.loadScripts();

    renderLayout();
}

router();
