---
sidebar_position: 20
---

# States

State represents a situation or a phase of an item. For example a Car might be in state Damaged and then move into a state Repaired through a transition named Repair. 

As an example imagine a workflow for buying 3D prints (read [here](/docs/workflow-builder/items#real-world-example)). It starts with getting a price quote from the printhouse and ends with the print posted/sent out. The item in this case would be Printout and during the workflow it has four states: (Price) **Requested**, **Offer made**, **Paid** and **Shipped**. During a transition from state to state attributes can be set.


<div class="wide">

![Item attributes evolving over the course of the workflow](/img/screens/item_example.png) 


</div>

The order of the states can be set by moving them around as depicted here: 

<video autoplay="autoplay" playsinline="playsinline" muted="muted" loop="loop" >
  <source src="/vid/state_reordering2.mp4" type="video/mp4"></source>
  Your browser does not support the video tag.
</video>

