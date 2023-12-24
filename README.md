Querify- A React application to handle SQL queries.
Overview- Querify includes mainly two divs which is query area and query result and some buttons to operate queries. Also it includes some queries which are predefined and you can select them from the button also you can reset any query if you want for this operation I used the useState hook and for the result I again used useState hook and each time run button is clicked a function handleRun will be called which will set state of result according to text in queryArea. Keeping user convenience in mind Paste Query button is also added which will ask permission to access clipboard and will set query to that.Also I enabled dark theme mode and provided a button to toggle for the user convenience.
TechStack-React, Tailwind CSS
main packages-react papaparse
Speed Index-1.6s 
![image](https://github.com/jatinkharbanda33/querify/assets/76038276/ac23ea0e-3b2e-46b1-9ba1-9e909c1db644)

I measured the speed index using google lighthouse.
Optimisations-
1-used tailwind css which speed up the development
2-used memo for stopping re-rending of my query result when only my text was changing which decrease my speed index by 0.2 s.
