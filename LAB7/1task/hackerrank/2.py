n=int(input())
s=set(map(int,input().split()))

m=int(input())

for _ in range(m):
    command=input().split()
    
    if command[0]=="pop":
        if s:
         s.pop()
    elif command[0]=="remove":
         x = int(command[1])
         if x in s:
            s.remove(x)
    elif command[0]=="discard":
        s.discard(int(command[1]))

print(sum (s))