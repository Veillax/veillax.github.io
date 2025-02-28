# Subclasses

## How to Use

This module contains API interaction classes, each handling specific game features.

## Base Classes

### BaseCache
Base class for cached data management.
- `_row_to_dict(row)`: Convert database row to dictionary

## Feature Classes

### Account
Account management operations.
- `get_bank_details()`: Bank account information
- `get_bank_items(item_code, page)`: Bank inventory
- `get_ge_sell_orders(item_code, page)`: GE sell orders
- `get_ge_sell_history(item_code, item_id, page)`: GE transaction history
- `get_account_details()`: Account information

### Character
Character management.
- `create_character(name, skin)`: Create new character
- `delete_character(name)`: Delete character
- `get_logs(page)`: Character activity logs

### Actions
Character actions with enhanced error handling.
- Movement: `move(x, y)`, `rest()`
- Items: `equip_item()`, `unequip_item()`, `use_item()`, `delete_item()`
- Activities: `fight()`, `gather()`, `craft_item()`, `recycle_item()`
- Bank: `bank_deposit_item()`, `bank_withdraw_item()`, `bank_deposit_gold()`, `bank_withdraw_gold()`, `bank_buy_expansion()`
- Tasks: `taskmaster_accept_task()`, `taskmaster_complete_task()`, `taskmaster_exchange_task()`, `taskmaster_trade_task()`, `taskmaster_cancel_task()`

### Cache-Enabled Classes
All include `_cache_*()`, filtering, and retrieval methods:

#### Items
- Item data management
- Crafting information
- Effect tracking

#### Maps
- Map content management
- Location-based queries

#### Monsters
- Monster statistics
- Drop tables

#### Resources
- Gathering resources
- Skill requirements

#### Tasks
- Task management
- Reward tracking

#### Effects
- Effect management
- Attribute tracking

### Additional Classes

#### Events
- `get_active(page)`: Active events
- `get_all(page)`: All events

#### GE (Grand Exchange)
- Market operations
- Order management
- Transaction history

#### Leaderboard
- Character rankings
- Account rankings

#### Accounts
- Achievement tracking
- Account statistics

