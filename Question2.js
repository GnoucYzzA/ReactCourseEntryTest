//Question a
const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mostfr = 1;
let m = 0;
let counter;

for(let i=0; i<arr1.length; i++)
{
    for (let j=i; j<arr1.length; j++)
    {
        if(arr1[i] == arr1[j])
        m++;
        if (mostfr<m) {
            mostfr = m;
            counter = arr1[i];
        }
    }
    m = 0;
    
}
console.log(counter, "=", mostfr, "times" );