show databases;
use mysql;
show tables;
select * from component;
create table Persons
(PersonID int, 
FirstName varchar(255),
LastName varchar(255),
City varchar(255));
select * from Persons;
insert into Persons 
VALUES(1, 'Josiah', 'Tsang','Toronto');
select * from Persons;
insert into Persons 
VALUES(1, 'Reuban', 'James','Austin');
select * from Persons;
insert into Persons 
VALUES(3, 'Isiah', 'Sareen','Chenai');
insert into Persons 
VALUES(3, 'Dano', 'Jaeyang','Malaysia');
select * from Persons;
select * from Persons
where city = 'Chenai';
select FirstName from Persons;