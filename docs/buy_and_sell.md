---
sidebar_position: 2
---

# How to create an NFT smart contract example

Let's go through a simple example and create a workflow to sell digital content aka NFT's.

## Prerequisites

Before we start it is required acquire the neccessary access.

### Create account in Toolblox

In order to create and deploy smart contracts you need to [create an account and log-into Toolblox](https://app.toolblox.net/authentication/login?returnUrl=https%3A%2F%2Fapp.toolblox.net%2F).

### Install a wallet

To deploy a new smart contract for everyone to use and to use it, you need a wallet. In Tooblox you have 2 options:
* [Install Metamask](https://metamask.io/download/) if you wish to use these blockchains: Aurora, Avalanche, Ethereum, Evmos or Polygon.
* [Create a Near Wallet](https://wallet.testnet.near.org/) if you wish to use the Near blockchain.

**For our test case, please install the Metamask add-on.**

### Get some test-coins for deployment

In order to deploy and use smart contracts you need to pay for 'gas' - these are the rules of blockchain. For testing purpose each blockchain has a test version called testnet - it looks and behaves like the real one, except the currency which moves on it is *fake test money*.

In order to test our smart contract you would need to use a **faucet** to get a little bit of the fake test money. It is basically a free service which just sends fake test money to an account you desire.

In case of the Near blockchain every test account is already loaded with some NEAR, in others please use their recommended faucet.

**For our test case, please use the Aurora's faucet which can be found here: https://aurora.dev/faucet.**

## Create Workflow

1. Go to https://app.toolblox.net/ and click on **Create flow**.
1. In the **Workflow name** input write a unique name for your workflow, for example "**My unique workflow name**". It needs to be globally unique because you can access it later from the url app.toolblox.net/**my_unique_workflow_name**.
1. Choose a layout by selecting the **workflow template**:
   * **List view** displays a simple grid of your items while
   * **Grid view** displays a thumbnail view - choose this layout in case your item has a photo or image to display.

This is how it will look like as an example:

![Create workflow step](/img/screens/create_workflow_1.png)

## Define the object

Next we define the object and its properties. For example an object 'car' might have property 'price', 'color', 'make' and 'owner'. Some properties are built-in and cannot be removed: Name, Status (the current state), and Id (identificator).

In this example lets add a few to sell NFTs
* Set the **Object name** to be '**Image**' for example.
* Choose an icon of your preference to represent your item.
* Under **Object attributes** tick '**Price**' and '**Image**'
* Under **Add custom attribute** add a new one called '**Current owner**' with type '**User**'
* Add another '**User**' attribute called '**Previous owner**' but set it to '**Transient**'. A *transient* attribute is something which will not get saved - it is marely a helper variable during the transition.
     ![Define the object attributes](/img/screens/create_workflow_transient.png)

In the end you should end up with something like this:

![Define the object attributes](/img/screens/create_workflow_2.png)

## Create the flow

* Add these 2 **states** by clicking the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-plus.svg" width="15" height="15"/> button. 
   * **For sale**
   * **Owned**
* Add an initial **transition** by clicking the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-plus.svg" width="15" height="15"/> button on the transition line leading into the '**For sale**' state:
    * ![Click button to add the inital transition](/img/screens/create_workflow_3.png) 
    * Set the **Name** of the transition to be '**Mint**'
    * Click **Edit** on the **Parameters** step and add **Name**, **Image**, **Price**
    * Under the **Access** step set it to be **Restricted** to **Current owner**. This means that if the **Current owner** of the Object has not been set (which it hasn't yet for the initial transition), it will be set by this definition. Whoever calls the action **Mint** will be the **Current owner** of our Object.
    * In the end the setup should look like this:
    ![Buy transition config](/img/screens/create_workflow_buy.png) 
* Add a second transition between the states '**For sale**' and '**Owned**' called '**Buy**'
    * Set the name of the transition to '**Buy**'
    * In the **Calculations** step add the following two lines. The idea is that before the payment step is executed we set up the temporary variable **Previous owner** so that we can use it in the next, payment step.
        * Set **Previous owner** with value from **Current owner**
        * Set **Current owner** up with value from **caller**. This ensures that whoever is the new buyer gets to be the **Current owner**.
    * Add a **Payment** step with the following configuratin **from caller** to **Previous owner** with the value of **Price**
    * In the end the setup should look like this:
    ![Buy transition config](/img/screens/create_workflow_buy.png) 
* Now add the final third transition from **Owned** back to **For sale** called '**Resell**'. To add a custom transition click the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-plus.svg" width="15" height="15"/> button on top of **Owned** and then change the self-transition into a state transition by changing the **To state** to **For sale**: ![Buy transition config](/img/screens/create_workflow_5.png)
    * Additionally add a parameter **Price** so that the current owner can set a new price.
    * And set the **Access** step to be **Restricted** to **Current owner**
    * In the end the setup should look like this:
    ![Buy transition config](/img/screens/create_workflow_resell.png) 

Thats it, the workflow is now done! Visually this is what we did:
![Buy transition config](/img/screens/create_workflow_6.png) 

## Deploying the workflow

### Choose network

### Deploy!