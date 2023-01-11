---
title: Markdown page example
---

# Toolblox whitepaper

:::info

## Our vision

Our vision is to make the benefits of blockchain technology accessible to everyone and every business globally.

## Our mission

Our mission is to provide the tools and resources necessary to create interconnected, self-executing smart contracts and on-chain business networks. These networks allow partners to effectively exchange value and act on a single source of truth, while also enabling end-users to participate through decentralized applications (DApps).

:::

## Introduction

### The problem

* **Cost of going digital.** The current state of automating business processes and managing the lifecycle of business objects is complex and often requires the use of BPN-based tools or expensive enterprise software. This makes it difficult for small businesses to take advantage of these resources and requires a significant investment in expertise. This is true for a range of operations, including e-commerce, supply chain and delivery management, asset handover, and document management. In fact, on average, enterprises use 110 interconnected SaaS products to digitalize their processes ([1](https://www.statista.com/statistics/1233538/average-number-saas-apps-yearly/)).
* **Isolated processes and data.** Most SaaS products are intended for use within a single company, rather than across multiple businesses. While there are integration platforms that allow for the synchronization and import/export of data, there is often not a single source of up-to-date information that all parties can rely and act on. This creates additional costs required for integration tools and intermediaries (such as payment providers).
* **Lost time on manual oversight.** Furthermore, business processes are often fragmented and regulated by paper contracts, which require manual oversight and enforcement.

### The solution

* **Simplify with our full-stack approach.** To solve these problems, we offer a simple, no-code smart contract builder with state-based workflow and the option to generate a decentralized application (DApp). By using smart contracts on the blockchain, businesses can potentially streamline the number of apps they need to use, as smart contracts offer storage, code execution, and payment in a single solution.
* **Revolutionizing business communications** Our approach takes traditional Business Process 
Modelling Notation (BPMN) one step further making it highly usable as a communications tool between partners and clients. This helps to establish common usecases around shared data.
* **On-chain business networks** Self-executing smart contracts allow for automatic action to be taken as soon as certain thresholds or business conditions are met, reducing both costs and time. Additionally, our smart contract workflows can reference each other and trigger events in other smart contracts, helping to save on integration costs and enabling the creation of interconnected business process networks.
* **AI ready** Toolblox	uses a human-readable representation of a smart-contract workflow (Toolblox Spec) that can also be used to 
facilitate communication with AI systems. For example to gain the ability to generate workflows from written paper contracts.
* **Data ownership** The generated smart contracts are deployed using customers wallet so thet are under full ownership of the customer: this includes the workflow logic and any data it contains.
* **Web3 ecosystem integration** ERC721 compatibility and using ERC20 tokens as payments enable businesses to take advantage of the wider DeFi ecosystem tools such as token insurance, collateralization, NFT portals, and fractionalization. Furthermore, decentralized social media integration is possible.

### Toolblox

Toolblox allows to manage full lifecycle of business objects (physical assets, digital content or workflow of documents) across companies, DAOs and different stakeholders using public blockchains.

<div class="wide">

![Transition and UI](/img/screens/transition_interface.png)

</div>

* Toolblox application allows companies to quickly and easily create their presence on the blockchain. With our visual, **no-code workflow builder**, users can build a smart-contract and deploy it as a usable application without any coding knowledge. Our state-machine based workflow is a great fit for smart-contract visualization.
* Workflow in Toolblox is a sequence of **states** with **transitions** between states. Each workflow defines as well an **object** and **object attributes**. Each transition (from state to state) defines additional automation which can be perfomed during that transition such as: attributes to change, other workflows to call, expressions to evaluate, payments to execute. 
* In addition to building custom smart contracts, Toolblox also **generates a DApp** out of the box for easy sharing with end users and business partners. For more complex user interfaces and customization, we also offer a DApp builder that enables users to design decentralized applications without any code.
* Our proposed **TBX token** acts as a service-locator enabling cross-workflow calls and, ultimately, the creation of on-chain business networks.

#### Examples

Some examples of workflows that can be built with Toolblox include:

* A project management system with states for "active," "cancelled," and "waiting for feedback," and transitions for "amend," "pay," "create," "agree," and "update."
* A document management system with states for "draft," "review," and "approved," and transitions for "edit," "submit for review," and "approve."
* An offer or proposal system with states for "pending," "accepted," and "rejected," and transitions for "create," "accept," and "reject."

## Business model

Creating workflows and deploying to any blockchain is free. Toolblox provides complementary cloud services for versioning and workflow management. Furthermore, we monetize the usage of the generated user interface on volume basis. Additionally, the TBX ERC20 is used for more advanced use-cases such as cross-workflow communication operates on a fee-based mechanism. 

## Target customer

Our platform is suitable for decentralized autonomous organizations looking to manage custom workflows and projects, supply chain and commodities industries, and small and micro businesses. Toolblox can be used as a digitalization tool, rapid prototyping tool, development kickstarter, or as a backbone to an existing product.


## Timeline and milestones

<div class="timeline">

1. 2022 February: **Prototype**
1. 2022 March: **Winner** ‘First Place’ and ‘Best use of Technology’ at Near Metabuild II hackathon
1. 2022 summer: Market research and product development
1. 2022 August: Release of **Workflow builder**
1. 2022 August: **Winner** First place Tooling/Infrastructure at Polygon BUIDL IT hackathon
1. 2022 September: Release of **DApp builder**
1. 2022 December: Release of **ADA** ([Autonomous Decentralized Accountant](https://ada.toolblox.net/)) blockchain invoice generator
1. 2022 December: Launch of **Toolblox Academy** learning resource
1. 2023 January: **Public beta test** in partnership with [LNC](https://learnnear.club/)

</div>

## Roadmap

<div class="timeline">

1. **2023** Q1: Public beta launch
1. 2023 Q1: Seed investment secured
1. 2023 Q1: First hires
1. 2023 Q1: Test DEX rollout and launchpad testing
1. 2023 Q2: Tokenomics developed
1. 2023 Q2: Generative AI alpha release
1. 2023 Q2: IDO
1. 2023 Q3: Toolblox Widgets for web2 integration
1. 2023 Q4: Toolblox notification engine
1. **2024** Q1: Toolblox Upgrade and Migration tool
1. 2024 Q2: Toolblox Bridge launch

</div>


## Toolblox Architecture

The architecture is driven by three main ideas: decentralization, extensibility and standardization.

### Decentralization

Toolblox user interface is a Progressive Web Application (PWA). While usable with a web browser it can be obtained and run without a web server. The idea is that creating workflows should be possible without any backend connectivity to Toolblox cloud services in order to eliminate central points of failure. While the app is available at app.toolblox.net, it could as well be downloadable from IPFS or by other means and installed as a standalone application. This ensures resilience and anonymity if so desired by the user. PWA is part of stage 1 developments and is currently up and running.

### Extensibility

Toolblox offers some free and some paid services out of the box, such as code printer, IPFS upload, versioning services, compilators etc. User should be able to decouple these services and use either local alternatives (e.g. command line compiler) or other services (such as straight IPFS connection with custom API key) instead. This ensures decentralization and gives the user options to pick-and-choose providers based on particular preference. This advanced extensibility is expected to be delivered in stage 2.

### Standardization

One of the key points in fulfilling our mission is creating business networks through interconnected workflows. This means

1. Workflows need to be able to reference and call each other.
1. There needs to be a common language to describe these on-chain business processes. Workflows might reside in different incompatible blockchains and partners have to exchange information about each others workflows using chat, email or written contracts.

**Toolblox Spec** is a textual representation of Toolblox workflow. It is human readable, enables import/export and can be used for AI integrations.

**TBX Token** implements a service-locator pattern which allows workflows to register themselves and to call other registered workflows.

### Components

* PWA DApp
* Cloud services
    * Versioning service
    * Blockchain compiler services
    * IPFS wrapper service
    * Printer service
* TBX Token
* TBX Token Bridge

<div class="wide">

![Transition and UI](/img/architecture.png) 

</div>

### PWA DApp

Main application is usable online or offline (using local browser storage). It contains the following primary tools:

* **Workflow builder** which allow to build workflows, deploy with a single click to selected blockchain and use the auto-generated user interface. In beta now.
* **DApp builder** which allows to create custom applications which have their own theme and connect potentially to multiple workflows. In alpha as of now.
* **Data migrator** allows to upgrade workflows and bring over object data without any coding. Not yet available.
* **Browser** to explore existing workflows.


### TBX Token


<!-- <p class="noborder small">

<img src="/img/tbx.png" alt="TBX icon" icon="icon" />

</p> -->

![Transition and UI](/img/tbx_graph.png) 


ERC20 utility token with added functionality to store up-to-date workflow locations or retrieve them for cross-flow messaging. This enables cross-workflow communication which is a prerequisite for creating business networks on chain.



TBX also acts as a governance token and is used for voting. Some of the topics might include: setting of token fees, enhancements to Toolblox Spec and prioritization of developments.

## Team

<p class="noborder small avatar">

<img src="/img/profile_silver.jpg" alt="TBX icon" icon="icon" />

</p>

### Silver

#### Co-Founder

Software architect and team lead with extensive experience in various domains such as commodities trading, public sector, large scale e-commerce and blockchain.


<p class="noborder small avatar">

<img src="/img/profile_marja.jpg" alt="TBX icon" icon="icon" />

</p>

### Marja

#### Co-Founder

Previously worked in start-ups as project, sales and HR manager.

