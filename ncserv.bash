#!/bin/bash
# To run type
# source ncserv.bash

PORT=8080
arr=( 0 1 2 5 )

echo -e "Server started at port $PORT\nPress Ctrl+c to exit"
while [ 1 ]; do 
	echo -en "{\"gsid\": \"$RANDOM\"}\n" | tee - | nc -l $PORT; 
	echo -en "{\"gameID\": \"$RANDOM\"}\n" | tee - | nc -l $PORT;
	echo -en "{\"scratch\": \"${arr[`expr $RANDOM % 5`]}\"}\n" | tee - | nc -l $PORT;
	echo -en "{\"response\": \"OK\"}\n" | tee - | nc -l $PORT;  
	echo -en "{\"amount\": \"$RANDOM\"}\n" | tee - | nc -l $PORT;
done
