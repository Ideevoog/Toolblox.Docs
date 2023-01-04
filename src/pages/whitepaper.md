---
title: Markdown page example
---

# Toolblox whitepaper

## Introduction

Toolblox is a platform that allows companies to quickly and easily create their presence on the blockchain. With our visual, no-code approach, users can build a workflow and deploy it as a usable application without any coding knowledge. Our state-machine based workflow is a great fit for smart-contract visualization.

In addition to building custom smart contracts, Toolblox also generates a simple app out of the box for easy sharing with end users and business partners. For more complex user interfaces and customization, we also offer a DApp builder that enables users to design decentralized applications without any code.

![Transition and UI](/img/screens/transition_interface.png) 

Toolblox integrates with the ecosystem, offering options for integrating with external services such as token insurance, collateralization, NFT portals, and fractionalization. Every workflow can be made ERC721 compatible and ERC20 tokens can be used as payments. Blockchain events can also be used for further integration, as well as decentralized social media integration.

Our platform is suitable for decentralized autonomous organizations looking to manage custom workflows and projects, supply chain and commodities industries, and small and micro businesses. Toolblox can be used as a digitalization tool, rapid prototyping tool, development kickstarter, or as a backbone to an existing product.

Some examples of workflows that can be built with Toolblox include:

* A project management system with states for "active," "cancelled," and "waiting for feedback," and transitions for "amend," "pay," "create," "agree," and "update."
* A document management system with states for "draft," "review," and "approved," and transitions for "edit," "submit for review," and "approve."
* An offer or proposal system with states for "pending," "accepted," and "rejected," and transitions for "create," "accept," and "reject."

We have also developed the Toolblox Spec, a textual representation of a smart-contract workflow that can be used to communicate with AI systems, stakeholders and facilitate import/export functionality. The Toolblox Spec includes the structure and syntax for defining the states, transitions, and actions of a workflow, as well as any clauses or functions needed to facilitate the execution of the workflow.

## Toolblox Architecture

The architecture is driven by two main ideas: decentralization and extensibility.

### Decentralization

Toolblox user interface is a Progressive Web Application. While usable with a web browser it can be obtained and run without a web server. The idea is that creating workflows should be possible without any backend connectivity to Toolblox web server in order to eliminate central points of failure. While the app is available at app.toolblox.net, it could as well be downloadable from IPFS or by other means and installed as a standalone application. This ensures resilience and anonymity if so desired by the user. PWA is part of stage 1 developments and is currently up and running.

### Extensibility

For convenience Toolblox offers some free and some paid services out of the box, such as code printer, IPFS upload, versioning services, compilators etc. User should be able to decouple these services and use either local alternatives (e.g. command line compiler) or other services (such as straight IPFS connection with custom API key) instead. This ensures decentralization and gives the user options to pick-and-choose flavors. This advanced extensibility is expected to be delivered in stage 2.

### Components

* PWA DApp
* Versioning service
* Blockchain compiler services
* IPFS wrapper service
* Printer service
* TBX Tokens

<div class="wide">

![Transition and UI](/img/architecture.png) 

</div>


## Toolblox Spec

### Introduction

The Toolblox Spec is a standard used to describe a workflow, specifically in the context of smart contracts. It includes the structure and syntax for defining the states, transitions, and actions of a workflow, as well as any clauses or functions needed to facilitate the execution of the workflow. The Toolblox Spec is used as a standard for defining and implementing smart contract workflows, helping to ensure consistency and clarity in their specification and execution.

In addition to being used to communicate with stakeholders, the textual representation of a smart-contract workflow provided by the Toolblox Spec can also be used to facilitate communication with AI systems. This opens up new opportunities for creators, such as the ability to automate certain parts of the workflow or to integrate with AI-powered tools and services. By using the Toolblox Spec, creators can take advantage of the growing capabilities of AI to streamline and optimize their workflows.

### Use-cases

* Communicate contract flow with co-workers or partners via chat, email or other text-based mediums.
* Integration with AI chatbots such as GPT
* Standardized serialization of smart contracts instead of using a fragmented approach (custom ABI format) for each chain 
* Import/clone new flows within Toolblox

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
<!-- 
1. Introduction
  - Overview of Toolblox and its purpose
  - Description of the problem the platform solves
  - Summary of key features and benefits

2. Technical Architecture
  - Description of the state-machine based workflow
  - Explanation of the no-code visual approach
  - Overview of the DApp builder and app generation capabilities
  - Discussion of integrations with external services and compatibility with ERC20 and ERC721 tokens

3. Use Cases and Target Market
  - Description of the types of organizations and industries that can benefit from using Toolblox
  - Examples of workflows that can be built with the platform
  - Discussion of the various ways Toolblox can be used (digitalization, prototyping, development kickstarter, etc.)

4. Roadmap and Development Plans
  - Outline of the development timeline and milestones
  - Description of any partnerships or collaborations
  - Discussion of any future plans for the platform

5. Token Economics
  - Explanation of the token distribution and intended use
  - Description of any incentives or rewards for token holders

6. Team and Advisors
  - Introduction to the team behind Toolblox and their relevant experience
  - List of any advisors or influential figures supporting the project

7. Conclusion
  - Recap of the key points of the whitepaper
  - Summary of the potential impact of Toolblox
  - Call to action for potential investors or users -->
