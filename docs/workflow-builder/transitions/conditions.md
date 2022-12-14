---
sidebar_position: 50
---

# Conditional routing



The idea of a condition is to route to an alternative step if the expression is false.

As an example it is useful in case there is a parallel flow where multiple transitions can lead to next state but only if all transitions have been called.

Here you can see an example of a Travel Request workflow. A travel request is approved only if the manager and the department head sign the request. If both are not yet given their approval the workfkflow routes *back* to Requested step, instead of moving forward to Approved step.

![Conditional routing example](/img/screens/steps_condition_example.png)

The Condition on the 'Department OK' transition is as follows:


![Conditional routing example](/img/screens/steps_condition.png)
