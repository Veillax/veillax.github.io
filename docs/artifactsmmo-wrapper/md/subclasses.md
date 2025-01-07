# Subclasses

## How to Use

This file contains a collection of classes that interact with the Artifacts MMO API. Each class corresponds to a specific API category or feature, providing methods to perform actions or retrieve data related to that category.

## Classes

### Account

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.

#### Methods

- `get_bank_details()`: Retrieve the details of the player's bank account.
- `get_bank_items(item_code=None, page=1)`: Retrieve the list of items stored in the player's bank.
- `get_ge_sell_orders(item_code=None, page=1)`: Retrieve the player's current sell orders on the Grand Exchange.
- `get_ge_sell_history(item_code=None, item_id=None, page=1)`: Retrieve the player's Grand Exchange sell history.
- `get_account_details()`: Retrieve details of the player's account.

### Character

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.

#### Methods

- `create_character(name, skin="men1")`: Create a new character with the given name and skin.
- `delete_character(name)`: Delete a character by name.
- `get_logs(page=1)`: Retrieve character logs.

### Actions

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.

#### Methods

- `move(x, y)`: Move the character to a new position.
- `rest()`: Perform a rest action to regain energy.
- `equip_item(item_code, slot, quantity=1)`: Equip an item to a specified slot.
- `unequip_item(slot, quantity=1)`: Unequip an item from a specified slot.
- `use_item(item_code, quantity=1)`: Use an item from the player's inventory.
- `delete_item(item_code, quantity=1)`: Delete an item from the player's inventory.
- `fight()`: Initiate a fight with a monster.
- `gather()`: Gather resources, such as mining, woodcutting, or fishing.
- `craft_item(item_code, quantity=1)`: Craft an item.
- `recycle_item(item_code, quantity=1)`: Recycle an item.
- `bank_deposit_item(item_code, quantity=1)`: Deposit an item into the bank.
- `bank_deposit_gold(quantity)`: Deposit gold into the bank.
- `bank_withdraw_item(item_code, quantity=1)`: Withdraw an item from the bank.
- `bank_withdraw_gold(quantity)`: Withdraw gold from the bank.
- `bank_buy_expansion()`: Purchase an expansion for the bank.
- `taskmaster_accept_task()`: Accept a new task from the taskmaster.
- `taskmaster_complete_task()`: Complete the current task with the taskmaster.
- `taskmaster_exchange_task()`: Exchange the current task with the taskmaster.
- `taskmaster_trade_task(item_code, quantity=1)`: Trade a task item with another character.
- `taskmaster_cancel_task()`: Cancel the current task with the taskmaster.

### Items

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.
- `cache`: A dictionary to store cached item data.
- `all_items`: A list to store all items.

#### Methods

- `_cache_items()`: Caches item data from the API.
- `_filter_items(craft_material=None, craft_skill=None, max_level=None, min_level=None, name=None, item_type=None)`: Filters items based on the provided criteria.
- `get(item_code=None, **filters)`: Retrieves a specific item by code or filters items based on provided criteria.

### Maps

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.
- `cache`: A dictionary to store cached map data.
- `all_maps`: A list to store all maps.

#### Methods

- `_cache_maps()`: Caches map data from the API.
- `_filter_maps(map_content=None, content_type=None)`: Filters maps based on the provided criteria.
- `get(x=None, y=None, **filters)`: Retrieves a specific map by coordinates or filters maps based on provided criteria.

### Monsters

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.
- `cache`: A dictionary to store cached monster data.
- `all_monsters`: A list to store all monsters.

#### Methods

- `_cache_monsters()`: Caches monster data from the API.
- `_filter_monsters(drop=None, max_level=None, min_level=None)`: Filters monsters based on the provided criteria.
- `get(monster_code=None, **filters)`: Retrieves a specific monster by code or filters monsters based on provided criteria.

### Resources

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.
- `cache`: A dictionary to store cached resource data.
- `all_resources`: A list to store all resources.

#### Methods

- `_cache_resources()`: Caches resource data from the API.
- `_filter_resources(drop=None, max_level=None, min_level=None, skill=None)`: Filters resources based on the provided criteria.
- `get(resource_code=None, **filters)`: Retrieves a specific resource by code or filters resources based on provided criteria.

### Tasks

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.
- `cache`: A dictionary to store cached task data.
- `all_tasks`: A list to store all tasks.

#### Methods

- `_cache_tasks()`: Caches task data from the API.
- `_filter_tasks(skill=None, task_type=None, max_level=None, min_level=None, name=None)`: Filters tasks based on the provided criteria.
- `get(task_code=None, **filters)`: Retrieves a specific task by code or filters tasks based on provided criteria.

### Rewards

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.
- `cache`: A dictionary to store cached reward data.
- `all_rewards`: A list to store all rewards.

#### Methods

- `_cache_rewards()`: Caches reward data from the API.
- `_filter_rewards(name=None)`: Filters rewards based on the provided criteria.
- `get_all_rewards(**filters)`: Retrieves all rewards with optional filters.
- `get(task_code=None)`: Retrieves a specific reward by code.

### Achievements

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.
- `cache`: A dictionary to store cached achievement data.
- `all_achievements`: A list to store all achievements.

#### Methods

- `_cache_achievements()`: Caches achievement data from the API.
- `_filter_achievements(achievement_type=None, name=None, description=None, reward_type=None, reward_item=None, points_min=None, points_max=None)`: Filters achievements based on the provided criteria.
- `get(achievement_code=None, **filters)`: Retrieves a specific achievement by code or filters achievements based on provided criteria.

### Events

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.

#### Methods

- `get_active(page=1)`: Retrieve a list of active events.
- `get_all(page=1)`: Retrieve a list of all events.

### GE

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.

#### Methods

- `get_history(item_code, buyer=None, seller=None, page=1, size=100)`: Retrieve the transaction history for a specific item on the Grand Exchange.
- `get_sell_orders(item_code=None, seller=None, page=1, size=100)`: Retrieve a list of sell orders on the Grand Exchange with optional filters.
- `get_sell_order(order_id)`: Retrieve details for a specific sell order on the Grand Exchange.
- `buy(order_id, quantity=1)`: Buy an item from the Grand Exchange.
- `sell(item_code, price, quantity=1)`: Create a sell order on the Grand Exchange.
- `cancel(order_id)`: Cancel an active sell order on the Grand Exchange.

### Leaderboard

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.

#### Methods

- `get_characters_leaderboard(sort=None, page=1)`: Retrieve the characters leaderboard with optional sorting.
- `get_accounts_leaderboard(sort=None, page=1)`: Retrieve the accounts leaderboard with optional sorting.

### Accounts

#### Variables

- `api`: An instance of the `ArtifactsAPI` class.

#### Methods

- `get_account_achievements(account, completed=None, achievement_type=None, page=1)`: Retrieve a list of achievements for a specific account with optional filters.
- `get_account(account)`: Retrieve details for a specific account.
