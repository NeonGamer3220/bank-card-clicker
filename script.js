const state = {
    money: 0,
    moneyPerClick: 1,
    moneyPerSecond: 0,
    title: "Broke",
    lastSaved: Date.now(),
    upgrades: {
        betterPlastic: { level: 0, baseCost: 50, costMult: 1.5, effect: 1, name: "Better Plastic", desc: "+$1/click" },
        goldChip: { level: 0, baseCost: 500, costMult: 1.8, effect: 10, name: "Gold Chip", desc: "+$10/click" },
        platinumCard: { level: 0, baseCost: 5000, costMult: 2, effect: 100, name: "Platinum Card", desc: "+$100/click" },
        blackCard: { level: 0, baseCost: 100000, costMult: 2.5, effect: 2500, name: "Black Card", desc: "+$2,500/click" }
    },
    companies: {
        lemonadeStand: { level: 0, baseCost: 100, costMult: 1.15, effect: 1, name: "Lemonade Stand", desc: "+$1/sec" },
        onlineStore: { level: 0, baseCost: 1000, costMult: 1.2, effect: 15, name: "Online Store", desc: "+$15/sec" },
        techStartup: { level: 0, baseCost: 15000, costMult: 1.25, effect: 250, name: "Tech Startup", desc: "+$250/sec" },
        megaCorp: { level: 0, baseCost: 500000, costMult: 1.3, effect: 10000, name: "Mega Corp", desc: "+$10,000/sec" }
    },
    realEstate: {
        apartment: { level: 0, baseCost: 5000, costMult: 1.2, effect: 50, name: "Apartment", desc: "+$50/sec" },
        house: { level: 0, baseCost: 50000, costMult: 1.25, effect: 600, name: "House", desc: "+$600/sec" },
        mansion: { level: 0, baseCost: 1000000, costMult: 1.3, effect: 15000, name: "Mansion", desc: "+$15,000/sec" },
        privateIsland: { level: 0, baseCost: 50000000, costMult: 1.4, effect: 1000000, name: "Private Island", desc: "+$1,000,000/sec" }
    },
    shop: {
        usedCar: { owned: false, cost: 10000, name: "Used Car", desc: "A rusty old car." },
        sportsCar: { owned: false, cost: 250000, name: "Sports Car", desc: "Vroom vroom!" },
        yacht: { owned: false, cost: 5000000, name: "Yacht", desc: "Sail the seas." },
        privateJet: { owned: false, cost: 50000000, name: "Private Jet", desc: "Fly anywhere." }
    },
    stocks: {
        tech: { price: 100, owned: 0, name: "Tech Co.", history: [] },
        food: { price: 50, owned: 0, name: "Food Inc.", history: [] },
        energy: { price: 200, owned: 0, name: "Energy Corp.", history: [] }
    },
    rewards: {
        firstThousand: { unlocked: false, req: 1000, name: "Thousandaire", desc: "Reach $1,000" },
        firstMillion: { unlocked: false, req: 1000000, name: "Millionaire", desc: "Reach $1,000,000" },
        firstBillion: { unlocked: false, req: 1000000000, name: "Billionaire", desc: "Reach $1,000,000,000" }
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
                <span class="item-name">${item.name} (Lvl ${item.level})</span>
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
                <span class="item-name">${item.name}</span>
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
        const prevPrice = stock.history.length > 0 ? stock.history[stock.history.length - 1] : stock.price;
        const priceClass = stock.price >= prevPrice ? 'price-up' : 'price-down';
        const arrow = stock.price >= prevPrice ? '▲' : '▼';

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
                <span class="item-name">${reward.name}</span>
                <span class="item-desc">${reward.desc}</span>
            </div>
            <span style="color: ${reward.unlocked ? '#4caf50' : '#f44336'}">${reward.unlocked ? 'Unlocked' : 'Locked'}</span>
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
