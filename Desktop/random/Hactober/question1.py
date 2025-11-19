x1,y1,x2,y2,r=map(int,input().split())
a=(x2-x1)**2
b=(y2-y1)**2
if (a+b)**0.5==r*2 or (a+b)**0.5<r*2:
    print("YES")
else:
    print("NO")