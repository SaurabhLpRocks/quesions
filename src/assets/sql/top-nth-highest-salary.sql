-- Select 4th Highest salary from employee table

select top 1 Salary from
(
select distinct top 4 Salary as Salary from Emp order by Salary desc
) as result
order by Salary;
