from models import Product, Electronics, Clothing

def main():
    laptop=Electronics("MacBook Air",1000, 5, 12)
    tshirt = Clothing("Cotton T-Shirt", 20, 50, "M")
    headphones = Electronics("Sony XM5", 350, 10, 24)
    
    
    inventory = [laptop, tshirt, headphones]
    
    for item in inventory:
        print(item)
        
        
        
    print(laptop.extend_warranty(6))   
    print(tshirt.update_stock(10))
    
    for item in inventory:
        print(item.apply_discount(10))
        
if __name__=="__main__":
     main()
    
    