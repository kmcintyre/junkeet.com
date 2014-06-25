#!/bin/bash
find . -print | while read FILENAME
do 
	rename -v 's/-/_/g' "$FILENAME"
done