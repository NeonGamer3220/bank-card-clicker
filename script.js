const state = {
    money: 0,
    moneyPerClick: 1,
    moneyPerSecond: 0,
    title: "Broke",
    lastSaved: Date.now(),
    upgrades: {
        betterPlastic: { level: 0, baseCost: 50, costMult: 1.5, effect: 1, name: "Better Plastic", desc: "+$1/click", icon: "fa-credit-card" },
        goldChip: { level: 0, baseCost: 500, costMult: 1.8, effect: 10, name: "Gold Chip", desc: "+$10/click", icon: "fa-microchip" },
        platinumCard: { level: 0, baseCost: 5000, costMult: 2, effect: 100, name: "Platinum Card", desc: "+$100/click", icon: "fa-gem" },
        blackCard: { level: 0, baseCost: 100000, costMult: 2.5, effect: 2500, name: "Black Card", desc: "+$2,500/click", icon: "fa-crown" },
        diamondCard: { level: 0, baseCost: 5000000, costMult: 3, effect: 50000, name: "Diamond Card", desc: "+$50,000/click", icon: "fa-gem" },
        quantumCard: { level: 0, baseCost: 250000000, costMult: 3.5, effect: 1000000, name: "Quantum Card", desc: "+$1,000,000/click", icon: "fa-atom" }
    },
    companies: {
        lemonadeStand: { level: 0, baseCost: 100, costMult: 1.15, effect: 1, name: "Lemonade Stand", desc: "+$1/sec", icon: "fa-lemon" },
        newspaperRoute: { level: 0, baseCost: 500, costMult: 1.18, effect: 5, name: "Newspaper Route", desc: "+$5/sec", icon: "fa-newspaper" },
        onlineStore: { level: 0, baseCost: 2500, costMult: 1.2, effect: 30, name: "Online Store", desc: "+$30/sec", icon: "fa-store" },
        carWash: { level: 0, baseCost: 10000, costMult: 1.22, effect: 150, name: "Car Wash", desc: "+$150/sec", icon: "fa-car-side" },
        techStartup: { level: 0, baseCost: 50000, costMult: 1.25, effect: 800, name: "Tech Startup", desc: "+$800/sec", icon: "fa-laptop-code" },
        cryptoMine: { level: 0, baseCost: 250000, costMult: 1.28, effect: 4500, name: "Crypto Mine", desc: "+$4,500/sec", icon: "fa-bitcoin" },
        megaCorp: { level: 0, baseCost: 1500000, costMult: 1.3, effect: 30000, name: "Mega Corp", desc: "+$30,000/sec", icon: "fa-city" },
        spaceAgency: { level: 0, baseCost: 10000000, costMult: 1.35, effect: 250000, name: "Space Agency", desc: "+$250,000/sec", icon: "fa-rocket" },
        aiOverlord: { level: 0, baseCost: 100000000, costMult: 1.4, effect: 3000000, name: "AI Overlord", desc: "+$3,000,000/sec", icon: "fa-robot" }
    },
    realEstate: {
        tent: { level: 0, baseCost: 1000, costMult: 1.15, effect: 10, name: "Tent", desc: "+$10/sec", icon: "fa-campground" },
        apartment: { level: 0, baseCost: 15000, costMult: 1.2, effect: 200, name: "Apartment", desc: "+$200/sec", icon: "fa-building" },
        house: { level: 0, baseCost: 100000, costMult: 1.25, effect: 1500, name: "House", desc: "+$1,500/sec", icon: "fa-house" },
        mansion: { level: 0, baseCost: 2500000, costMult: 1.3, effect: 40000, name: "Mansion", desc: "+$40,000/sec", icon: "fa-house-chimney-window" },
        skyscraper: { level: 0, baseCost: 50000000, costMult: 1.35, effect: 1000000, name: "Skyscraper", desc: "+$1,000,000/sec", icon: "fa-building-user" },
        privateIsland: { level: 0, baseCost: 500000000, costMult: 1.4, effect: 15000000, name: "Private Island", desc: "+$15,000,000/sec", icon: "fa-umbrella-beach" },
        moonBase: { level: 0, baseCost: 10000000000, costMult: 1.5, effect: 500000000, name: "Moon Base", desc: "+$500,000,000/sec", icon: "fa-moon" }
    },
    shop: {
        usedCar: { owned: false, cost: 10000, name: "Used Car", desc: "A rusty old car.", icon: "fa-car-side" },
        sportsCar: { owned: false, cost: 250000, name: "Sports Car", desc: "Vroom vroom!", icon: "fa-car-burst" },
        superCar: { owned: false, cost: 1500000, name: "Super Car", desc: "0 to 60 in 2 seconds.", icon: "fa-car" },
        yacht: { owned: false, cost: 5000000, name: "Yacht", desc: "Sail the seas.", icon: "fa-ship" },
        privateJet: { owned: false, cost: 50000000, name: "Private Jet", desc: "Fly anywhere.", icon: "fa-plane" },
        sportsTeam: { owned: false, cost: 2000000000, name: "Sports Team", desc: "Own a franchise.", icon: "fa-basketball" },
        smallCountry: { owned: false, cost: 50000000000, name: "Small Country", desc: "Rule your own nation.", icon: "fa-flag" }
    },
    stocks: {
        tech: { price: 100, owned: 0, name: "Tech Co.", history: [] },
        food: { price: 50, owned: 0, name: "Food Inc.", history: [] },
        energy: { price: 200, owned: 0, name: "Energy Corp.", history: [] },
        crypto: { price: 500, owned: 0, name: "KiloCoin", history: [] },
        space: { price: 1000, owned: 0, name: "AstroX", history: [] }
    },
    rewards: {
        firstThousand: { unlocked: false, req: 1000, name: "Thousandaire", desc: "Reach $1,000", icon: "fa-coins" },
        firstMillion: { unlocked: false, req: 1000000, name: "Millionaire", desc: "Reach $1,000,000", icon: "fa-sack-dollar" },
        firstBillion: { unlocked: false, req: 1000000000, name: "Billionaire", desc: "Reach $1,000,000,000", icon: "fa-vault" },
        firstTrillion: { unlocked: false, req: 1000000000000, name: "Trillionaire", desc: "Reach $1,000,000,000,000", icon: "fa-money-bill-trend-up" }
    }
};

// DOM Elements
const moneyEl = document.getElementById('money');
const mpcEl = document.getElementById('money-per-click');
const mpsEl = document.getElementById('money-per-second');
const titleEl = document.getElementById('current-title');
const bankCard = document.getElementById('bank-card');

const upgradesList = document.getElementById('upgrades-list');
const companiesList = document.getElementById('companies-list');
const realEstateList = document.getElementById('real-estate-list');
const shopList = document.getElementById('shop-list');
const stockList = document.getElementById('stock-list');
const rewardsList = document.getElementById('rewards-list');

// Format numbers
function formatMoney(num) {
    return Math.floor(num).toLocaleString();
}

// Update UI
function updateUI() {
    checkTitles();
    moneyEl.innerText = formatMoney(state.money);
    mpcEl.innerText = formatMoney(state.moneyPerClick);
    mpsEl.innerText = formatMoney(state.moneyPerSecond);
    titleEl.innerText = state.title;

    renderList(state.upgrades, upgradesList, buyUpgrade);
    renderList(state.companies, companiesList, buyCompany);
    renderList(state.realEstate, realEstateList, buyRealEstate);
    renderShop();
    renderStocks();
    renderRewards();
}

// Calculate Costs
function getCost(baseCost, costMult, level) {
    return Math.floor(baseCost * Math.pow(costMult, level));
}

// Render generic list (Upgrades, Companies, Real Estate)
function renderList(items, container, buyFunction) {
    container.innerHTML = '';
    for (const key in items) {
        const item = items[key];
        const cost = getCost(item.baseCost, item.costMult, item.level);
        
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <div class="item-info">
                <span class="item-name"><i class="fa-solid ${item.icon}"></i> ${item.name} (Lvl ${item.level})</span>
                <span class="item-desc">${item.desc}</span>
                <span class="item-cost">$${formatMoney(cost)}</span>
            </div>
            <button class="buy-btn" ${state.money < cost ? 'disabled' : ''} onclick="${buyFunction.name}('${key}')">Buy</button>
        `;
        container.appendChild(div);
    }
}

// Render Shop
function renderShop() {
    shopList.innerHTML = '';
    for (const key in state.shop) {
        const item = state.shop[key];
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <div class="item-info">
                <span class="item-name"><i class="fa-solid ${item.icon}"></i> ${item.name}</span>
                <span class="item-desc">${item.desc}</span>
                <span class="item-cost">${item.owned ? 'Owned' : '$' + formatMoney(item.cost)}</span>
            </div>
            <button class="buy-btn" ${state.money < item.cost || item.owned ? 'disabled' : ''} onclick="buyShopItem('${key}')">
                ${item.owned ? 'Owned' : 'Buy'}
            </button>
        `;
        shopList.appendChild(div);
    }
}

// Render Stocks
function renderStocks() {
    stockList.innerHTML = '';
    for (const key in state.stocks) {
        const stock = state.stocks[key];
        const prevPrice = stock.history.length > 1 ? stock.history[stock.history.length - 2] : stock.price;
        const priceClass = stock.price >= prevPrice ? 'price-up' : 'price-down';
        const arrow = stock.price >= prevPrice ? '▲' : '▼';

        // Generate sparkline HTML
        let sparklineHTML = '<div class="sparkline">';
        if (stock.history.length > 0) {
            const maxPrice = Math.max(...stock.history, stock.price);
            const minPrice = Math.min(...stock.history, stock.price);
            const range = maxPrice - minPrice || 1;
            
            const allPoints = [...stock.history];
            if (allPoints.length < 10) {
                // Pad with current price if history is short
                while(allPoints.length < 10) allPoints.unshift(allPoints[0]);
            }
            
            allPoints.forEach(p => {
                const heightPercent = ((p - minPrice) / range) * 100;
                sparklineHTML += `<div class="spark-bar" style="height: ${Math.max(10, heightPercent)}%"></div>`;
            });
        }
        sparklineHTML += '</div>';

        const div = document.createElement('div');
        div.className = 'stock-item';
        div.innerHTML = `
            <div class="stock-header">
                <div class="item-info">
                    <span class="item-name">${stock.name}</span>
                    <span class="item-desc">Owned: ${stock.owned}</span>
                </div>
                <span class="item-cost ${priceClass}">$${formatMoney(stock.price)} ${arrow}</span>
            </div>
            ${sparklineHTML}
            <div class="stock-actions">
                <button class="btn-buy" ${state.money < stock.price ? 'disabled' : ''} onclick="buyStock('${key}')">Buy</button>
                <button class="btn-sell" ${stock.owned <= 0 ? 'disabled' : ''} onclick="sellStock('${key}')">Sell</button>
            </div>
        `;
        stockList.appendChild(div);
    }
}

// Render Rewards
function renderRewards() {
    rewardsList.innerHTML = '';
    for (const key in state.rewards) {
        const reward = state.rewards[key];
        const div = document.createElement('div');
        div.className = 'item';
        div.style.opacity = reward.unlocked ? '1' : '0.5';
        div.innerHTML = `
            <div class="item-info">
                <span class="item-name"><i class="fa-solid ${reward.icon}"></i> ${reward.name}</span>
                <span class="item-desc">${reward.desc}</span>
            </div>
            <span style="color: ${reward.unlocked ? 'var(--primary)' : 'var(--danger)'}; font-weight: bold;">
                ${reward.unlocked ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-lock"></i>'}
            </span>
        `;
        rewardsList.appendChild(div);
    }
}

// Buy Functions
function buyUpgrade(key) {
    const item = state.upgrades[key];
    const cost = getCost(item.baseCost, item.costMult, item.level);
    if (state.money >= cost) {
        state.money -= cost;
        item.level++;
        recalculateStats();
        updateUI();
    }
}

function buyCompany(key) {
    const item = state.companies[key];
    const cost = getCost(item.baseCost, item.costMult, item.level);
    if (state.money >= cost) {
        state.money -= cost;
        item.level++;
        recalculateStats();
        updateUI();
    }
}

function buyRealEstate(key) {
    const item = state.realEstate[key];
    const cost = getCost(item.baseCost, item.costMult, item.level);
    if (state.money >= cost) {
        state.money -= cost;
        item.level++;
        recalculateStats();
        updateUI();
    }
}

function buyShopItem(key) {
    const item = state.shop[key];
    if (state.money >= item.cost && !item.owned) {
        state.money -= item.cost;
        item.owned = true;
        updateUI();
    }
}

function buyStock(key) {
    const stock = state.stocks[key];
    if (state.money >= stock.price) {
        state.money -= stock.price;
        stock.owned++;
        updateUI();
    }
}

function sellStock(key) {
    const stock = state.stocks[key];
    if (stock.owned > 0) {
        state.money += stock.price;
        stock.owned--;
        updateUI();
    }
}

// Recalculate Stats
function recalculateStats() {
    // Money per click
    let mpc = 1;
    for (const key in state.upgrades) {
        mpc += state.upgrades[key].level * state.upgrades[key].effect;
    }
    state.moneyPerClick = mpc;

    // Money per second
    let mps = 0;
    for (const key in state.companies) {
        mps += state.companies[key].level * state.companies[key].effect;
    }
    for (const key in state.realEstate) {
        mps += state.realEstate[key].level * state.realEstate[key].effect;
    }
    state.moneyPerSecond = mps;
}

// Check Titles and Rewards
function checkTitles() {
    // Titles
    if (state.money >= 1000000000) state.title = "Billionaire";
    else if (state.money >= 1000000) state.title = "Millionaire";
    else if (state.money >= 100000) state.title = "Rich";
    else if (state.money >= 10000) state.title = "Wealthy";
    else if (state.money >= 1000) state.title = "Comfortable";
    else state.title = "Broke";

    // Rewards
    for (const key in state.rewards) {
        if (!state.rewards[key].unlocked && state.money >= state.rewards[key].req) {
            state.rewards[key].unlocked = true;
        }
    }
}

// Stock Market Logic
function updateStocks() {
    for (const key in state.stocks) {
        const stock = state.stocks[key];
        stock.history.push(stock.price);
        if (stock.history.length > 10) stock.history.shift();

        // Random fluctuation between -10% and +10%
        const change = 1 + (Math.random() * 0.2 - 0.1);
        stock.price = Math.max(1, Math.floor(stock.price * change));
    }
    updateUI();
}

// Event Listeners
bankCard.addEventListener('click', (e) => {
    state.money += state.moneyPerClick;
    
    // Create floating text
    const floatText = document.createElement('div');
    floatText.className = 'floating-text';
    floatText.innerText = '+$' + formatMoney(state.moneyPerClick);
    
    // Get card position to center the text if clicked via keyboard, otherwise use mouse coords
    const rect = bankCard.getBoundingClientRect();
    const x = e.clientX || (rect.left + rect.width / 2);
    const y = e.clientY || (rect.top + rect.height / 2);
    
    floatText.style.left = x + 'px';
    floatText.style.top = y + 'px';
    
    document.body.appendChild(floatText);

    setTimeout(() => {
        floatText.remove();
    }, 1000);

    updateUI();
});

// Game Loop
setInterval(() => {
    state.money += state.moneyPerSecond;
    updateUI();
    saveGame();
}, 1000);

// Stock Market Loop
setInterval(updateStocks, 5000);

// Save and Load
function saveGame() {
    state.lastSaved = Date.now();
    localStorage.setItem('bankCardClickerSave', JSON.stringify(state));
}

function loadGame() {
    const saved = localStorage.getItem('bankCardClickerSave');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(state, parsed);
        
        // Calculate offline earnings
        if (state.lastSaved) {
            const now = Date.now();
            const diffSeconds = Math.floor((now - state.lastSaved) / 1000);
            if (diffSeconds > 0 && state.moneyPerSecond > 0) {
                const offlineEarnings = diffSeconds * state.moneyPerSecond;
                state.money += offlineEarnings;
                alert(`Welcome back! You earned $${formatMoney(offlineEarnings)} while you were offline.`);
            }
        }
    }
}

// Initial Render
loadGame();
recalculateStats();
updateUI();
