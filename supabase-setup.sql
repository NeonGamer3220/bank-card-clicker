-- Create a table to store player game data
CREATE TABLE players (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  player_name TEXT UNIQUE NOT NULL,
  money BIGINT DEFAULT 0,
  money_per_click BIGINT DEFAULT 1,
  money_per_second BIGINT DEFAULT 0,
  current_title TEXT DEFAULT 'Broke',
  upgrades JSONB DEFAULT '{}',
  companies JSONB DEFAULT '{}',
  houses JSONB DEFAULT '{}',
  shop JSONB DEFAULT '{}',
  stocks JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE players ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read and insert player data
CREATE POLICY "Allow public read" ON players FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON players FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON players FOR UPDATE USING (true);

-- Function to save or update player data
CREATE OR REPLACE FUNCTION save_player(
  p_player_name TEXT,
  p_money BIGINT,
  p_money_per_click BIGINT,
  p_money_per_second BIGINT,
  p_current_title TEXT,
  p_upgrades JSONB,
  p_companies JSONB,
  p_houses JSONB,
  p_shop JSONB,
  p_stocks JSONB
) RETURNS void AS $$
BEGIN
  INSERT INTO players (player_name, money, money_per_click, money_per_second, current_title, upgrades, companies, houses, shop, stocks)
  VALUES (p_player_name, p_money, p_money_per_click, p_money_per_second, p_current_title, p_upgrades, p_companies, p_houses, p_shop, p_stocks)
  ON CONFLICT (player_name) DO UPDATE SET
    money = p_money,
    money_per_click = p_money_per_click,
    money_per_second = p_money_per_second,
    current_title = p_current_title,
    upgrades = p_upgrades,
    companies = p_companies,
    houses = p_houses,
    shop = p_shop,
    stocks = p_stocks,
    last_updated = NOW();
END;
$$ LANGUAGE plpgsql;

-- Function to get player data
CREATE OR REPLACE FUNCTION get_player(p_player_name TEXT)
RETURNS TABLE (
  id UUID,
  player_name TEXT,
  money BIGINT,
  money_per_click BIGINT,
  money_per_second BIGINT,
  current_title TEXT,
  upgrades JSONB,
  companies JSONB,
  houses JSONB,
  shop JSONB,
  stocks JSONB,
  created_at TIMESTAMP WITH TIME ZONE,
  last_updated TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM players
  WHERE players.player_name = p_player_name;
END;
$$ LANGUAGE plpgsql;