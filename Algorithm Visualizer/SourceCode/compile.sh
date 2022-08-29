#! /bin/bash
source=/home/leibton/Documents/Web\ Development/Algorithm\ Visualizer/visualizer_main
dest=/home/leibton/Documents/Web\ Development/Algorithm\ Visualizer/visualizer_topush
srccode=SourceCode
cd "$source"
echo "Building React Code"
npm run-script build
cd "$dest"
echo "Git pulling"
git pull origin main
echo "Deleting all file of the push folder to add new files."
rm -r "$dest/"*
echo "Copying build script into script folder"
cp -r "$source/build/"* "$dest"
cp  "$source/README.md" "$dest"
cd "$dest"
mkdir "$srccode"
echo "Copying files in SourceCode"
cd "$source"
files=(*)
for i in "${files[@]}"
do
if [[ "node_modules build README.md" != *"$i"* ]]; then
echo "$i"
cp -r "$source/$i" "$dest/$srccode"
fi
done
echo "All Source files copied in $srccode."
cd "$dest"
echo "Pushing into Github"
git add .
echo "Enter Commit Message."
read message
git commit -m "$message"
git push origin main
echo "New Source Code and site files added."
