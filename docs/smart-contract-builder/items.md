---
sidebar_position: 10
---

# Items

One workflow can process one kind of item. For example if you have a workflow for tracking parcels, then the item going through that workflow is 'Parcel'. But there might be several parcels at any given point of time - every one of the parcels has its own state and other attributes.

Some other examples of items:

| Example workflow   | Item |
| ------------------ | ----------- |
| Loan application procedure | Loan|
| Escrow payment flow | Payment    |
| Car repair shop | Incident       |
| Car reseller | Car|
| NFT sales portal | Image |
| Project funding procedure | Project |


## Item attributes

Items have characteristics - information to describe every item. This information evolves as the item passes through its workflow. Each attribute also has an attribute type - for example a Color could be Type with values Red|Green|Blue but the attribute Price would be of type Money.

### Real world example

As an example imagine a workflow for buying 3D prints. It starts with getting a price quote from the printhouse and ends with the print posted/sent out. This is an overview of the use-cases in this example:
* Client creates a request to get back a quote for a printing job. The request contains of the following attributes as parameters: name, print file, client wallet address, quantity
* A whitelisted Printer can make an offer for the job by also adding the price.
* The client can then either reject or accept the offer. Upon accepting the offer the Client also makes a payment to the Printer.
* If the client rejects the offer the item goes back into Requested state and can be amended by the Client. Client can specify new quantity, amend the file and change the description.
* When the Printout is done (printed), it will get sent out and moved to Shipped status. This transition requires a tracking code as parameter.

The item in this case would be Printout and its properties are as follows:

#### Printout

| Property | Type |
|----------|----- |
| Id | Integer|
| Status | Integer|
| Name | String|
| Price | Money|
|Description | String|
| STL File Url| String|
| Client | User|
|Printer| Restricted User |
| Quantity | Integer |

In the course of the workflow the attributes would change as the item evolves:

<div class="wide">

![Item attributes evolving over the course of the workflow](/img/screens/item_example.png) 


</div>

### Available attribute types

| Type | Description | Example |
| -----|-------------|---------|
| Text | Textual data| Name of item|
|Integer| Full number | Count |
|Yes/no | Tickbox | Can pay out funds? |
| Float | Number with comma | Height |
| Type | Predetermined list of select words | Shape: Circle, Square, Hexagon |
| Date | Time with date accuracy | Deadline |
| Timestamp | Time with second accuract | Created at |
| Money | Number with comma and currency sign, can be used as payment in select crypto currency | Price |
| User | Wallet address | Owner |
| Restricted user | Whitelisted wallet address | Employee |
| Blob | Any file upload, will be stored in IPFS | Evidence zip |
| Image | File of image type, will be stored in IPFS | Applicant Photo |
| Address | A struct with Street, Region, Index, Country selector | Shipping address |
| Name, email and address | Same as Address but adds person name and email fields | Billing address |
| Other flow id | Id of an item in another flow | Car model Id |


### Transient attributes

When adding new items you can mark them as "Transient". The difference with normal attributes is that transient ones will not get saved with the item and will not take storage space on the blockchain.

![Define the object attributes](/img/screens/create_workflow_transient.png)

#### Benefits of Transient attributes

Why would one use transient attributes?
* If you have a Charity workflow, with a Transition called Donate which takes in a parameter called Donation Amount it makes sense to mark it as "Transient" because the last donation amount would not give any meaningful information. It makes sense to only use it during that donation to create a one-time [payment](transitions/payments) with that amount. Furthermore, one can always find out the historic donations by looking at the blockchain history.
* If you use it as an intermediate variable for the [calculation](transitions/calculations) step. For example a transient parameter could be Days (integer), but calculation step would convert it into seconds and store a Deadline (timestamp) instead using the following expression: ```now() + (Days * 24 * 60 * 60)```.