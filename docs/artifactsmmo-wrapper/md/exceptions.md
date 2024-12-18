# Exceptions

## How to Use

This module defines a set of custom exception classes that are raised by the Artifacts MMO API wrapper when errors occur. These exceptions provide more specific information about the nature of the error, making it easier to handle different error scenarios in your code.

## Classes

### APIException

- **Base exception class** for all API-related errors.
- Logs the error message when raised.

### CharacterInCooldown

- Raised when attempting an action while the character is still on cooldown.

### NotFound

- Raised when a requested resource is not found.

### ActionAlreadyInProgress

- Raised when attempting to start an action that is already in progress.

### CharacterNotFound

- Raised when a character with the specified name is not found.

### TooLowLevel

- Raised when the character's level is too low for a specific action or requirement.

### InventoryFull

- Raised when attempting to add items to a full inventory.

### MapItemNotFound

- Raised when a specific item is not found on the map.

### InsufficientQuantity

- Raised when there is an insufficient quantity of an item for an action.

### GETooMany

- Raised when attempting to list too many items on the Grand Exchange.

### GENoStock

- Raised when there is no stock available for a Grand Exchange offer.

### GENoItem

- Raised when the specified item is not found in the Grand Exchange.

### TransactionInProgress

- Raised when a transaction is already in progress.

### InsufficientGold

- Raised when the character does not have enough gold for an action.

### TaskMasterNoTask

- Raised when the Task Master does not have an assigned task.

### TaskMasterAlreadyHasTask

- Raised when attempting to assign a task to a Task Master that already has one.

### TaskMasterTaskNotComplete

- Raised when the Task Master's assigned task is not yet complete.

### TaskMasterTaskMissing

- Raised when the Task Master's task information is missing.

### TaskMasterTaskAlreadyCompleted

- Raised when attempting to complete a Task Master task that is already completed.

### RecyclingItemNotRecyclable

- Raised when attempting to recycle an item that is not recyclable.

### EquipmentTooMany

- Raised when attempting to equip too many items.

### EquipmentAlreadyEquipped

- Raised when attempting to equip an item that is already equipped.

### EquipmentSlot

- Raised when an invalid equipment slot is specified.

### AlreadyAtDestination

- Raised when the character is already at the specified destination.

### BankFull

- Raised when the bank is full.

### TokenMissingorEmpty

- **Critical exception** raised when the API token is missing or empty.
- **Terminates the program** after logging the error.

### NameAlreadyUsed

- Raised when attempting to use a character name that is already taken.

### MaxCharactersReached

- Raised when the maximum number of allowed characters has been reached.
