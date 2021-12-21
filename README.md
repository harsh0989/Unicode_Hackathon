# BestDeal
---
## Overview
Most of the time is spent finding the best prices from suppliers. To make it easier for a
company to send their requirements and get the prices from multiple vendors a portal was
needed to be created. **BestDeal** offers this specific functionality by acting as a _bridge_ between the client and the vendor. It accepts [_Requests for Quotations (RFQs)_](https://www.g2.com/articles/rfq) from the client according to his requirements and sends them to the relevant vendors who might be interested in providing a quote. The client can make an informed decision by comparing the various quotes. Thus, the client can procure the required items at the **cheapest rate** and in the **least time**!

## Features
Here is the complete set of features implemented on the portal:

- ### Login and Signup 
    The clients and vendors can separately register on the portal. Token authorization has been implemented on the backend along with email verification via SMTP during Signup.
 
- ### Requirement Docs (RFQs)
    The client is able to create as many requirement docs as desired. Each requirement doc is a collection of many items that the client wants to procure. The client can set a deadline, before which vendors can send their quotes. All the items will be displayed to the client according to the requirement doc they belong to.
    
- ### Whatsapp Notifications
    Once the client sets a deadline and enters the details of his requirements, a Whatsapp notification is sent to those vendors that deal in the supply of the required items. This feature has been implemented using the [Wassenger API](https://wassenger.com/). A link to view the requirement doc is sent to each vendor,  where they can give their quotation.
    
- ### Quotations
    The vendors will send their own quotations to any item in the requirement doc which they can provide. The vendors may also update the given quotations if the desire to do so. All the quotations will be diplayed item wise to the client so that they can compare.
    
- ### Creating a final list
    The client will be able to compare and choose a quotation which seems most reasonable. All the selected quotations will be displayed together to the client as a final list.
    

## Roadmap
Here are some of the features we're planning to implement:

- ### Bidding between the vendors
    The vendors will be able to see quotations from other vendors and will be able to update their quotation accordingly resulting in a bidding scenario which will benefit the client.
    
- ### Rating system
    The clients could provide a rating and review to each procurement which will help in better decision making in the future and provide feedback to the vendors.
    
