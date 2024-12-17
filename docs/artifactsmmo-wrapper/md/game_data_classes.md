# game\_data_classes

## How to Use

This file defines a series of dataclasses that represent various entities and data structures within the Artifacts MMO game. These classes are used to organize and manage information related to players, items, maps, monsters, and other game elements.

## Classes

### Position

- `x` (int): X-coordinate of the position.
- `y` (int): Y-coordinate of the position.

#### Methods

- `__repr__()`: Returns a string representation of the position in (x, y) format.
- `dist(other)`: Calculates the Manhattan distance to another `Position`.

### Drop

- `code` (str): Code of the dropped item.
- `rate` (int): Drop rate (presumably a percentage or weight).
- `min_quantity` (int): Minimum quantity of the item that can drop.
- `max_quantity` (int): Maximum quantity of the item that can drop.

### ContentMap

- `name` (str): Name of the content map.
- `code` (str): Unique code for the content map.
- `level` (int): Required level to access the map.
- `skill` (str): Required skill to access the map (e.g., "combat", "mining").
- `pos` (Position): Position of the map on the world map.
- `drops` (List[Drop]): List of possible item drops in this map.

#### Methods

- `__iter__()`: Allows iterating over the x and y coordinates of the map's position.
- `__repr__()`: Returns a descriptive string representation of the content map.

### Content

- `type` (str): Type of content (e.g., "monster", "resource").
- `code` (str): Code of the content.

### TaskReward

- `items` (Optional[List[dict]]): List of items rewarded for completing the task.
- `gold` (Optional[int]): Amount of gold rewarded.

### Effect

- `name` (str): Name of the effect (e.g., "poison", "heal").
- `value` (int): Strength or magnitude of the effect.

### CraftingRecipe

- `skill` (Optional[str]): Skill required for crafting.
- `level` (Optional[int]): Level required in the skill.
- `items` (Optional[List[dict]]): List of items needed for crafting (with quantities).
- `quantity` (Optional[int]): Quantity of the crafted item produced.

### AchievementReward

- `gold` (int): Gold rewarded for achieving the achievement.

### Item

- `name` (str): Name of the item.
- `code` (str): Unique code for the item.
- `level` (int): Required level to use or equip the item.
- `type` (str): Type of the item (e.g., "weapon", "armor").
- `subtype` (Optional[str]): More specific item subtype (e.g., "sword", "helmet").
- `description` (Optional[str]): Description of the item.
- `effects` (Optional[List[Effect]]): List of effects applied by the item.
- `craft` (Optional[CraftingRecipe]): Crafting recipe for the item, if applicable.
- `tradeable` (Optional[bool]): Indicates if the item can be traded.

### Map

- `name` (str): Name of the map.
- `code` (str): Unique code for the map.
- `x` (int): X-coordinate of the map on the world map.
- `y` (int): Y-coordinate of the map on the world map.
- `content` (Content): The type of content found on this map.

### Monster

- `name` (str): Name of the monster.
- `code` (str): Unique code for the monster.
- `level` (int): Level of the monster.
- `hp` (int): Hit points of the monster.
- `attack_fire`, `attack_earth`, `attack_water`, `attack_air` (int): Monster's attack power for each element.
- `res_fire`, `res_earth`, `res_water`, `res_air` (int): Monster's resistance to each element.
- `min_gold`, `max_gold` (int): Range of gold dropped by the monster.
- `drops` (List[Drop]): List of possible item drops from the monster.

### Resource

- `name` (str): Name of the resource (e.g., "tree", "iron ore").
- `code` (str): Unique code for the resource.
- `skill` (Optional[str]): Skill required to gather the resource.
- `level` (int): Required level in the skill.
- `drops` (List[Drop]): List of items dropped when gathering the resource.

### Task

- `code` (str): Unique code for the task.
- `level` (int): Required level to start the task.
- `type` (Optional[str]): Type of the task (e.g., "combat", "gathering").
- `min_quantity`, `max_quantity` (int): Range of the task objective (e.g., number of monsters to kill).
- `skill` (Optional[str]): Skill associated with the task.
- `rewards` (Optional[TaskReward]): Rewards for completing the task.

### Reward

- `code` (str): Code of the reward item.
- `rate` (int): Rate or weight of the reward.
- `min_quantity`, `max_quantity` (int): Range of quantity for the reward.

### Achievement

- `name` (str): Name of the achievement.
- `code` (str): Unique code for the achievement.
- `description` (str): Description of the achievement.
- `points` (int): Achievement points awarded.
- `type` (str): Type of achievement (e.g., "combat", "skill").
- `target` (str): Target of the achievement (e.g., a specific monster, a skill level).
- `total` (int): Total progress required to complete the achievement.
- `rewards` (AchievementReward): Rewards for completing the achievement.

### ContentMaps

- `api` (ArtifactsAPI): An instance of the `ArtifactsAPI` class.
- `maps` (Dict[str, ContentMap]): A dictionary storing `ContentMap` objects, keyed by their codes.

#### Methods

- `__post_init__()`: Initializes the `maps` dictionary by fetching data from the API.
- `_cache_content_maps__()`: Fetches and caches content map data from the API.
- `_initialize_attributes__()`: Dynamically creates attributes for each content map.
- `_sanitize_attribute_name(name)`: Sanitizes map codes to be valid attribute names.
- `get_map(code)`: Retrieves a specific `ContentMap` by its code.
- `get_all_maps()`: Returns a list of all cached `ContentMap` objects.

### InventoryItem

- `slot` (int): Inventory slot number where the item is located.
- `code` (str): Code of the item.
- `quantity` (int): Quantity of the item in the inventory slot.

#### Methods

- `__repr__()`: Returns a string representation of the inventory item.

### PlayerData

- `name`, `account`, `skin` (str): Player's name, account name, and character skin.
- `level`, `xp`, `max_xp`, `gold`, `speed` (int): Player's overall level, experience, maximum experience, gold, and speed.
- `mining_level`, `mining_xp`, `mining_max_xp`, ... (int): Skill levels and experience for various skills.
- `hp`, `max_hp`, `haste`, `critical_strike`, `stamina` (int): Player's combat stats.
- `attack_fire`, `attack_earth`, ..., `res_air` (int): Player's elemental attack and resistance attributes.
- `pos` (Position): Player's current position on the map.
- `cooldown`, `cooldown_expiration` (int, str): Player's action cooldown information.
- `weapon_slot`, `shield_slot`, ..., `utility2_slot` (str): Equipped items in each equipment slot.
- `utility1_slot_quantity`, `utility2_slot_quantity` (int): Quantity of items in utility slots.
- `task`, `task_type`, `task_progress`, `task_total` (str, int): Player's current task information.
- `inventory_max_items` (int): Maximum number of items the player can carry.
- `inventory` (List[InventoryItem]): List of items in the player's inventory.

#### Methods

- `get_skill_progress(skill)`: Returns the level and progress percentage for a specific skill.
- `get_equipment_slots()`: Returns a dictionary of equipped items.
- `get_inventory_space()`: Calculates the remaining space in the player's inventory.
- `has_item(item_code)`: Checks if the player has a specific item and returns its quantity.
- `get_task_progress_percentage()`: Calculates the percentage of completion for the current task.
- `__repr__()`: Returns a string representation of the player's core stats and skills.

## Functions

(No functions found in the provided code snippet)
