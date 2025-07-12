# How to Use Glyphic

## Starting Glyphic

Run:

```sh
python mqtt_macropad/main.py
```

A tray icon will appear in your system tray.

## System Tray Menu

- **Reload Macros & Plugins:** Instantly reloads all macros and plugins.
- **Restart MQTT Client:** Reconnects to the MQTT broker.
- **Restart Program:** Restarts Glyphic.
- **Quit:** Exits Glyphic.

## Triggering Macros

1. Use any MQTT client to publish a message.
2. Topic: `{topic_prefix}/{folder}` (e.g., `macropad/krita`)
3. Payload: Macro ID (e.g., `zoom_out`)

Example using `mosquitto_pub`:
```sh
mosquitto_pub -h <broker_ip> -t "macropad/krita" -m "zoom_out"
```

## Creating and Editing Macros

- Add or edit YAML files in the appropriate `macros/` folder.
- Use the system tray menu to reload macros after changes.

## Creating and Adding Plugins

- Add new Python files to `plugins/default_plugins/`.
- Use the system tray menu to reload plugins after changes.

## Logs

- Logs are written to the file specified in `config/config.yaml`.
- Check logs for errors or troubleshooting.

Enjoy automating your