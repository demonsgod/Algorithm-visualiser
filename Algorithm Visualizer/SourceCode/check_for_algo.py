import os
directories = os.listdir("./src/components")
with open("./src/Algos.js") as file:
    lines = file.readlines()
key_words = {}
present_ones = []
for line in lines:
    if "import" in line:
        key_word = line.split()[1].lower()
        present_ones.append(key_word)
        for i in range(len(lines)):
            if "value" in lines[i]:
                if lines[i].split()[1][1:-2] == key_word:
                    key_words[key_word] = lines[i+1].split('"')[1]
def Diff(li1, li2):
    li_dif = [i for i in li1 + li2 if i not in li1 or i not in li2]
    return li_dif
not_present = Diff(directories,present_ones)
if len(directories) == len(present_ones):
    print("No New Algorithm has been created")
elif len(directories) > len(present_ones):
    print("Found new algos:",", ".join(not_present))
else:
    print("Some Algorithms has been deleted: ",", ".join(not_present))

final_lines = ""
for file in directories:
    temp = 'import {} from "./components/{}/App.js"\n'.format(file.capitalize(),file)
    final_lines+=temp
final_lines+="\n"
final_lines+= "const algorithms =["
for file in directories:
    key_word = key_words.get(file,0)
    if key_word == 0:
        key_word = input("Enter Algorithm Name for "+file+": ")
    final_lines+="{"
    temp = '\nvalue: "{}",\ntext: "{}",\ndom: <{} />\n'.format(file,key_word,file.capitalize())
    final_lines+=temp
    final_lines+="},\n"
final_lines+="]\n\n\nexport default algorithms"

with open("./src/Algos.js","w") as file:
    file.write(final_lines)
