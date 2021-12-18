from django.db import models
from django.db.models.fields import DateTimeField

# Create your models here.

class RequirementsDoc(models.Model):

    # Adding Fields related to the request for quotations doc
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deadline = models.DateTimeField()

    def __str__(self):
        return self.name

class Item(models.Model):
    
    # Adding Fields related to the Items doc
    max_budget = models.BigIntegerField()  
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200, null=True, blank=True)
    quantity = models.IntegerField()
    units = models.CharField(max_length=20)

    # Foreign key connecting with RequirementsDoc
    req_doc = models.ForeignKey(RequirementsDoc, on_delete= models.CASCADE)

    # Choices for industry categories
    CLOTH_TEXT = 'CT'
    PETROL_CHEM_PLASTIC = 'PCP'
    ELEC_COMP_TRASNPORT = 'ECT'
    FOOD_PROD = 'FP'
    METAL_MANUFACTURE = 'MM'
    WOOD_LEATHER_PAPER = 'WLP'
    INDUSTRY_CATEGORY_CHOICES = [
        (CLOTH_TEXT, 'Clothing and Textiles'),
        (PETROL_CHEM_PLASTIC, 'Petroleum, Chemicals and Plastics'),
        (ELEC_COMP_TRASNPORT, 'Electronics, Computers and Transportation'),
        (FOOD_PROD, 'Food Production'),
        (METAL_MANUFACTURE, 'Metal Manufacturing'),
        (WOOD_LEATHER_PAPER, 'Wood, Leather and Paper')
    ]

    industry_category = models.CharField(max_length=3,
        choices=INDUSTRY_CATEGORY_CHOICES)

class Quote(models.Model):

    # Foreign key connecting with Item
    item = models.ForeignKey(Item, on_delete= models.CASCADE)

    # Other fields related to Quote
    price = models.BigIntegerField()
    delivery_by = DateTimeField()
    quantity_provided = models.IntegerField()
    units = models.CharField(max_length=20)
    message = models.CharField(max_length=200, blank= True, null= True)