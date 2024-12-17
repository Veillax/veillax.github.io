# cooldown

## How to Use

This module provides functionality for managing cooldowns in the Artifacts MMO API wrapper. It uses a `CooldownManager` class and a `with_cooldown` decorator to handle rate limits and prevent exceeding API request frequency.

## Classes

### CooldownManager

#### Methods

- `is_on_cooldown()`: Checks if the action is currently on cooldown.
- `set_cooldown_from_expiration(expiration_time_str)`: Sets the cooldown based on an ISO 8601 expiration time string.
- `wait_for_cooldown(logger=None, char=None)`: Waits until the cooldown expires, optionally logging the wait time.

## Functions

### `_re_cache(api, table)`

- Checks if the cached data for the given table is outdated.
- If outdated or no record exists, it updates the cache with the latest data from the API.
- Returns `True` if the cache was updated, `False` otherwise.

### `with_cooldown(func)`

- **Decorator** that applies cooldown management to a method.
- Before executing the decorated function, it checks if the character is on cooldown and waits if necessary.
- After the function executes, it updates the cooldown based on the character's cooldown expiration time.
- Skips cooldown for `get_character` source to allow fetching character data without waiting.
