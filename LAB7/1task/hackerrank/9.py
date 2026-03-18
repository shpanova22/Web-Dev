students = []

for _ in range(int(input())):
    name = input()
    grade = float(input())
    students.append([name, grade])

grades = sorted(set(grade for name, grade in students))
second_lowest = grades[1]

names = sorted(name for name, grade in students if grade == second_lowest)

for name in names:
    print(name)