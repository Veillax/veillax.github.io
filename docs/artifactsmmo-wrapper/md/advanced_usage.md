# Advanced Usage Guide

This guide covers advanced features and patterns for using the ArtifactsMMO wrapper effectively.

## Multi-Character Management

### Switching Between Characters
```python
from artifactsmmo_wrapper import wrapper

# Initialize characters
miner = wrapper.character("MinerChar")
crafter = wrapper.character("CrafterChar")
fighter = wrapper.character("FighterChar")

# Each instance maintains its own state and cooldowns
miner.actions.gather()
crafter.actions.craft_item("copper_dagger")
fighter.actions.fight()
```

## Resource Management

### Efficient Mining Operation
```python
def mine_and_bank(api, resource_code, quantity):
    """Mine resources and bank them when inventory is full."""
    collected = 0
    
    while collected < quantity:
        # Check inventory space
        if api.char.get_inventory_space() < 10:
            api.actions.move(*api.content_maps.bank)
            for item in api.char.inventory:
                api.actions.bank_deposit_item(item.code, item.quantity)
                collected += item.quantity
            
        # Return to mining
        api.actions.move(*api.content_maps.get_map(resource_code))
        api.actions.gather()

# Usage
mine_and_bank(api, "copper_ore", 100)
```

## Task Management

### Task Handling
```python
def complete_task(api):
    """Handle task completion with proper error management."""
    try:
        # Accept new task if none active
        if not api.char.task:
            api.actions.taskmaster_accept_task()
        
        # Check task requirements
        task_type = api.char.task_type
        progress = api.char.get_task_progress_percentage()
        
        print(f"Current task: {task_type} - Progress: {progress:.1f}%")
        
        # Complete task based on type
        if task_type == "gather":
            api.actions.gather()
        elif task_type == "combat":
            api.actions.fight()
            
        # Turn in completed task
        if api.char.task_progress >= api.char.task_total:
            api.actions.taskmaster_complete_task()
            
    except wrapper.APIException.TaskMasterTaskNotComplete:
        print("Task not yet complete")
    except wrapper.APIException.TaskMasterAlreadyHasTask:
        print("Already have an active task")
```

## Grand Exchange Operations

### Market Monitoring
```python
def monitor_item_price(api, item_code, target_price):
    """Monitor an item's price and buy when it reaches target."""
    orders = api.ge.get_sell_orders(item_code)
    
    for order in orders:
        if order['price'] <= target_price:
            try:
                api.ge.buy(order['id'])
                print(f"Bought {item_code} at {order['price']} gold")
                return True
            except wrapper.APIException.GENoStock:
                continue
    
    return False
```

### Automated Trading
```python
def trade_strategy(api, buy_item, sell_item, margin):
    """Basic trading strategy."""
    # Get market data
    buy_orders = api.ge.get_sell_orders(buy_item)
    sell_history = api.ge.get_sell_history(sell_item)
    
    if buy_orders and sell_history:
        buy_price = buy_orders[0]['price']
        sell_price = sell_history[0]['price']
        
        if sell_price - buy_price >= margin:
            api.ge.buy(buy_orders[0]['id'])
            api.ge.sell(sell_item, sell_price - 1)
```

## Event Monitoring

### Event Handler
```python
def monitor_events(api):
    """Monitor and handle game events."""
    active_events = api.events.get_active()
    
    for event in active_events:
        print(f"Active event: {event['name']}")
        print(f"Time remaining: {event['time_remaining']}")
        print(f"Rewards: {event['rewards']}")
```

## Error Recovery

### Robust Action Execution
```python
def safe_action(func, retries=3, delay=5):
    """Execute an action with retry logic."""
    for attempt in range(retries):
        try:
            return func()
        except wrapper.APIException.CharacterInCooldown:
            time.sleep(delay)
        except wrapper.APIException.InventoryFull:
            return False
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt == retries - 1:
                raise
            time.sleep(delay)
```

## Performance Optimization

### Caching Strategy
```python
def optimize_resource_gathering(api, resource_code):
    """Optimize gathering using cached locations."""
    # Get all resource locations
    locations = [
        loc for loc in api.maps.get()
        if loc.content_code == resource_code
    ]
    
    # Sort by distance from current position
    locations.sort(key=lambda loc: 
        abs(loc.x - api.char.pos.x) + abs(loc.y - api.char.pos.y)
    )
    
    return locations[0]
```

## Next Steps

For more detailed information about specific components:
- [Game Data Classes](game_data_classes.html)
- [API Reference](api_reference.html)
- [Error Handling](error_handling.html)
