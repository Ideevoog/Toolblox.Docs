---
sidebar_position: 30
---

# Access restrictions


![Access restrictions in workflow](/img/screens/steps_access.png)

Access step is used to add a required precondition to transitions.

As an example setting up access restriction to ```Client``` will accomplish three things
1. When the step is executed it checks if the executor (caller) is the correct one. More precisely, Toolblox will check if the Client of the current item is equal to the callers wallet address. If it is, it lets the transition processing to continue, if not then it fails with an exception.
1. In case a value for the Client attribute has not yet been set for an item it sets it to be the caller and lets the transition to proceed. This means that if any subsequent transitions for that item which also require Client restriction would fail for other callers.
1. In case the Client variable is defined as **Restricted user** (not just **User**) an additional check will be done: the caller needs to be pre-registered (whitelisted) as a Client of the Workflow.