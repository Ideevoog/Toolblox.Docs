---
sidebar_position: 40
---

# ERC-721 compatibility

:::caution

If unsure it is not recommended to set-up ERC-721 compatibiliy. This is a more technical concept and requires deeper knowledge of blockchain tools.

:::

## Introduction

ERC721 is a blockchain standard for representing *ownership* of non-fungible tokens, NFTs (each item is unique). ERC721 provides a protocol for asking the contract/workflow
* *'who is the current owner of the item?'*
* and also events to notify that *'a new owner for item X has been set!'*.

**Every item in Toolblox can be considered a non-fungible token.** However, it is not always straightforward to determine 'who is the owner of an item?'. For simple assets such as 'NFT images' it is clear, but for business objects such as a 'Loan' it is not - does the loan belong to the lender or the lendee? For this purpose the interface compatibility as well as ownership scope in Toolblox are *opt-in*. Also, please refer to [Blokchain feature matrix](blockchain_feature_matrix) for availability.

## Benefits

The main benefit of setting up ERC721 is compatibility with external systems.
* For example, NFT workflows can be exposed to wallets, meaning the owner can display owned images in external applications.
* Having ERC721 compatibility unlocks other DeFi capabilities - for example an asset registered in Toolblox can be fractionalized, collateralized or insured by other external tools.

## Set-up

<video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" >
  <source src="/vid/erc721_compatibility.mp4" type="video/mp4"></source>
  Your browser does not support the video tag.
</video>

### Step 1. Set up ownership scope

A workflow might have serveral roles and several states. For uniquely identifyuing the *owner* in each state it is required to map states to roles:

### Step 2. Choose ERC721 compatiblity

In the Deployment step, choose the ERC721 (NFT) compatibility