data = "2,3"
data_array = data.split(",")

print(data_array) // output ['2', '3'] 
for value in data_array:
    print(value) //output  2 3


a = { 'aa': '1', 'ss': '2' }
b = { 'sa': '13', 'sds': '4' }
c = { 'sadsa': '5', 'ssd': '6' }
d = { 'sdsa': '7', 'dsd': '8' }

# Merge all dictionaries into a single dictionary
combined_dict = {**a, **b, **c, **d}

# Loop through the combined dictionary
for key, value in combined_dict.items():
    print(f"{key} => {value}")
output aa => 1
ss => 2
sa => 13
sds => 4
sadsa => 5
ssd => 6
sdsa => 7
dsd => 8


a = {'aa': '1', '2': None}
b = {'sa': '13', '4': None}
c = {'5': None, '6': None}
d = {'7': None, '8': None}

combined_array = [a, b, c, d]

print(combined_array)
[
  {'aa': '1', '2': None},
 {'sa': '13', '4': None},
 {'5': None, '6': None},
 {'7': None, '8': None}
]

if have empty array # Define an empty array
data_array = []

# Append data to the array
data_array.append(1)
data_array.append(2)
data_array.append(3)

# Print the array
print(data_array) //output [1, 2, 3]
if have multiple array # Define an empty array
data_array = []

# Extend the array with multiple elements
data_array.extend([1, 2, 3])

# Print the array
print(data_array)

