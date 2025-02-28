# Game Data Classes

## How to Use

This module defines dataclasses that represent various game entities and data structures.

## Classes

### Position
Represents a position on the 2D game grid.
- `x`: X-coordinate
- `y`: Y-coordinate
- Methods:
  - `dist(other)`: Calculate Manhattan distance to another position
  - `__iter__`: Allows unpacking into x, y coordinates

### Effect
Represents an item or ability effect.
- `code`: Effect identifier
- `name`: Effect name
- `description`: Effect description
- `attributes`: Dictionary of effect attributes

### ContentMap
Represents a location with specific content.
- `name`: Location name
- `code`: Location identifier
- `level`: Required level
- `skill`: Required skill
- `pos`: Position object
- `drops`: List of possible drops

### PlayerData
Comprehensive character data class with enhanced attributes.

#### Basic Stats
- `name`, `account`, `skin`
- `level`, `xp`, `max_xp`
- `gold`, `speed`
- `hp`, `max_hp`
- `haste`, `critical_strike`
- `wisdom`, `prospecting`

#### Skills (each with level, xp, max_xp)
- Mining
- Woodcutting
- Fishing
- Weaponcrafting
- Gearcrafting
- Jewelrycrafting
- Cooking
- Alchemy

#### Combat Stats
- Elemental attacks (fire, earth, water, air)
- Elemental damage
- Elemental resistance
- Base damage

#### Equipment Slots
- Weapon, Shield
- Armor (helmet, body, legs, boots)
- Accessories (rings, amulet)
- Artifacts (3 slots)
- Utility items (2 slots)
- Rune slot
- Bag slot

#### Methods
- `get_skill_progress(skill)`: Get level and progress percentage
- `get_equipment_slots()`: Get equipped items dictionary
- `get_inventory_space()`: Calculate remaining inventory space
- `has_item(item_code)`: Check item possession and quantity
- `get_task_progress_percentage()`: Calculate task completion percentage

### Additional Classes

#### Item
- Basic item information
- Effects and crafting requirements
- Trade status

#### Monster
- Combat statistics
- Elemental attributes
- Drop information

#### Resource
- Gathering requirements
- Drop information

#### Task
- Requirements and objectives
- Rewards

#### Achievement
- Requirements and rewards
- Progress tracking

#### ContentMaps
- Map content management
- Position-based content lookup
- Cached map data
