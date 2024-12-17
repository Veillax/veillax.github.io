# ArtifactsAPI

## How to use

1. Import the `ArtifactsAPI` class from the `artifacts` module.
2. Create an instance of the `ArtifactsAPI` class, providing your API key and character name as arguments.
3. Access the desired subclass (e.g., `account`, `character`, `actions`, `maps`, etc.) through the created instance.
4. Call methods on the subclass instance to interact with the API (e.g., `get_balance()` on the `account` subclass).

## Classes

### ArtifactsAPI

#### Variables

- `token`: Your API key.
- `base_url`: Base URL for the API.
- `headers`: Headers for API requests, including authorization.
- `character_name`: Name of your character.
- `char`: PlayerData object containing character information.
- `account`: Subclass for account-related actions.
- `character`: Subclass for character-related actions.
- `actions`: Subclass for character actions.
- `maps`: Subclass for map-related information.
- `items`: Subclass for item-related information.
- `monsters`: Subclass for monster-related information.
- `resources`: Subclass for resource-related information.
- `events`: Subclass for event-related information.
- `ge`: Subclass for Grand Exchange interactions.
- `tasks`: Subclass for task-related information.
- `task_rewards`: Subclass for task reward information.
- `achievements`: Subclass for achievement information.
- `leaderboard`: Subclass for leaderboard information.
- `accounts`: Subclass for account-related actions.
- `content_maps`: Subclass for content map information.

#### Methods

- `_make_request(method, endpoint, json=None, source=None, retries=3, include_headers=False)`: Makes an API request and returns the JSON response.
- `_start_task_loop(function, timeout)`: Internal method for starting a task loop in a separate thread.
- `_set_task_loop(function=None, timeout=None, thread=None)`: Sets up a task loop to repeatedly execute a function.
- `_get_version()`: Retrieves the API version.
- `_cache()`: Caches map, item, monster, resource, task, reward, and achievement data.
- `_raise(code, m)`: Raises an API exception based on the response code and error message.
- `get_character(data=None, character_name=None)`: Retrieves or updates the character's data.
