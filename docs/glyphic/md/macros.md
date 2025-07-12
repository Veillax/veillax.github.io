# Macro Specs & How to Create Macros

## Macro File Structure

- Macros are YAML files stored in folders under `macros/`.
- Each macro file defines a single macro action.

## Macro YAML Example

```yaml
plugin: KeyboardActionsPlugin
params:
  action: hotkey
  keys: ["ctrl", "-"]
description: "Zoom out in Krita"
```

## Macro Fields

- **plugin:** Name of the plugin to use (must match a plugin in `plugins/default_plugins/`).
- **params:** Parameters for the plugin (structure depends on the plugin).
- **description:** (Optional) Human-readable description.

## How to Create a Macro

1. Choose or create a folder under `macros/` (e.g., `macros/default_macros/krita/`).
2. Create a new YAML file (e.g., `zoom_out.yaml`).
3. Fill in the plugin, params, and description as shown above.
4. Reload macros from the system tray or restart Glyphic.

## Triggering a Macro

Publish a message to `{topic_prefix}/{folder}` with the macro ID (filename without `.yaml`) as the payload.