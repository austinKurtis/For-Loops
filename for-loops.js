
for (var count = 5; count < 120; count = count + 10) {
   console.log("Current value is ", count);
}


for (var count = 4096; count >= 1; count = count / 2) {
   console.log("Current value is ", count);
}

//List of Presiendts

var presidents, pLen, i;

presidents = ["George Washington","John Adams","Thomas Jefferson","James Madison","James Monroe","John Quincy Adams","Andrew Jackson","Martin Van Buren","William H. Harrison","John Tyler","James K. Polk","Zachary Taylor","Millard Fillmore","Franklin Pierce","James Buchanan","Abraham Lincoln","Andrew Johnson","Ulysses S. Grant","Rutherford B. Hayes","James A. Garfield","Chester A. Arthur","Grover Cleveland","Benjamin Harrison","Grover Cleveland","William McKinley","Theodore Roosevelt","William H. Taft","Woodrow Wilson","Warren G. Harding","Calvin Coolidge","Herbert Hoover","Franklin D. Roosevelt","Harry S. Truman","Dwight D. Eisenhower","John F. Kennedy","Lyndon B. Johnson","Richard M. Nixon","Gerald R. Ford","Jimmy Carter","Ronald Reagan","George H. W. Bush","Bill Clinton","George W. Bush","Barack Hussein Obama","Donald J Trump"];

pLen = presidents.length;

for(i = 0; i < pLen; i++){
	console.log("President #" + [i+1] + " " + presidents[i]);
}
