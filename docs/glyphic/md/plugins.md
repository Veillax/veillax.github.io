# Plugin Specs & How to Create Plugins

## Plugin Structure

- Plugins are Python files in `plugins/default_plugins/`.
- Each plugin must inherit from `BasePlugin` and implement `execute(self, params)`.

## Example Plugin

```python
from plugins.base import BasePlugin

class MyPlugin(BasePlugin):
    def execute(self, params):
        # Your action here
        pass

    def validate_params(self, params):
        # Optional: validate params before execution
        return True
```

## Plugin Requirements

- **Class Name:** Should be unique and descriptive.
- **execute(self, params):** Main method called when the macro is triggered.
- **validate_params(self, params):** (Optional) Validate macro parameters before execution.

## Adding a Plugin

1. Create a new Python file in `plugins/default_plugins/`.
2. Define your plugin class as shown above.
3. Reload plugins from the system tray or restart Glyphic.

## Sharing Plugins

Share the `.py` file with others. They can drop it into their `plugins/default_plugins/` folder.