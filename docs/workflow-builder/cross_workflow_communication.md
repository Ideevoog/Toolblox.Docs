---
sidebar_position: 50
---

# Cross-workflow communication

Cross-workflow communication is handled by these features:
1. Calling transitions in other workflows
1. Foreign key attribute type
1. TBX token workflow locator
1. Use linked workflow attributes in a workflow

:::info

At this point it is not possible to perform cross-workflow calls *across different blockchains*. The caller and callee must be deployed on the same blockchain. This might change in the future.

:::

## Examples

### Workflow for a shopping cart example

The cart can be in state active, paid, and shipped. In order to add items into that workflow however there is another 'shopping cart item' workflow with states registered, shipped and returned. This approach enables to create a decentralized web shop where each item in the shopping cart is an NFT.
![Shopping cart multi-flow](/img/screens/multiflow_shopping_cart.png)

### Loan approval workflow example

Parent object has a lifecycle event (e.g. Approved). There is another, cashflow workflow and payment step. The parent workflow *starts off* an child workflow by calling 'Create'. The initial workflow is *owned* by the operations team but invoice workflow is owned by the *accounting* department. 
![Loan multi-flow](/img/screens/multiflow_loan.png)

### Parking fine workflow example

The fine is registered and must be paid but the car *could* also be impounded. The impound workflow however handled by a partner - the impount operator. 
![Parking fine multi-flow](/img/screens/multiflow_impound.png)

All in all calling other flows is neccessary if there are multiple workflows owned by same company, different departments or different businesses altogether. **It is a way to use smart contracts to organize business cooperation.** 

## Walkthrough

Lets take this loan approval workflow:

![Loan multi-flow](/img/screens/multiflow_loan.png)

And lets focus on the first, "approve loan application" transition which also has to record a cashflow.

As a prerequisite lets create these 2 workflows:
1. Example loan approval application (item: Application)
1. Example loan approval cashflow (item: Cashflow)

### Step 1. Add loan application id to cashflow

Each cashflow originates from a loan application. To contractually bind them we need to add an attribute called 'application id' onto the cashflow item.

* Name: Application Id
* Type: Other flow id
* Workflow name: Example loan approval application

![Create foreign key](/img/screens/cross_fk.png)

Additionally lets add a cashflow recipient attribute to the cashflow:

![Create recipient address attribute](/img/screens/cross_receive.png)


### Step 2. Add Cashflow 'Create' method parameter

Whenever we create a cashflow we have to now add a mandatory Application Id parameter:


![Create recipient address attribute](/img/screens/cross_create.png)

### Step 3. Create a cross-workflow call

Now on the other side - in the loan application workflow - lets add the call to create a cashflow when a loan gets approved:


![Cross workflow call](/img/screens/cross_call.png)

:::note 

Notice the mapping of the parameters. Create method accepts the Application Id which means in the mapping we need to set it to Id. The Id ofcourse being the application's Id because we are editing the application workflow.

:::

### Step 4. TBX token call routing

**This is rather technical concept so feel free to jump onto the next step if you wish!**

There is no configuration required in this step but it is good to realize how the cross contract call is technically achieved.

#### Service locator pattern

All cross-workflow communication is done using a service locator. The benefits of using a service locator are:
* no hardcoded contract addresses in contracts
* contracts can be upgraded separately 
* order of deployments does not matter

#### TBX token interface

The TBX token acts as a service locator. It is an open-source ([GitHub](https://github.com/Ideevoog/Toolblox.Token)) utility token with two public methods: 
* getService(name) - returns a workflow address by its name
* registerService(name) - registers a new workflow by its name. Run every time a new contract is deployed.

#### Loan application using TBX token

Here is a sequence overview of the loan application Approve step:


![Cross workflow call in sequence diagram using TBX](/img/screens/cross_graph.png)


:::caution

The key takeaway from this step is that it is vital to **not change the names of the workflows once configuration is done**. Toolblox uses the name of the workflows to perform cross-workflow calls, so if one name changes, other contracts need to be changed as well.

Think of this like this: the name of a workflow is like its unique identifier. For the same reason you cannot change a persons identity number - there are contractual obliations tied to the identity.

:::

### Step 5. Using application attributes in cashflow workflow

Since we have the application id available in the cashflow workflow and we now the workflow name, it is possible to *ask* for up-to-date info while executing transitions of the cashflow.

As an example imagine we have a transition on the cashflow which has to validate for whatever reason that the loan application amount (price) is the same as the cashflow amount:

![Using attributes of other flows](/img/screens/cross_other_attr.png)

* Validation text: "Application OK?"
* Validation expression: ```Application Flow Price == Price```

