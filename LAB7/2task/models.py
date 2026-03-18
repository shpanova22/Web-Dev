class Product:
    def __init__(self, name, price, stock):
        self.name=name
        self.price=price
        self.stock=stock
        
    def apply_discount(self, percentage):
        self.price-=self.price*(percentage/100)
        return f"New price for{self.name}: ${self.price:.2f}"
    
    def update_stock(self, amount):
        self.stock+=amount
        return f"Updated stock for {self.name}: {self.stock} units"
    
    def __str__(self):
        return f"Product:{self.name} | Price: ${self.price:.2f} | Stock: {self.stock}"
    
class Electronics(Product):
    def __init__(self, name, price, stock, warranty_months):
        super().__init__(name, price, stock)
        self.warranty_months = warranty_months
        
        
    def __str__(self):
        return f"{super().__str__()} | Warranty:{self.warranty_months} months"
    
    def extend_warranty(self, extra_months):
        self.warranty_months+=extra_months
        return f"New warranty for {self.name}:{self.warranty_months} months"
    
    
class Clothing(Product):
    def __init__(self, name, price, stock, size):
        super().__init__(name, price,stock)
        self.size=size
        
    def apply_discount(self, percentage):
        extra_discount=percentage+5
        return super().apply_discount(extra_discount)
    
    def __str__(self):
        return f"{super().__str__()} | Size:{self.size}"