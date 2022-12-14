---
sidebar_position: 10
---

# Transition basics

Transitions are movements from one state to the other. Besides changing the status of the item there are other steps that can be enabled (ordered in order of execution during transition):
1. [Accept parameters](parameters) to change item attributes
1. [Set access restrictions](/docs/workflow-builder/transitions/acccess_restrictions) - who is able to perform transitions
1. [Set input validation](validation) E.g. check if amount is higher than a threshold.
1. [Conditional routing](conditions) - go to a different state based on item attributes.
1. [Calculations](calculations) - set attribute values programmatically. E.g. set default values or calculate sums.
1. [Events](events) - broadcast blockchain events such as issuing invoices etc.
1. [Calling other flows](calling_other_flows) - way of initiating child workflows or signal completion of dependent flows.
1. [Payments](payments) - enables to collect payments from users or pay out funds from the workflow.

## Transitions in the UI

After deploying a workflow to the blockchain Toolblox generates a simple UI to manage items. Here you can see a workflow which enables processing 3D print orders ([description of this flow](/docs/workflow-builder/items#real-world-example)). On the right hand side you can see a snapshot of one Printout, which at the moment is in state **Offer made** - this means that only 2 transitions are available: **Accept** and **Rejected**.

<div class="wide">

![Transition and UI](/img/screens/transition_interface.png) 

</div>

