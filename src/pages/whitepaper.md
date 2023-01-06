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

* **Cost of digitalization.** The current state of automating business processes and managing the lifecycle of business objects is complex and often requires the use of BPN-based tools or expensive enterprise software. This makes it difficult for small businesses to take advantage of these resources and requires a significant investment in expertise. This is true for a range of operations, including e-commerce, supply chain and delivery management, asset handover, and document management. In fact, on average, enterprises use 110 interconnected SaaS products to digitalize their processes ([1](https://www.statista.com/statistics/1233538/average-number-saas-apps-yearly/)).
* **Business process and data silos.** Most SaaS products are intended for use within a single company, rather than across multiple businesses. While there are integration platforms that allow for the synchronization and import/export of data, there is often not a single source of up-to-date information that all parties can rely and act on. This creates additional costs required for integration tools and intermediaries (such as payment providers).
* **Lost time on manual oversight.** Furthermore, business processes are often fragmented and regulated by paper contracts, which require manual oversight and enforcement.

### The solution

* **Simplify with full-stack approach.** To solve these problems, we offer a simple, no-code smart contract builder with state-based workflow and the option to generate a decentralized application (DApp). By using smart contracts on the blockchain, businesses can potentially streamline the number of apps they need to use, as smart contracts offer storage, code execution, and payment in a single solution.
* **On-chain business networks** Self-executing smart contracts allow for automatic action to be taken as soon as certain thresholds or business conditions are met, reducing both costs and time. Additionally, our smart contract workflows can reference each other and trigger events in other smart contracts, helping to save on integration costs and enabling the creation of interconnected business process networks.

### Our approach

Toolblox allows to manage full lifecycle of business objects (physical assets, digital content or workflow of documents) across companies, DAOs and different stakeholders using public blockchains.

<div class="wide">

![Transition and UI](/img/screens/transition_interface.png)

</div>

* Toolblox application allows companies to quickly and easily create their presence on the blockchain. With our visual, **no-code workflow builder**, users can build a smart-contract and deploy it as a usable application without any coding knowledge. Our state-machine based workflow is a great fit for smart-contract visualization.
* In addition to building custom smart contracts, Toolblox also **generates a DApp** out of the box for easy sharing with end users and business partners. For more complex user interfaces and customization, we also offer a DApp builder that enables users to design decentralized applications without any code.
* Our proposed **TBX token** acts as a service-locator enabling cross-workflow calls and, ultimately, the creation of on-chain business networks.

### Integrations

Toolblox integrates with the ecosystem, offering options for integrating with external services such as token insurance, collateralization, NFT portals, and fractionalization. Every workflow can be made ERC721 compatible and ERC20 tokens can be used as payments. Blockchain events can also be used for further integration, as well as decentralized social media integration.

### Target customer

Our platform is suitable for decentralized autonomous organizations looking to manage custom workflows and projects, supply chain and commodities industries, and small and micro businesses. Toolblox can be used as a digitalization tool, rapid prototyping tool, development kickstarter, or as a backbone to an existing product.

## Workflow builder

Workflow is a sequence of **states** with **transitions** between states. For example, a workflow to sell products would look something like this (the Buy transition is a payment from Buyer to Owner):

![Simple example flow](/img/screens/whitepaper_exflow.png)

Each workflow defines as well an **object** which the workflow applies to. In the case of the example the object is 'NFT' with the following **attributes**: Id, Status, Name, Price, Image, Owner and Buyer.

Each transition (from state to state) defines additional automation which can be perfomed during that transition such as: attributes to change, other workflows to call, expressions to evaluate, payments to execute. For example here is how the auto-generated interface would look like for the Sell transition which accepts Name, Price and Image as parameters.

<div class="narrow">

![Simple example flow screen](/img/screens/whitepaper_exscreen.png)

</div>

### Workflow examples

Some examples of workflows that can be built with Toolblox include:

* A project management system with states for "active," "cancelled," and "waiting for feedback," and transitions for "amend," "pay," "create," "agree," and "update."
* A document management system with states for "draft," "review," and "approved," and transitions for "edit," "submit for review," and "approve."
* An offer or proposal system with states for "pending," "accepted," and "rejected," and transitions for "create," "accept," and "reject."

### Workflow ownership

The generated smart contract will be deployed using customers wallet so it will be under full ownership of the customer: this includes the workflow logic and any data it shall contain. Furthermore, the tools provided by Toolblox are designed with decentralization in mind meaning they can work offline, and various parts can be configured to use third party implementations. Toolblox is like a hammer – while a hammer is disposable the house which was built with it will persevere.

## Toolblox Spec

### Introduction

The Toolblox Spec is a standard used to describe a workflow, specifically in the context of smart contracts. It includes the structure and syntax for defining the states, transitions, and actions of a workflow, as well as any clauses or functions needed to facilitate the execution of the workflow. The Toolblox Spec is used as a standard for defining and implementing smart contract workflows, helping to ensure consistency and clarity in their specification and execution.

In addition to being used to communicate with stakeholders, the textual representation of a smart-contract workflow provided by the Toolblox Spec can also be used to facilitate communication with AI systems. This opens up new opportunities for creators, such as the ability to automate certain parts of the workflow or to integrate with AI-powered tools and services. By using the Toolblox Spec, creators can take advantage of the growing capabilities of AI to streamline and optimize their workflows.

### Comparison to BPMN

<figure>

![Traditional complex BPMN](/img/screens/whitepaper_bpmn.png)

<figcaption>Traditional Business Process Modelling Notation (BPMN)</figcaption>
</figure>

Toolblox does not use Business Process Modelling Notation (BPMN) standard employed by traditional automation tools. Instead, we propose a novel blockchain-native notation similar to the one proposed by Hyperledger Fabric in describing their [PaperNet example](https://hyperledger-fabric.readthedocs.io/en/release-1.4/tutorial/commercial_paper.html): “There are two important concepts that concern us when dealing with commercial paper; states and transactions. Indeed, this is true for all blockchain use cases; there are conceptual objects of value, modeled as states, whose lifecycle transitions are described by transactions. An effective analysis of states and transactions is an essential starting point for a successful implementation.”

Toolblox Spec compared to BPMN:
* Blockchain-compatible model
* Easier to use. No elaborate arrows or swimlanes.
* Linear – reminiscent of a breadcrumbs or shopping cart steps (billing, shipping etc.) which the user intuitively grasps.
* Usable as a communication tool between partners and clients 
* Usable by more people. While a traditional BPMN chart mostly used in legacy systems is often only readable by the creator, our proposed format is designed to be used by anybody. For example, we use it inside the application to show ‘where the user is in the process’. Kind of like steps in a wizard - as seen on the screenshot in [previous paragraph](#what-is-a-workflow)


### Benefits

* **Human-readable**. Communicate contract flow with co-workers or partners via chat, email or other text-based mediums.
* **Integrations**. Integration with AI chatbots such as GPT
* **Universal ABI**. Standardized serialization of smart contracts instead of using a fragmented approach (custom ABI format) for each chain 
* **Import/export/backup/clone**. Easily transportable or savable as text document, email etc.
* **Integrity verification**. Being able to verify that a contract on the chain does perform what it supposes to do. One can always run ‘Spec -> to smart contract code -> to bytecode’ transformation and compare it to the one deployed on the chain.
* **Resilient**. In theory it would be possible to design a third-party ‘Spec-> to smart contract code’ converter, for various reasons. In this case it is theoretically possible to circumvent all Toolblox native tools.



### Key features of the Spec

* Support for various data types, including integers, strings, booleans, and addresses
* The ability to specify restrictions on access to certain functions or states
* The ability to define custom validation rules for transitions
* The ability to call external functions or flows from within a contract
* The ability to set property values using calculations
* The ability to make payments or transfer funds within a contract
* The ability to trigger events or log data to the blockchain.

### Formal definition of Toolblox Spec

```
/*
 * Legend:
 * [] - these brackets indicate optional parts
 * {} - these brackets indicate mandatory input
 * [,...n] - indicates possible repeat of the previous section and the delimiter (comma in this case)
 * | - pipe splits equally possible inputs (variants)
 * All other symbols (like equal signs, less than sign, larger than sign), brackets (like normal brackets), quotation marks (like '), and delimeters (commas, semicolons) are MANDATORY.
 * semicolons (;) are used to split sections (header, properties, states, transitions) and each transition.
 * Do not omit quotation marks around 'from_state_name' and 'to_state_name'.
 */

{ project_name } : { object_name } : [ symbol ] : [ interface [ ,...n ] ] ;

[ Currency: { currency_name },{ currency_symbol },{ currency_contract_address }; ]

Id : integer(),
Status : integer(),
Name : string(),
[ { attribute_name } : { string | integer | money | address | restrictedaddress | enum | float | date | image | blob | boolean | addressinfo | addressandpersoninfo | fk | timestamp }([values={ enum_value }[ |...n ] | notnull=yes | transient=yes | fk={ other_flow_url } ])] [ ,...n ] ;

{ state_id }:{ state_name }:[{ owner_property_name }] [ ,...n ] ;

-- If 'from_state_name' is empty ('') it will become a transition to create (mint) an object. 
'[ from_state_name ]' => '{ to_state_name }' : { transition_name } ( [ { transition_parameter_name } ] [ ,...n ] )
    [
        -- Assert_access adds constraint to check if executor is correct. If no user set, then it sets the user to the currently caller (sender).
        + ASSERT_ACCESS( restricted={ address_type_property_name } | flow={ other_flow_url } )
        | + VALIDATION( encoded_expression )
        | + RPC({ other_flow_chain }.{ other_flow_net_kind }.{ other_flow_contract }.{ other_flow_url }.call([ { external_flow_parameter } ] [ ,...n ]))
        | + CALCULATED({ property_to_set_name } = encoded_expression )
        | + PAY({ workflow | receiver_addressproperty_name }, { value_property_name }, { transitioncaller | workflow })
        | + EVENT(standard={ event_standard }, version={ event_version }, event={ event_name }, [ { event_attribute_key }={ value_property_name } ] [ ,...n ])
    ] [ ;...n ]

    
```


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

<div class="wide">

![Transition and UI](/img/architecture.png) 

</div>

### PWA DApp

Main application is usable online or offline (using local browser storage). It contains the following primary tools:

* **Workflow builder** which allow to build workflows, deploy with a single click to selected blockchain and use the auto-generated user interface. In beta now.
* **DApp builder** which allows to create custom applications which have their own theme and connect potentially to multiple workflows. In alpha as of now.
* **Data migrator** allows to upgrade workflows and bring over object data without any coding. Not yet available.
* **Browser** to explore existing workflows.

### Cloud services

Cloud services are accessible for authenticated users of the PWA DApp. Some services are available at different levels of Toolblox subscription.

#### Versioning service

API to save workflows and DApps and maintain deployed versions.

#### Blockchain compiler services

APIs for each blockchain to compile smart-contract code into bytecode.

#### IPFS wrapper service

IPFS-compatible API wrapping IPFS service, used by the PWA to upload images and blobs.

#### Printer service

API to output smart-contract code based on given Workflow Spec, blockchain language and language version.

### TBX Token


![Transition and UI](/img/tbx_graph.png) 



ERC20 utility token with added functionality to store up-to-date workflow locations or retrieve them for cross-flow messaging. Has mechanism to accept fees in TBX on operations. At this stage all fees are 0TBX.

#### Cross-workflow communication

Cross-workflow communication is a prerequisite for creating business networks on chain. Here are few examples where cross workflow communication is used to start child processes in other departments or in other companies:

##### Workflow for a shopping cart example

The cart can be in state active, paid, and shipped. In order to add items into that workflow however there is another 'shopping cart item' workflow with states registered, shipped and returned. This approach enables to create a decentralized web shop where each item in the shopping cart is an NFT.

<div class="wide">

![Shopping cart multi-flow](/img/screens/multiflow_shopping_cart.png)

</div>

##### Loan approval workflow example

Parent object has a lifecycle event (e.g. Approved). There is another, cashflow workflow and payment step. The parent workflow *starts off* an child workflow by calling 'Create'. The initial workflow is *owned* by the operations team but invoice workflow is owned by the *accounting* department. 

<div class="wide">

![Loan multi-flow](/img/screens/multiflow_loan.png)

</div>

##### Parking fine workflow example

The fine is registered and must be paid but the car *could* also be impounded. The impound workflow however handled by a partner - the impount operator.

<div class="wide">

![Parking fine multi-flow](/img/screens/multiflow_impound.png)

</div>

Here is an example of the sequence of calls and how the TBX Token plays an important role in the workflow for a loan Application. It starts by the user executing the transition Approve. The approval transition however also calls the Create transition of the Cashflow workflow. Before it can do that, the TBX service locator is used to obtain the contract current location.


![Cross workflow call in sequence diagram using TBX](/img/screens/cross_graph.png)


#### Toolblox community governance

TBX also acts as a governance token and is used for voting. Some of the topics might include: setting of token fees, enahancements to Toolblox Spec and prioritization of developments.

<p class="noborder small">

<img src="/img/tbx.png" alt="TBX icon" icon="icon" />

</p>


## Toolblox business model

Creating workflows and deploying to any blockchain is free. Toolblox provides complementary cloud services for versioning and workflow management. Furthermore, we monetize the usage of the generated user interface on volume basis. Pricing falls into brackets (with a free tier) and is available in detail at www.toolblox.net. Additionally, the TBX ERC20 is used for more advanced use-cases such as cross-workflow communication operates on a fee-based mechanism.

## Timeline and milestones

<div class="timeline">

1. 2022 project **MVP**
1. 2022 March. **Winner** ‘First Place’ and ‘Best use of Technology’ at Near Metabuild II hackathon
1. 2022 summer. Market research and product development
1. 2022 August: **Release of Workflow designer**
1. 2022 August: **Winner** First place Tooling/Infrastructure at Polygon BUIDL IT hackathon
1. 2022 September: **Release of DApp builder**
1. 2022 December: **Release of ADA** ([Autonomous Decentralized Accountant](https://ada.toolblox.net/)) blockchain invoice generator
1. 2023 January: **Public beta test** in partnership with [LNC](https://learnnear.club/)

</div>

## Roadmap

<div class="timeline">

1. 2023 ??????

</div>

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

