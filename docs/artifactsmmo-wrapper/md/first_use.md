# First Use

Wonderful. Now that you've successfully installed the wrapper, we can get started on first use.

## Before We Begin

There's a few steps you must take before you begin.

### New Player

First, go to [https://artifactsmmo.com/account/create](https://artifactsmmo.com/account/create) and create an account. When you've done that, come back here.  
Next, go ahead and create your first character (or 5, it doesn't affect anything in the rest of this guide) [on your account page](https://artifactsmmo.com/account)  
All that is required for this guide is your token and the name of one of your characters, which can be found [on your account page](https://artifactsmmo.com/account)  

### Returning Player

All that is required for this guide is your token and the name of one of your characters, which can be found [on your account page](https://artifactsmmo.com/account)  
⚠️ ***It is not allowed to play with more than one account. All accounts involved in multi-accounting will be banned***  

## Setting up your environment

Assuming you followed the Installation guide and the above instructions, here's the recommended way to get started with this package

1. Create a virtual environment  
    This way, the packages you install and their dependencies won't conflict with other packages previously installed  
    This can be done using `python -m venv venv`

2. Install the following packages  
    dotenv: `pip install python-dotenv`

3. Create a `main.py` file  
    This is where our code will be

4. Create a `.env` file in the same directory as your `main.py` file  
    This is where we will store out char name and account token  
    ⚠️ ***Take caution with this file. Your token is basically your account's password, and with it, anyone can manipulate your characters.***
    I recommend placing `.env` inside of the `.gitignore` file if you plan on releasing this project on github, even publicly  
    These are the keys that will be used in this guide;
      - MMO_TOKN
      - MMO_CHAR

## Getting Started with the wrapper

First, as with any package, the imports

```python
import os
import logging

import artifactsmmo_wrapper as wrapper
from dotenv import load_dotenv
```

Next, we instance the wrapper using our token and character name

```python
wrapper.logger.setLevel(logging.DEBUG)

load_dotenv()

token = os.getenv("MMO_TOKN")
char = os.getenv("MMO_CHAR")

api = wrapper.ArtifactsAPI(api_key=token, character_name=char)
```

Now that we've instanced the wrapper for our character, we can start to retrieve character information.

```python
char = api.char
print(char) # This prints the general character information, such as levels, name, etc.
print(char.pos) # Prints an x/y coordinate pair for the character's currenrt position
print(char.weapon_slot, char.shield_slot) # Prints the currently equiped weapon and shield name
```

You can find more about api.char variable [here](/docs/artifactsmmo-wrapper/game_data_classes.html) under PlayerData

Now, to get started with some actions:

Actions are your character's way of interacting with the world, be it moving, gathering, withdrawing items from the banks

First, let's try crafting an ash plank

```python
api.actions.move(*api.content_maps.ash_tree) # Uses a dynamic content map

# Ash plank requires 8 ash wood
for _ in range(8):
    api.actions.gather()
api.actions.move(-2, -3) # Uses x/y coordinates
api.actions.craft_item('ash_plank')s
```

Now how about crafting a copper dagger?  

```python
api.actions.move(2, 0)

# Copper dagger requires 6 Copper, each of which requires 8 copper ore
for _ in range(48):
    api.actions.gather()

api.actions.move(1, 5)
api.actions.craft_item("copper", 6)

api.actions.move(2, 1)
api.actions.craft_item("copper_dagger")
```

Now let's try equipping our dagger and fighting some chickens

```python
if api.char.weapon_slot:
    api.actions.unequip_item('weapon_slot')

api.actions.equip_item('copper_dagger', 'weapon_slot')\

api.actions.move(0, 1)

for _ in range(8):
    api.actions.fight()
```

Great, now we've got some items and gold, let's put them in the bank to clear them for other characters to use

```python
api.actions.move(*api.content_maps.bank)
for item in api.char.inventory:
    api.actions.bank_deposit_item(item.code, item.quantity)

if api.char.gold:
    api.actions.bank_deposit_gold(api.char.gold)

```

Wonderful, now that we've got the basics down, let's try some multi-character actions in the next guide.