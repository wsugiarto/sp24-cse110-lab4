1. 3 because vars will exists even beyond the loop block
2. 150 because vars exists beyond loop block, so after the calculations it persists after last iteration.
3. 150 because vars exists beyond code blocks and after the loop calculations we get 150. 
4. [50, 100, 150] because we are calculating the 50% discount across 100,200, 300 array and returning the discounted prices.
5. ReferencedError, because i is in the loop code block and is using let.
6. ReferencedError, because discountedPrice is in the loop code block and using let.
7. 150 because its declared within the same scope as the print statement so it will not cause errors after the calculations are put in.
8. [50, 100, 150] because we are calculating the 50% discount across 100,200, 300 array and returning the discounted prices.
9. ReferenceError, because i is in the loop code block and is using let.
10. 3 because length is within the scope of the print.
11. [ 50, 100, 150 ] because we are calculating the 50% discount across 100,200, 300 array and returning the discounted prices.const works because we are not changing what discounted is pointing to instead we are editing whats inside that reference.
12.   
A. student.name;  
B. student["Grad Year"];  
C. student.greeting();  
D. student["Favorite Teacher"].  name;  
E. student.courseLoad[0];  
13.   
A. '32' because 2 is converted to a string first, so its string concatenation  
B. 1 because 3 is converted to a Number and subtracted from  
C. 3 because null is seen as a 0 Number  
D. '3null', null gets converted to a string  
E. 4 because true is seen as 1 in Number  
F. 0, both are converted to 0 in Number form  
G. '3undefined', because undefined is converted to a string and concatentated  
H. NaN because undefined is NaN in number form   

14. 
A. true because '2' is converted to a Number   
B. false because they are using string comparison since both are strings   
C. true because '2' is converted to a number first  
D. false because === doesn't use type conversion automatically  
E. false because true is converted to 1  
F. true because Boolean(2) is true for non 0 numbers

15. == faciliates automatic type conversion, while === doesn't, so the strict equality requries the 2 items to be the same type and value 
16. In js file.
17. We call modifyArray with [1,2,3] and doSomething as params. Then create newArr as an empty array. While iterating through the elements of array, we will attempt to push the output of doSomething(array[i]), so we go to this call back in doSomething and run the function before pushing into the newArr. Thus after iterating over array, then we will return [2,4,6].
18. in js file.
19. It prints the following since 1 and 4 don't have any setTimeouts. Then 3 because thats the earliest timeout, lastly 2 after the delay.  
1  
4  
3  
2  