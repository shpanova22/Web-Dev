x=int(input())

n=0

while x>0:
    n+=x%10
    x//=10    
print(n)