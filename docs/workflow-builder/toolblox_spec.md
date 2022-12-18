---
sidebar_position: 50
---

# Toolblox Spec

Toolblox Spec is a textual representation of a smart-contract workflow which helps to communicate its contents with stakeholders as well as use the import/export functionality in Toolblox.

The Toolblox Spec is a standard used to describe a workflow, specifically in the context of smart contracts. The Toolblox Spec includes the structure and syntax for defining the states, transitions, and actions of a workflow, as well as any clauses or functions that may be needed to facilitate the execution of the workflow. Each of these workflow specifications includes the states, transitions, and actions specific to their respective processes, as well as any clauses or functions needed to facilitate the execution of the workflow.

The Toolblox Spec is used as a standard for defining and implementing smart contract workflows in a variety of contexts, helping to ensure consistency and clarity in the specification and execution of these processes.

## Spec example

Consider this workflow:

![Example buy sell workflow](/img/screens/spec_demo.png)

The spec if exported is as follows

```
Sketch NFT : Sketch :  : ;

Id : integer(),
Status : integer(),
Name : string(),
Price : money(),
Image : image(),
Description : string(),
Nft owner : address(),
Currency : string(),
Buyer : address(),
Old owner : address(transient=yes,),
Amount : string(transient=yes,),;

0:For sale:Nft owner,
1:Sold:;

'' => 'For sale' : Sell (Name,Description,Price,Image) + ASSERT_ACCESS(restricted=Nft owner);
'For sale' => 'Sold' : Buy () + PAY(Old owner, Price, transitioncaller) + ASSERT_ACCESS(restricted=Buyer);
'Sold' => 'For sale' : Resell ();
```

## Import workflow

From the main screen it is possible to use Toolblox Spec to import a new workflow by clicking the *'Import Flow'* at app.toolblox.net.