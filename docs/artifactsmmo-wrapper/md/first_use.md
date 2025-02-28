# Getting Started Guide

This guide will walk you through setting up and using the ArtifactsMMO wrapper for the first time.

## Prerequisites

Before starting, ensure you have:
- Installed the wrapper (see [Installation Guide](install.html))
- An ArtifactsMMO account
- A character in the game

## Account Setup

### New Players
1. [Create an account](https://artifactsmmo.com/account/create)
2. [Create a character](https://artifactsmmo.com/account)
3. Note down your API token from the account page

### Existing Players
- Locate your API token on the [account page](https://artifactsmmo.com/account)

> ⚠️ **Security Warning**  
> Never share your API token. It provides full access to your account and characters.

## Project Setup

1. **Create Project Directory**
   ```bash
   mkdir mmo_project
   cd mmo_project
   ```

2. **Set Up Virtual Environment**
   ```bash
   python -m venv venv
   # On Windows:
   .\venv\Scripts\activate
   # On Linux/macOS:
   source venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   pip install python-dotenv artifactsmmo-wrapper
   ```

## Basic Usage

### Initial Setup

```python
import os
from artifactsmmo_wrapper import wrapper, logger
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Set your API token
wrapper.token = os.getenv("MMO_TOKN")

# Get API instance for your character
api = wrapper.character(os.getenv("MMO_CHAR"))

# Optional: Enable debug logging
logger.setLevel("DEBUG")
```

### Character Information
```python
# Get character details
character = api.char

# Basic information
print(character)  # Shows levels and XP for all skills

# Position and equipment
print(f"Position: {character.pos}")
print(f"Equipment: {character.get_equipment_slots()}")

# Inventory management
print(f"Available space: {character.get_inventory_space()}")
has_item, quantity = character.has_item("copper_ore")
print(f"Copper ore in inventory: {quantity}")
```

### Basic Actions

#### Resource Gathering
```python
# Using content maps for locations
api.actions.move(*api.content_maps.ash_tree)  # Move to nearest ash tree
for _ in range(8):
    api.actions.gather()

api.actions.move(*api.content_maps.workshop)  # Move to workshop
api.actions.craft_item('ash_plank')
```

#### Crafting Equipment
```python
# The wrapper handles cooldowns automatically
api.actions.move(*api.content_maps.copper_ore)
for _ in range(48):
    api.actions.gather()

api.actions.move(*api.content_maps.smelter)
api.actions.craft_item("copper", 6)

api.actions.move(*api.content_maps.anvil)
api.actions.craft_item("copper_dagger")
```

#### Combat
```python
# Equipment management
if api.char.weapon_slot:
    api.actions.unequip_item('weapon_slot')
api.actions.equip_item('copper_dagger', 'weapon_slot')

# Combat with automatic cooldown handling
api.actions.move(*api.content_maps.chicken)
for _ in range(8):
    api.actions.fight()
```

#### Banking
```python
# Banking with error handling
api.actions.move(*api.content_maps.bank)
for item in api.char.inventory:
    try:
        api.actions.bank_deposit_item(item.code, item.quantity)
    except wrapper.APIException.BankFull:
        print("Bank is full!")
        break

if api.char.gold:
    api.actions.bank_deposit_gold(api.char.gold)
```

## Multiple Characters

The wrapper makes it easy to manage multiple characters:

```python
# Initialize different characters
char1 = wrapper.character("Character1")
char2 = wrapper.character("Character2")

# Each instance maintains its own state
char1.actions.gather()
char2.actions.move(*char2.content_maps.bank)
```

## Automatic Features

The wrapper includes several automatic features:
- **Logging**: Creates and manages log files in the `logs/` directory
- **Caching**: Maintains game data cache in the `db/` directory
- **Cooldown Management**: Automatically handles action cooldowns
- **Error Handling**: Provides specific exceptions for different scenarios

### Error Handling Example
```python
try:
    api.actions.gather()
except wrapper.APIException.CharacterInCooldown:
    print("Waiting for cooldown...")
except wrapper.APIException.InventoryFull:
    print("Inventory is full!")
```

## Next Steps

For more advanced usage, including:
- Task management
- Grand Exchange interactions
- Achievement tracking
- Event monitoring

Check out the [Advanced Usage Guide](advanced_usage.html) and [Game Data Classes](game_data_classes.html) reference.