---
sidebar_position: 70
---

# Events

Blockchains transactions can emit events. The purpose is to broadcast notifications on certain business process junctions so that other external tools can conduct subsequent activities such as reporting or sending out notifications to e-mail.

Toolblox already notifies of item changes. Additionally, when ERC721 interface is applied to a worfklow the 'owner' change is broadcasted.

The only selectable event in the Events step of a transition is the "Issue invoice" event. Each step specifies its own fields which it will attach to the event. In the case of the "Issue invoice" event the invoice article, monetary amount, currency, from (invoice source), to (invoice target) and an optional invoice id must be specified. More information on this standard at [Ada - Autonomous Decentralized Accountant](https://ada.toolblox.net).

![Conditional routing example](/img/screens/steps_events.png)
