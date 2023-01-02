---
sidebar_position: 2
title: 5 minute example
sidebar_label: 5 minute example
slug: smart_contract_in_five_minutes
tags:
  - Basics
  - Getting started
---

# How to create an NFT smart contract in 5 minutes

Let's go through a simple example and create a workflow to sell digital content aka NFT's.

## Prerequisites

Before we start it is required acquire the neccessary access.

### Create account in Toolblox

In order to create and deploy smart contracts you need to [create an account and log-into Toolblox](https://app.toolblox.net/authentication/login?returnUrl=https%3A%2F%2Fapp.toolblox.net%2F).

### Install Metamask

To deploy a new smart contract for everyone to use and to use it, you need a wallet. In Tooblox you have 2 options:
* [Install Metamask](https://metamask.io/download/) if you wish to use these blockchains: Aurora, Avalanche, Ethereum, Evmos or Polygon.
* [Create a Near Wallet](https://wallet.testnet.near.org/) if you wish to use the Near blockchain.

**For our test case, please install the Metamask add-on.**

### Get some Aurora test-coins

In order to deploy and use smart contracts you need to pay for 'gas' - these are the rules of blockchain. For testing purpose each blockchain has a test version called testnet - it looks and behaves like the real one, except the currency which moves on it is *fake test money*.

In order to test our smart contract you would need to use a **faucet** to get a little bit of the fake test money. It is basically a free service which just sends fake test money to an account you desire.

**For our test case, please use the Aurora's faucet which can be found here: https://aurora.dev/faucet.**

## Step 1. Create Workflow

<video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" >
  <source src="/vid/step0.mp4" type="video/mp4"></source>
   <img src="/img/screens/create_workflow_1.png" title="Your browser does not support the <video> tag"></img>
  Your browser does not support the video tag.
</video>

1. Go to https://app.toolblox.net/ and click on 'Create flow'.
1. Set **name**
1. Choose **workflow template**:
   * **List view** displays a simple grid of your items while
   * **Grid view** displays a thumbnail view - choose this layout in case your item has a photo or image to display.

:::tip
Choose the **Workflow name** wisely. It needs to be globally unique because you can access it publicly later from the url app.*toolblox.net/my_unique_workflow_name*. 
:::

## Step 2. Define the object

<video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" >
  <source src="/vid/step1.mp4" type="video/mp4"></source>
   <img src="/img/screens/create_workflow_2.png" title="Your browser does not support the <video> tag"></img>
  Your browser does not support the video tag.
</video>

:::info

Object is the central item which is managed by the smart contract. Objects have attributes - for example the object 'Car' might have attributes such as Price, Make, Model, Speed and Color.

:::


* Set **Object name** to 'Image'
* Choose an icon of your preference to represent your item.
* Add '**Price**' and '**Image**' attributes
* Add two custom attributes
    * '**Current owner**' with type **User**
    * '**Previous owner**' with type **User**. Additionally mark it as **transient**.
    
:::note
A **transient** attribute is something which will not get saved - it is marely a helper variable during the transition.
![Define the object attributes](/img/screens/create_workflow_transient.png)
:::

## Step 3. Compose the flow

<video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" >
  <source src="/vid/step3.mp4" type="video/mp4"></source>
   <img src="/img/screens/create_workflow_6.png" title="Your browser does not support the <video> tag"></img>
  Your browser does not support the video tag.
</video>

### Add states

First, add these 2 **states** by clicking the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-plus.svg" width="15" height="15" icon="icon"/> button. 
* **For sale**
* **Owned**

### Add Mint transition

Add an initial **transition** by clicking the first <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-plus.svg" width="15" height="15" icon="icon"/> button: ![Click button to add the inital transition](/img/screens/create_workflow_3.png) 
* **Name**: '**Mint**'
* **Parameters**: **Name**, **Image**, **Price**
* **Access**: **Restricted** to **Current owner**.

:::note
Setting **Access** to **Current owner** means if it has not been set on the object (which it hasn't yet for the initial Mint transition), it will be set. Whoever calls the action **Mint** will be the **Current owner** of our Object!
:::

### Add Buy transition

Add a second transition between the states '**For sale**' and '**Owned**' called '**Buy**'
* **Name**: '**Buy**'
* **Calculations**:
    * **Previous owner** = **Current owner**
    * **Current owner** = **caller**. 
* **Payment**: from **caller** to **Previous owner** with the value of **Price**

:::note
In this example we used the **Previous owner** as a transient (temporary) variable. The idea is that before the payment step is executed we set up the **Previous owner** so that we can use it in the next, payment step. This is needed because the caller of the method is set to **Current owner**.
:::

### Optional: Add Resell transition

Try to add a third transition called 'Resell' going from 'Owned' back to 'For sale'. Hint: click the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-plus.svg"  icon="icon" width="15" height="15"/> on top of 'Owned' and change the target status to be 'For sale' instead. Add Price parameter and don't forget to restrict Access to 'Current owner'!


### Summary

Thats it, the workflow is now done! This is what it should look like if you added the optional third transition as well:
![Buy transition config](/img/screens/create_workflow_6.png) 

## Step 4. Deploy to blockchain

<video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" >
  <source src="/vid/step4.mp4" type="video/mp4"></source>
   <img src="/img/screens/create_workflow_6.png" title="Your browser does not support the <video> tag"></img>
  Your browser does not support the video tag.
</video>

Deploying your workflow to blockchain could not be easier. Just choose a blockchain - Aurora for our example - and hit **Deploy**!

## Congratulations!

Thats it, your first smart contract is now running on blockchain. To test it our Toolblox generates a simple user interface. Click **Run** to give it a test run.

<video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" >
  <source src="/vid/step5.mp4" type="video/mp4"></source>
   <img src="/img/screens/create_workflow_6.png" title="Your browser does not support the <video> tag"></img>
  Your browser does not support the video tag.
</video>

:::info

If you wish to load the NFTs into any NFT Wallet, the contract needs to be made [ERC721 compatibile](/docs/workflow-builder/erc721_compatibility).

:::