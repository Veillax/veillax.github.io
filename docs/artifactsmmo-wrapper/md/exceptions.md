# Exceptions

## How to Use

This module defines custom exception classes for the Artifacts MMO API wrapper. All exceptions inherit from the base `APIException` class which provides enhanced error tracking and logging.

## Classes

### APIException

Base exception class with improved error tracking and logging capabilities.

#### Methods
- `_log_error(message)`: Logs error with traceback information
- `__init__(message, char_name="ROOT")`: Initializes exception with character context

### Exception Types

All exceptions include automatic logging with appropriate severity levels:

#### Critical Exceptions
- `TokenMissingorEmpty`: Token is missing or empty (terminates program)

#### Error Exceptions
- `NotFound`: Resource not found
- `CharacterNotFound`: Character not found
- `TooLowLevel`: Level requirement not met
- `MapItemNotFound`: Map item not found
- `GETooMany`: Too many GE items listed
- `GENoStock`: No stock available in GE
- `GENoItem`: Item not found in GE
- `TaskMasterNoTask`: No task assigned
- `TaskMasterTaskNotComplete`: Task not completed
- `TaskMasterTaskMissing`: Task information missing
- `RecyclingItemNotRecyclable`: Item cannot be recycled
- `EquipmentSlot`: Invalid equipment slot
- `NameAlreadyUsed`: Character name already in use

#### Warning Exceptions
- `CharacterInCooldown`: Character is in cooldown
- `ActionAlreadyInProgress`: Action already in progress
- `InventoryFull`: Inventory is full
- `InsufficientQuantity`: Insufficient item quantity
- `TransactionInProgress`: Transaction already in progress
- `InsufficientGold`: Not enough gold
- `TaskMasterAlreadyHasTask`: Task already assigned
- `TaskMasterTaskAlreadyCompleted`: Task already completed
- `EquipmentTooMany`: Too many equipment items
- `EquipmentAlreadyEquipped`: Item already equipped
- `BankFull`: Bank is full
- `MaxCharactersReached`: Maximum character limit reached

#### Info Exceptions
- `AlreadyAtDestination`: Character already at destination

Each exception includes:
- Descriptive error message
- Character context
- Stack trace
- Automatic logging with appropriate severity
- Error details for debugging
