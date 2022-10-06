-- Get department, no of employees in a department, total salary with respect to a department from employee table order by total salary descending.
SELECT DepartmentName, sum(salary) as total_salary, count(name) as total_emp FROM Emp group by DepartmentName order by total_salary desc
