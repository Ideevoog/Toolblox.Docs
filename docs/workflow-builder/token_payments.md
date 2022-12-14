---
sidebar_position: 40
---

# ERC-20 token payments

## Introduction

By default all payments defined in the workflow will use the *native* currency. For example if the workflow is deployed on Ethereum all payments are handled in ETH, if on Polygon network then MATIC. In other words, the unit of the money type attribute is quoted in the native currency of the blockchain. 

It is however possible to use *other* currencies for payments. For example it is possible to choose a stablecoin instead to perform payments in **EUR or USD** equivalent. Please refer to [Blokchain feature matrix](blockchain_feature_matrix) for availability.



:::tip

Feel free to contact us at [info@toolblox.net](mailto:info@toolblox.net) if you need a currency to be available!

:::

## Set-up

:::info

The set currency applies to *all* payments in the workflow - it is not possible to assign a currency per payment.

:::

To set up a non-native payment currency select one in the Deployment step:

![Choosing a non-native currency](/img/screens/non_native_currency.png)