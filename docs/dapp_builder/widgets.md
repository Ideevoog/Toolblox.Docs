---
sidebar_position: 20
---

# Widgets


![Available Widgets](/img/screens/dapp_widgets.png)

## Basics

Widgets provide content to a page. They can be configured to appear in a particular location on the page, dependent on the page layout.

Widgets can either load data from blockchain, load static data or submit data to blockchain. For widgets that load data from blockchain two required properties have to be set:
1. Workflow
1. State filter - for loading / displaying only items in a particular state.

## Widget tasks

Some widgets have outbound links - clickable areas. When the user clicks on this area some tasks will be performed.

These are the tasks which can be configured:
* Run workflow transition
* Open new page
* Store id from workflow transition to session

In this example a new button is added to:
* Run transition 'Request loan' on blockchain
* Store the newly added loan application id into session
* Load details with the new loan application


<video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" >
  <source src="/vid/dapp_widget_tasks.mp4" type="video/mp4"></source>
  Your browser does not support the video tag.
</video>


## Widget list

| Widgets | Loads from blockchain | Saves to blockchain | Notes |
|-|-|-|-|
| Banner | | |  |
| Blockchain button | **&#10003;** | **&#10003;** | Can be configured to run one or many transition |
| Cart | **&#10003;** | | |
| Details | **&#10003;**|**&#10003;**| Displays all attributes of an item, optionally with buttons to run transitions |
| Grid | **&#10003;** | | Suitable to display visual info (images, maps, etc.) |
| HTML | | | for displaying text or "HTML" content |
| List | **&#10003;** | | Similar to Grid but in a list form. Provides also grouping, and auto-sums |
| Steps | **&#10003;** | | Lists all the states in the workflow with the current state highlighted |
| Web Button | | | Opens a specified page |
| Wizard | **&#10003;** | **&#10003;** | Similar to Details but displays a wizard like interface split using states. |