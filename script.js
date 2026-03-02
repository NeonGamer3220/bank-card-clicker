const state = {
    damage: 0,
    damagePerClick: 1,
    dps: 0,
    rank: "Novice",
    lastSaved: Date.now(),
    playerName: "Player",
    activeEvent: null,
    eventEndTime: 0,
    adminPanelEnabled: false,
    upgrades: {
        sharpStone: { level: 0, baseCost: 50, costMult: 1.5, effect: 1, name: "Sharp Stone", desc: "+1 damage/click", icon: "fa-cubes-stacked" },
        ironIngot: { level: 0, baseCost: 500, costMult: 1.8, effect: 10, name: "Iron Ingot", desc: "+10 damage/click", icon: "fa-cube" },
        goldNugget: { level: 0, baseCost: 5000, costMult: 2, effect: 100, name: "Gold Nugget", desc: "+100 damage/click", icon: "fa-coins" },
        netherite: { level: 0, baseCost: 100000, costMult: 2.5, effect: 2500, name: "Netherite Scrap", desc: "+2,500 damage/click", icon: "fa-fire" },
        diamond: { level: 0, baseCost: 5000000, costMult: 3, effect: 50000, name: "Diamond", desc: "+50,000 damage/click", icon: "fa-gem" },
        beacon: { level: 0, baseCost: 250000000, costMult: 3.5, effect: 1000000, name: "Beacon", desc: "+1,000,000 damage/click", icon: "fa-lightbulb" },
        // New Enchantments
        efficiency: { level: 0, baseCost: 75, costMult: 1.6, effect: 2, name: "Efficiency", desc: "+2 damage/click", icon: "fa-bolt" },
        unbreaking: { level: 0, baseCost: 150, costMult: 1.7, effect: 5, name: "Unbreaking", desc: "+5 damage/click", icon: "fa-shield-halved" },
        sharpness: { level: 0, baseCost: 1000, costMult: 1.9, effect: 25, name: "Sharpness", desc: "+25 damage/click", icon: "fa-knife" },
        power: { level: 0, baseCost: 7500, costMult: 2.1, effect: 150, name: "Power", desc: "+150 damage/click", icon: "fa-fist-raised" },
        protection: { level: 0, baseCost: 25000, costMult: 2.2, effect: 500, name: "Protection", desc: "+500 damage/click", icon: "fa-helmet-safety" },
        fortune: { level: 0, baseCost: 75000, costMult: 2.3, effect: 1500, name: "Fortune", desc: "+1,500 damage/click", icon: "fa-sack-dollar" },
        looting: { level: 0, baseCost: 250000, costMult: 2.4, effect: 5000, name: "Looting", desc: "+5,000 damage/click", icon: "fa-box-treasure" },
        silkTouch: { level: 0, baseCost: 500000, costMult: 2.6, effect: 15000, name: "Silk Touch", desc: "+15,000 damage/click", icon: "fa-hand-sparkles" },
        infinity: { level: 0, baseCost: 1000000, costMult: 2.7, effect: 30000, name: "Infinity", desc: "+30,000 damage/click", icon: "fa-infinity" },
        mending: { level: 0, baseCost: 5000000, costMult: 2.8, effect: 75000, name: "Mending", desc: "+75,000 damage/click", icon: "fa-hammer" },
        flame: { level: 0, baseCost: 10000000, costMult: 2.9, effect: 150000, name: "Flame", desc: "+150,000 damage/click", icon: "fa-fire-flame-curved" }
    },
    companies: {
        zombie: { level: 0, baseCost: 100, costMult: 1.15, effect: 1, name: "Zombie", desc: "+1 DPS", icon: "fa-biohazard" },
        skeleton: { level: 0, baseCost: 500, costMult: 1.18, effect: 5, name: "Skeleton", desc: "+5 DPS", icon: "fa-bone" },
        spider: { level: 0, baseCost: 2500, costMult: 1.2, effect: 30, name: "Spider", desc: "+30 DPS", icon: "fa-spider" },
        creeper: { level: 0, baseCost: 10000, costMult: 1.22, effect: 150, name: "Creeper", desc: "+150 DPS", icon: "fa-explosion" },
        Enderman: { level: 0, baseCost: 50000, costMult: 1.25, effect: 800, name: "Enderman", desc: "+800 DPS", icon: "fa-ghost" },
        Witch: { level: 0, baseCost: 250000, costMult: 1.28, effect: 4500, name: "Witch", desc: "+4,500 DPS", icon: "fa-hat-wizard" },
        Piglin: { level: 0, baseCost: 1500000, costMult: 1.3, effect: 30000, name: "Piglin", desc: "+30,000 DPS", icon: "fa-piggy-bank" },
        Warden: { level: 0, baseCost: 10000000, costMult: 1.35, effect: 250000, name: "Warden", desc: "+250,000 DPS", icon: "fa-wave-square" },
        Dragon: { level: 0, baseCost: 100000000, costMult: 1.4, effect: 3000000, name: "Ender Dragon", desc: "+3,000,000 DPS", icon: "fa-dragon" }
    },
    realEstate: {
        plains: { level: 0, baseCost: 1000, costMult: 1.15, effect: 10, name: "Plains", desc: "+10 DPS", icon: "fa-seedling" },
        forest: { level: 0, baseCost: 5000, costMult: 1.18, effect: 75, name: "Forest", desc: "+75 DPS", icon: "fa-tree" },
        desert: { level: 0, baseCost: 15000, costMult: 1.2, effect: 200, name: "Desert", desc: "+200 DPS", icon: "fa-sun" },
        taiga: { level: 0, baseCost: 50000, costMult: 1.22, effect: 800, name: "Taiga", desc: "+800 DPS", icon: "fa-snowflake" },
        jungle: { level: 0, baseCost: 100000, costMult: 1.25, effect: 1500, name: "Jungle", desc: "+1,500 DPS", icon: "fa-leaf" },
        swamp: { level: 0, baseCost: 350000, costMult: 1.27, effect: 5000, name: "Swamp", desc: "+5,000 DPS", icon: "fa-droplet" },
        mountains: { level: 0, baseCost: 2500000, costMult: 1.3, effect: 40000, name: "Mountains", desc: "+40,000 DPS", icon: "fa-mountain" },
        mushroomIsland: { level: 0, baseCost: 10000000, costMult: 1.32, effect: 150000, name: "Mushroom Island", desc: "+150,000 DPS", icon: "fa-mushroom" },
        nether: { level: 0, baseCost: 50000000, costMult: 1.35, effect: 1000000, name: "The Nether", desc: "+1,000,000 DPS", icon: "fa-fire-burner" },
        end: { level: 0, baseCost: 500000000, costMult: 1.4, effect: 15000000, name: "The End", desc: "+15,000,000 DPS", icon: "fa-moon" },
        outerEnd: { level: 0, baseCost: 10000000000, costMult: 1.5, effect: 500000000, name: "Outer End", desc: "+500,000,000 DPS", icon: "fa-stars" },
        void: { level: 0, baseCost: 100000000000, costMult: 1.6, effect: 5000000000, name: "The Void", desc: "+5B DPS", icon: "fa-infinity" }
    },
    shop: {
        woodenSword: { owned: false, cost: 10000, name: "Wooden Sword", desc: "Basic weapon.", icon: "fa-khanda" },
        stoneSword: { owned: false, cost: 50000, name: "Stone Sword", desc: "Sturdy option.", icon: "fa-khanda" },
        ironSword: { owned: false, cost: 250000, name: "Iron Sword", desc: "Reliable weapon.", icon: "fa-khanda" },
        goldSword: { owned: false, cost: 1500000, name: "Gold Sword", desc: "Shiny but weak.", icon: "fa-khanda" },
        diamondSword: { owned: false, cost: 10000000, name: "Diamond Sword", desc: "Legendary blade.", icon: "fa-gem" },
        netheriteSword: { owned: false, cost: 2500000, name: "Netherite Sword", desc: "The ultimate blade.", icon: "fa-fire" },
        bow: { owned: false, cost: 50000000, name: "Bow", desc: "Range attack.", icon: "fa-bullseye" },
        crossbow: { owned: false, cost: 200000000, name: "Crossbow", desc: "Powerful ranged.", icon: "fa-crosshairs" },
        trident: { owned: false, cost: 50000000, name: "Trident", desc: "Weapon of the ocean.", icon: "fa-anchor" },
        elytra: { owned: false, cost: 500000000, name: "Elytra", desc: "Fly through the skies.", icon: "fa-paper-plane" },
        horse: { owned: false, cost: 2000000000, name: "Horse", desc: "Ride into battle.", icon: "fa-horse" },
        wolf: { owned: false, cost: 5000000000, name: "Tamed Wolf", desc: "Loyal companion.", icon: "fa-dog" },
        ironGolem: { owned: false, cost: 25000000000, name: "Iron Golem", desc: "Your own protector.", icon: "fa-robot" },
        shulkerBox: { owned: false, cost: 50000000000, name: "Shulker Box", desc: "Portable storage.", icon: "fa-box" },
        elytraWings: { owned: false, cost: 1000000000000, name: "Elytra Wings", desc: "Phantom wings!", icon: "fa-feather-pointed" }
    },
    stocks: {
        efficiency: { price: 100, owned: 0, name: "Efficiency Book", history: [] },
        unbreaking: { price: 50, owned: 0, name: "Unbreaking Book", history: [] },
        mending: { price: 200, owned: 0, name: "Mending Book", history: [] },
        sharpness: { price: 500, owned: 0, name: "Sharpness Book", history: [] },
        power: { price: 1000, owned: 0, name: "Power Book", history: [] },
        protection: { price: 2500, owned: 0, name: "Protection Book", history: [] },
        fortune: { price: 3000, owned: 0, name: "Fortune Book", history: [] },
        looting: { price: 4000, owned: 0, name: "Looting Book", history: [] },
        silkTouch: { price: 150, owned: 0, name: "Silk Touch Book", history: [] },
        infinity: { price: 80, owned: 0, name: "Infinity Book", history: [] }
    },
    rewards: {
        first10: { unlocked: false, req: 10, name: "First Swing", desc: "Deal 10 damage", icon: "fa-hand-fist" },
        first100: { unlocked: false, req: 100, name: "Mob Hunter", desc: "Deal 100 damage", icon: "fa-skull" },
        firstThousand: { unlocked: false, req: 1000, name: "Adventurer", desc: "Deal 1,000 damage", icon: "fa-compass" },
        first10k: { unlocked: false, req: 10000, name: "Warrior", desc: "Deal 10,000 damage", icon: "fa-shield-halved" },
        first100k: { unlocked: false, req: 100000, name: "Knight", desc: "Deal 100,000 damage", icon: "fa-chess-knight" },
        firstMillion: { unlocked: false, req: 1000000, name: "Hero", desc: "Deal 1M damage", icon: "fa-medal" },
        first10M: { unlocked: false, req: 10000000, name: "Champion", desc: "Deal 10M damage", icon: "fa-trophy" },
        first100M: { unlocked: false, req: 100000000, name: "Legend", desc: "Deal 100M damage", icon: "fa-crown" },
        firstBillion: { unlocked: false, req: 1000000000, name: "Godslayer", desc: "Deal 1B damage", icon: "fa-dragon" },
        first10B: { unlocked: false, req: 10000000000, name: "Universal", desc: "Deal 10B damage", icon: "fa-globe" },
        firstTrillion: { unlocked: false, req: 1000000000000, name: "Omnipotent", desc: "Deal 1T damage", icon: "fa-universe" }
    }
};

// Supabase Config - wait for library to load
let supabase = null;
const initSupabase = () => {
    if (window.supabase) {
        const SUPABASE_URL = 'https://szmerwsuwbaljeedrlxi.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bWVyd3N1d2JhbGplZWRybHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzNzU0MTEsImV4cCI6MjA4Nzk1MTQxMX0.YjUs1aWwsIBETh57zk8G5_Z9wEPlsyV0chiGUmLqLgw';
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSupabase);
} else {
    initSupabase();
}

// DOM Elements
const damageEl = document.getElementById('damage');
const dpcEl = document.getElementById('damage-per-click');
const dpsEl = document.getElementById('damage-per-second');
const titleEl = document.getElementById('current-title');
const maceEl = document.getElementById('mace');

const upgradesList = document.getElementById('upgrades-list');
const companiesList = document.getElementById('companies-list');
const realEstateList = document.getElementById('real-estate-list');
const shopList = document.getElementById('shop-list');
const stockList = document.getElementById('stock-list');
const rewardsList = document.getElementById('rewards-list');
const leaderboardList = document.getElementById('leaderboard-list');

// Format numbers
function formatDamage(num) {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return Math.floor(num).toLocaleString();
}

// Update UI
function updateUI() {
    checkTitles();
    damageEl.innerText = formatDamage(state.damage);
    dpcEl.innerText = formatDamage(state.damagePerClick);
    dpsEl.innerText = formatDamage(state.dps);
    titleEl.innerText = state.rank;

    // Render Admin Button if enabled
    const statsBar = document.querySelector('.stats-bar');
    const existingAdminBtn = document.getElementById('admin-btn');
    
    if (state.adminPanelEnabled && !existingAdminBtn) {
        const adminBtn = document.createElement('button');
        adminBtn.id = 'admin-btn';
        adminBtn.innerHTML = '<i class="fa-solid fa-user-gear"></i> Admin';
        adminBtn.style.marginLeft = '20px';
        adminBtn.style.background = '#ef4444';
        adminBtn.style.border = 'none';
        adminBtn.style.color = 'white';
        adminBtn.style.padding = '8px 15px';
        adminBtn.style.borderRadius = '5px';
        adminBtn.style.cursor = 'pointer';
        adminBtn.style.fontWeight = 'bold';
        
        adminBtn.onclick = () => {
            const action = prompt("Admin Panel Options:\n1. Add Damage\n2. Max All Upgrades\n3. Reset Game\n4. Admin Abuse Panel\n\nEnter 1, 2, 3, or 4:");
             if (action == '1') {
                 const amount = prompt("Enter amount to add:");
                 if(amount && !isNaN(amount)) {
                     state.damage += parseInt(amount);
                     updateUI();
                 }
             } else if (action == '4') {
                // Admin Abuse Panel
                const abuseAction = prompt("ADMIN ABUSE PANEL:\n1. Start 5x Damage Event\n2. Start 10x Damage Event\n3. Reset Progress (Set damage to 0)\n4. Gift Everyone (Give all players 1M)\n\nEnter 1, 2, 3, or 4:");
                
                if (abuseAction == '1') {
                    triggerGlobalEvent("5x DAMAGE!!!", "damage", 5);
                } else if (abuseAction == '2') {
                    triggerGlobalEvent("10x DAMAGE!!!", "damage", 10);
                } else if (abuseAction == '3') {
                    state.damage = 0;
                    alert("Progress reset! Damage set to 0.");
                } else if (abuseAction == '4') {
                    alert("Gifted everyone 1M!");
                    // This would require a server to actually work
                }
                updateUI();
             } else if (action == '2') {
                 // Max out upgrades
                 for (const key in state.upgrades) {
                     state.upgrades[key].level = MAX_LEVEL;
                 }
                 for (const key in state.companies) {
                     state.companies[key].level = MAX_LEVEL;
                 }
                 for (const key in state.realEstate) {
                     state.realEstate[key].level = MAX_LEVEL;
                 }
                 recalculateStats();
                 updateUI();
                 alert("Upgrades maxed to level " + MAX_LEVEL + "!");
             } else if (action == '3') {
                // Clear all local storage
                localStorage.clear();
                // Reset state manually without reloading immediately
                state.damage = 0;
                state.damagePerClick = 1;
                state.dps = 0;
                state.activeEvent = null;
                state.eventEndTime = 0;
                state.adminPanelEnabled = false;
                
                // Reset upgrades, companies, real estate
                for (const key in state.upgrades) state.upgrades[key].level = 0;
                for (const key in state.companies) state.companies[key].level = 0;
                for (const key in state.realEstate) state.realEstate[key].level = 0;
                for (const key in state.shop) state.shop[key].owned = false;
                
                // Clear save and leaderboard
                localStorage.removeItem('maceClickerSave');
                localStorage.removeItem('maceClickerLeaderboard');
                
                recalculateStats();
                updateUI();
                alert("Game Reset!");
            }
        };
        
        statsBar.appendChild(adminBtn);
    }

    renderList(state.upgrades, upgradesList, buyUpgrade);
    renderList(state.companies, companiesList, buyCompany);
    renderList(state.realEstate, realEstateList, buyRealEstate);
    renderShop();
    renderStocks();
    renderRewards();
    renderLeaderboard();
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
                <span class="item-cost">⚔️ ${formatDamage(cost)}</span>
            </div>
            <button class="buy-btn" ${state.damage < cost ? 'disabled' : ''} onclick="${buyFunction.name}('${key}')">Buy</button>
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
                <span class="item-cost">${item.owned ? 'Owned' : '⚔️ ' + formatDamage(item.cost)}</span>
            </div>
            <button class="buy-btn" ${state.damage < item.cost || item.owned ? 'disabled' : ''} onclick="buyShopItem('${key}')">
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
                <span class="item-cost ${priceClass}">⚔️ ${formatDamage(stock.price)} ${arrow}</span>
            </div>
            ${sparklineHTML}
            <div class="stock-actions">
                <button class="btn-buy" ${state.damage < stock.price ? 'disabled' : ''} onclick="buyStock('${key}')">Buy</button>
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

function renderLeaderboard() {
    const leaderboard = updateLeaderboard();
    leaderboardList.innerHTML = '';
    leaderboard.forEach((player, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.style.opacity = player.name === state.playerName ? '1' : '0.7';
        div.innerHTML = `
            <div class="item-info">
                <span class="item-name"><i class="fa-solid fa-user"></i> #${index + 1} ${player.name}</span>
                <span class="item-desc">${player.name === state.playerName ? 'You' : ''}</span>
            </div>
            <span style="color: var(--primary); font-weight: bold;">⚔️ ${formatDamage(player.damage)}</span>
        `;
        leaderboardList.appendChild(div);
    });
}

// Buy Functions
const MAX_LEVEL = 250;

function buyUpgrade(key) {
    const item = state.upgrades[key];
    if (item.level >= MAX_LEVEL) return;
    const cost = getCost(item.baseCost, item.costMult, item.level);
    if (state.damage >= cost) {
        state.damage -= cost;
        item.level++;
        recalculateStats();
        updateUI();
    }
}

function buyCompany(key) {
    const item = state.companies[key];
    if (item.level >= MAX_LEVEL) return;
    const cost = getCost(item.baseCost, item.costMult, item.level);
    if (state.damage >= cost) {
        state.damage -= cost;
        item.level++;
        recalculateStats();
        updateUI();
    }
}

function buyRealEstate(key) {
    const item = state.realEstate[key];
    if (item.level >= MAX_LEVEL) return;
    const cost = getCost(item.baseCost, item.costMult, item.level);
    if (state.damage >= cost) {
        state.damage -= cost;
        item.level++;
        recalculateStats();
        updateUI();
    }
}

function buyShopItem(key) {
    const item = state.shop[key];
    if (state.damage >= item.cost && !item.owned) {
        state.damage -= item.cost;
        item.owned = true;
        updateUI();
    }
}

function buyStock(key) {
    const stock = state.stocks[key];
    if (state.damage >= stock.price) {
        state.damage -= stock.price;
        stock.owned++;
        updateUI();
    }
}

function sellStock(key) {
    const stock = state.stocks[key];
    if (stock.owned > 0) {
        state.damage += stock.price;
        stock.owned--;
        updateUI();
    }
}

// Recalculate Stats
function recalculateStats() {
    // Damage per click
    let dpc = 1;
    for (const key in state.upgrades) {
        dpc += state.upgrades[key].level * state.upgrades[key].effect;
    }
    state.damagePerClick = dpc;

    // DPS (damage per second)
    let dps = 0;
    for (const key in state.companies) {
        dps += state.companies[key].level * state.companies[key].effect;
    }
    for (const key in state.realEstate) {
        dps += state.realEstate[key].level * state.realEstate[key].effect;
    }
    state.dps = dps;
}

// Check Titles and Rewards
function checkTitles() {
    // Ranks
    if (state.damage >= 1000000000000) state.rank = "Omnipotent";
    else if (state.damage >= 1000000000) state.rank = "Universal";
    else if (state.damage >= 100000000) state.rank = "Godslayer";
    else if (state.damage >= 10000000) state.rank = "Legend";
    else if (state.damage >= 1000000) state.rank = "Champion";
    else if (state.damage >= 100000) state.rank = "Hero";
    else if (state.damage >= 10000) state.rank = "Knight";
    else if (state.damage >= 1000) state.rank = "Warrior";
    else if (state.damage >= 100) state.rank = "Adventurer";
    else if (state.damage >= 10) state.rank = "Mob Hunter";
    else state.rank = "Novice";

    // Rewards
    for (const key in state.rewards) {
        if (!state.rewards[key].unlocked && state.damage >= state.rewards[key].req) {
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
maceEl.addEventListener('click', (e) => {
    state.damage += state.damagePerClick;
    
    // Create floating text
    const floatText = document.createElement('div');
    floatText.className = 'floating-text';
    floatText.innerText = '+' + formatDamage(state.damagePerClick) + ' ⚔️';
    
    // Get mace position to center the text if clicked via keyboard, otherwise use mouse coords
    const rect = maceEl.getBoundingClientRect();
    const x = e.clientX || (rect.left + rect.width / 2);
    const y = e.clientY || (rect.top + rect.height / 2);
    
    floatText.style.left = x + 'px';
    floatText.style.top = y + 'px';
    document.body.appendChild(floatText);
    
    // Animate and remove
    floatText.animate([
        { transform: 'translateY(0) scale(1)', opacity: 1 },
        { transform: 'translateY(-80px) scale(1.5)', opacity: 0 }
    ], {
        duration: 800,
        easing: 'ease-out'
    }).onfinish = () => floatText.remove();
    
    updateUI();
});

// Also allow spacebar to click
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        state.damage += state.damagePerClick;
        
        // Create floating text
        const floatText = document.createElement('div');
        floatText.className = 'floating-text';
        floatText.innerText = '+' + formatDamage(state.damagePerClick) + ' ⚔️';
        
        const rect = maceEl.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        floatText.style.left = x + 'px';
        floatText.style.top = y + 'px';
        document.body.appendChild(floatText);
        
        floatText.animate([
            { transform: 'translateY(0) scale(1)', opacity: 1 },
            { transform: 'translateY(-80px) scale(1.5)', opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => floatText.remove();
        
        updateUI();
    }
});

// Passive income (DPS)
setInterval(() => {
    if (state.dps > 0) {
        state.damage += state.dps;
        updateUI();
    }
}, 1000);

// Stock market update
setInterval(() => {
    updateStocks();
}, 5000);

// Save/Load System
function saveGame() {
    const saveData = {
        damage: state.damage,
        damagePerClick: state.damagePerClick,
        dps: state.dps,
        rank: state.rank,
        upgrades: state.upgrades,
        companies: state.companies,
        realEstate: state.realEstate,
        shop: state.shop,
        stocks: state.stocks,
        rewards: state.rewards,
        playerName: state.playerName,
        lastSaved: Date.now()
    };
    localStorage.setItem('maceClickerSave', JSON.stringify(saveData));
}

function loadGame() {
    const saved = localStorage.getItem('maceClickerSave');
    if (saved) {
        const saveData = JSON.parse(saved);
        state.damage = saveData.damage || 0;
        state.damagePerClick = saveData.damagePerClick || 1;
        state.dps = saveData.dps || 0;
        state.rank = saveData.rank || "Novice";
        state.playerName = saveData.playerName || "Player";
        
        // Load upgrades
        if (saveData.upgrades) {
            for (const key in saveData.upgrades) {
                if (state.upgrades[key]) {
                    state.upgrades[key].level = saveData.upgrades[key].level;
                }
            }
        }
        
        // Load companies
        if (saveData.companies) {
            for (const key in saveData.companies) {
                if (state.companies[key]) {
                    state.companies[key].level = saveData.companies[key].level;
                }
            }
        }
        
        // Load real estate
        if (saveData.realEstate) {
            for (const key in saveData.realEstate) {
                if (state.realEstate[key]) {
                    state.realEstate[key].level = saveData.realEstate[key].level;
                }
            }
        }
        
        // Load shop
        if (saveData.shop) {
            for (const key in saveData.shop) {
                if (state.shop[key]) {
                    state.shop[key].owned = saveData.shop[key].owned;
                }
            }
        }
        
        // Load stocks
        if (saveData.stocks) {
            for (const key in saveData.stocks) {
                if (state.stocks[key]) {
                    state.stocks[key].price = saveData.stocks[key].price;
                    state.stocks[key].owned = saveData.stocks[key].owned;
                }
            }
        }
        
        // Load rewards
        if (saveData.rewards) {
            for (const key in saveData.rewards) {
                if (state.rewards[key]) {
                    state.rewards[key].unlocked = saveData.rewards[key].unlocked;
                }
            }
        }
        
        // Calculate offline earnings
        if (saveData.lastSaved) {
            const timePassed = (Date.now() - saveData.lastSaved) / 1000;
            const offlineEarnings = Math.floor(timePassed * state.dps);
            if (offlineEarnings > 0) {
                state.damage += offlineEarnings;
                console.log(`Earned ${offlineEarnings} damage while offline!`);
            }
        }
        
        recalculateStats();
    }
}

// Auto-save every 30 seconds
setInterval(saveGame, 30000);

// Save on page close
window.addEventListener('beforeunload', saveGame);

// Leaderboard System
function updateLeaderboard() {
    let leaderboard = JSON.parse(localStorage.getItem('maceClickerLeaderboard') || '[]');
    
    // Add current player
    const existingIndex = leaderboard.findIndex(p => p.name === state.playerName);
    if (existingIndex >= 0) {
        leaderboard[existingIndex].damage = state.damage;
    } else {
        leaderboard.push({ name: state.playerName, damage: state.damage });
    }
    
    // Sort by damage (descending)
    leaderboard.sort((a, b) => b.damage - a.damage);
    
    // Keep top 10
    leaderboard = leaderboard.slice(0, 10);
    
    localStorage.setItem('maceClickerLeaderboard', JSON.stringify(leaderboard));
    return leaderboard;
}

// Redeem Code System
function redeemCode(code) {
    const codes = {
        'MACE10': { damage: 10, name: "10 Damage" },
        'MACE100': { damage: 100, name: "100 Damage" },
        'MACE1K': { damage: 1000, name: "1K Damage" },
        'MACE10K': { damage: 10000, name: "10K Damage" },
        'MACE100K': { damage: 100000, name: "100K Damage" },
        'VIP': { damage: 1000000, name: "VIP - 1M Damage" },
        'ADMIN': { damage: 100000000, name: "Admin - 100M Damage", admin: true },
        'OMEGA': { damage: 1000000000, name: "Omega - 1B Damage" },
        'GODMODE': { damage: 10000000000, name: "God Mode - 10B Damage" },
        // Secret Codes
        'FOXYGOATED': { damage: 50000, name: "Foxygoated - 50K Damage" },
        'NEONGAMERHUNTHEBEST': { damage: 0, name: "NeonGamerHUNTheBest - Admin Panel", admin: true },
        'RELEASE': { damage: 5000, name: "RELEASE - 5K Damage" },
        'MACEATTACK': { damage: 85000, name: "MACEATTACK - 85K Damage" },
        'UPDATE1': { damage: 0, name: "update1 - 2x Damage for 20 seconds", multiplier: 2, duration: 20000 }
    };
    
    if (codes[code.toUpperCase()]) {
        const reward = codes[code.toUpperCase()];
        state.damage += reward.damage;
        alert(`Code redeemed! +${reward.name}`);
        
        if (reward.admin) {
            state.adminPanelEnabled = true;
            alert("Admin panel enabled!");
        }
        
        if (reward.multiplier) {
            // Apply damage multiplier
            const originalDamagePerClick = state.damagePerClick;
            state.damagePerClick *= reward.multiplier;
            
            alert(`${reward.multiplier}x Damage activated for ${reward.duration / 1000} seconds!`);
            
            // Reset after duration
            setTimeout(() => {
                state.damagePerClick = originalDamagePerClick;
                alert("Damage multiplier expired!");
                updateUI();
            }, reward.duration);
        }
        
        updateUI();
    } else {
        alert("Invalid code!");
    }
}

// Trigger Global Event (for admin)
function triggerGlobalEvent(eventName, statType, multiplier) {
    state.activeEvent = {
        name: eventName,
        statType: statType,
        multiplier: multiplier,
        endTime: Date.now() + 300000 // 5 minutes
    };
    state.eventEndTime = Date.now() + 300000;
    alert(`EVENT STARTED: ${eventName} for 5 minutes!`);
}

// Check for active events
function checkEvents() {
    if (state.activeEvent && Date.now() < state.eventEndTime) {
        // Event is active
    } else {
        state.activeEvent = null;
        state.eventEndTime = 0;
    }
}

// Initialize game
loadGame();
updateUI();
recalculateStats();

// Check for saved player name
const savedPlayerName = localStorage.getItem('maceClickerPlayerName');
if (savedPlayerName) {
    state.playerName = savedPlayerName;
} else {
    const newName = prompt("Welcome to Mace Clicker! Enter your name:", "Player");
    if (newName && newName.trim()) {
        state.playerName = newName.trim();
        localStorage.setItem('maceClickerPlayerName', state.playerName);
    }
}

// Render floating damage numbers on click (additional visual effect)
maceEl.addEventListener('mousedown', () => {
    maceEl.classList.add('mace-clicking');
});

maceEl.addEventListener('mouseup', () => {
    maceEl.classList.remove('mace-clicking');
});

maceEl.addEventListener('mouseleave', () => {
    maceEl.classList.remove('mace-clicking');
});

// Debug: Enter dev mode
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        state.adminPanelEnabled = !state.adminPanelEnabled;
        alert(state.adminPanelEnabled ? "Dev mode enabled!" : "Dev mode disabled!");
        updateUI();
    }
});
